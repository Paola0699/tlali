import Image from "next/image";
import React from "react";

const MembresiaImagen = () => {
  return (
    <Image
      alt={"membresiasImg"}
      src={"/assets/img/img_1.jpg"}
      width={300}
      height={400}
      style={{ objectFit: "cover" }}
    />
  );
};

export default MembresiaImagen;
