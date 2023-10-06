import { Button, TextField } from "@mui/material";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";

const LoginCodeVerification = ({ handleVerifyCode }) => {
  const [verificationCode, setVerificationCode] = useState("");
  return (
    <>
      <CurrencyFormat
        format="######"
        mask="_"
        customInput={TextField}
        margin="dense"
        label="Código de verificacion"
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
        type="number"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        style={{
          borderColor: "#83948f",
          backgroundColor: "#83948f",
          color: "white",
          marginTop: "2rem",
          fontFamily: "Rufina",
        }}
        onClick={() => handleVerifyCode(verificationCode)}
        disabled={verificationCode.length !== 6}
      >
        Verificar código
      </Button>
    </>
  );
};

export default LoginCodeVerification;
