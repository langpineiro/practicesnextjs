import React from "react";
import img from "@/app/images/LogoEmpresa.png";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="flex flex-cols-1 my-10 sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4 gap-4 items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 flex">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            
          <div className="bg-gray-100 py-2 px-4">
              <Image
                 priority={true}
                className="h-full w-full self-auto md:h-full md:w-48"
                src={img}
                alt="Logo Empresa"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Softplay</h2>
              <p className="text-gray-700">
                 Es una empresa comprometida a la toma exacta de requerimientos para desarrollar software a la medida para que nuestros clientes se sientan agustos con su nuevo sistema de información
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center h-screen">
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
      </div> */}
    </>
  );
};

export default page;
