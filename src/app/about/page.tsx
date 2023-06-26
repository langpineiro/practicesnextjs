import React from "react";
import img from "@/app/images/LogoEmpresa.png";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-white flex flex-row space-x-4 shadow-lg rounded-lg p-6 max-w-md w-full">
          <Image
            className="h-48 w-full object-center md:h-full md:w-48 basis-1/2"
            src={img}
            alt="LOGO DE LA EMPRESA"
          />
          <div>
            <h3 className="basis-1/2 font-bold">SOFTPLAY COMPANY</h3>
            <p className="indent-8 ">
              Somos una empresa comprometida al mejoramiento de tus procesos,
              mediante la automatización de los mismos, desarrollamos software
              de calidad hecho a la medida de tus requerimientos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
