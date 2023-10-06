import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { postBlog } from "@/services/blogServices";
import { app } from "@/firebase/firebase";
const storage = getStorage(app);

const BlogNewPostForm = ({ handleClose }) => {
  const [editorData, setEditorData] = useState("");
  const [postPhoto, setpostPhoto] = useState();
  const [loading, setLoading] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleImageInputChange = (e) => {
    setpostPhoto(e.target.files[0]);
  };
  const formik = useFormik({
    initialValues: {
      TITULO: "",
      AUTOR: "",
    },
    validationSchema: yup.object({
      TITULO: yup.string().required(),
      AUTOR: yup.string().required(),
    }),
    onSubmit: (values) => {
      handleSubmitBlogPost(values);
    },
  });

  const handleSubmitBlogPost = (values) => {
    setLoading(true);
    const documentRef = ref(storage, `blog/${Date.now()}`);
    const documentTask = uploadBytesResumable(documentRef, postPhoto);
    documentTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(documentTask.snapshot.ref).then(async (downloadURL) => {
          try {
            await postBlog({
              image: downloadURL,
              title: values.TITULO,
              author: values.AUTOR,
              description: editorData,
              date: new Date(),
            });
            setSuccessMessage("Se ha creado el post con éxito");
            handleReset();
          } catch (error) {
            setErrorMessage({
              message: "Ocurrió un error: ",
              error: error.message,
            });
          } finally {
            setLoading(false);
          }
        });
      }
    );
  };

  const handleReset = () => {
    formik.handleReset();
    setpostPhoto();
    setEditorData("");
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ color: "#665959", marginTop: "2rem" }}
    >
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      {errorMessage.message && (
        <Alert severity="error">
          {errorMessage.message}
          {errorMessage.error}
        </Alert>
      )}
      <TextField
        margin="dense"
        label="Título"
        size="small"
        InputLabelProps={{
          style: {
            color: "#665959", // Change the color of the label text
          },
          shrink: true,
        }}
        InputProps={{
          style: {
            color: "#665959", // Change the color of the input text
            borderColor: "#665959", // Change the color of the input border
          },
        }}
        fullWidth
        id="TITULO"
        name="TITULO"
        autoFocus={false}
        value={formik.values.TITULO}
        onChange={formik.handleChange}
        error={formik.touched.TITULO && Boolean(formik.errors.TITULO)}
        helperText={formik.touched.TITULO && formik.errors.TITULO}
      />
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleImageInputChange}
        accept="image/*"
      />
      <div
        style={{ padding: "2rem", border: "1px dashed rgb(102, 89, 89)" }}
        onClick={handlePictureClick}
      >
        <Typography variant="h5" textAlign={"center"}>
          Seleccionar Archivo
        </Typography>
        <Typography textAlign={"center"}>
          {postPhoto ? postPhoto.name : "(JPG, JPEG, PNG)"}
        </Typography>
      </div>
      <TextField
        margin="dense"
        label="Autor"
        size="small"
        InputLabelProps={{
          style: {
            color: "#665959", // Change the color of the label text
          },
          shrink: true,
        }}
        InputProps={{
          style: {
            color: "#665959", // Change the color of the input text
            borderColor: "#665959", // Change the color of the input border
          },
        }}
        fullWidth
        id="AUTOR"
        name="AUTOR"
        autoFocus={false}
        style={{ marginBottom: "1rem" }}
        value={formik.values.AUTOR}
        onChange={formik.handleChange}
        error={formik.touched.AUTOR && Boolean(formik.errors.AUTOR)}
        helperText={formik.touched.AUTOR && formik.errors.AUTOR}
      />
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
      />
      <br></br>
      <Button
        variant="contained"
        disabled={!postPhoto || !editorData || loading}
        style={{ marginRight: ".5rem" }}
        type="submit"
      >
        {loading ? progressPercent : "Crear Post"}
      </Button>
      <Button variant="outlined" onClick={() => handleClose()}>
        Cancelar
      </Button>
    </form>
  );
};

export default BlogNewPostForm;
