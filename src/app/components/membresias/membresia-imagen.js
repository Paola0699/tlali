import Image from "next/image";
import React from "react";

const MembresiaImagen = () => {
  return (
    <Image
      alt={"membresiasImg"}
      src={"/assets/img/img_1.JPG"}
      width={400}
      height={400}
      style={{ objectFit: "cover", borderRadius: '50%' }}
    />
  );
};

export default MembresiaImagen;
