import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const MembresiaImagen = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const imageWidth = isMdAndLg ? 400 :300;
  return (
    <Image
      alt={"membresiasImg"}
      src={"/assets/img/img_1.JPG"}
      width={imageWidth}
      height={imageWidth}
      style={{ objectFit: "cover", borderRadius: '50%' }}
    />
  );
};

export default MembresiaImagen;
