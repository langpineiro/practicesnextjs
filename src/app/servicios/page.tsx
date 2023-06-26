import React from "react";
import imagenFarmacia from "@/app/images/farmaciaSisterma.png";
import imagenInventario from '@/app/images/sistemaInventarios.jpg';
import imagenTienda from '@/app/images/tiendaEnLinea.jpg'
import imagenCRM from '@/app/images/sistemaCRM.png';
import Image from "next/image";
const page = () => {
  return (
    <div className="grid grid-cols-1 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Sistemas de farmacias</h2>
            <p className="text-gray-700">
              Si tu empresa es una farmacia nosotros desarrollamos el software a
              la medida para que tu trabajo sea mas eficiente
            </p>
          </div>
          <div className="bg-gray-100 py-2 px-4">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={imagenFarmacia}
              alt="sistema de farmacias"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Sistemas de Inventario de Bodega</h2>
            <p className="text-gray-700">
              Facilitamos tu gestión de bodega, compra y venta de mercancias mediante un sistema que se ajusta a tus necesidades
            </p>
          </div>
          <div className="bg-gray-100 py-2 px-4">
            <Image
              className="h-48 w-full object-center md:h-full md:w-48"
              src={imagenInventario}
              alt="sistema de farmacias"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Tiendas en línea</h2>
            <p className="text-gray-700">
              Creamos tu negocio digital, automatizamos tu negocio mediante una tienda en línea, para que tus productos se vendan mucho mas rapido y tengan mas alcance, integramos pagos con paypal y mediante tarjetas.
            </p>
          </div>
          <div className="bg-gray-100 py-2 px-4">
            <Image
              className="h-48 w-full object-center md:h-full md:w-48"
              src={imagenTienda}
              alt="sistema de farmacias"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Sistemas CRM</h2>
            <p className="text-gray-700">
            Un sistema de CRM es un software para hacer la gestión comercial de la empresa. En la herramienta, están registrados los datos de los clientes, leads y el cliente potencial que espera por ti, junto a las informaciones sobre el desempeño del equipo de ventas. Con base en estas informaciones, el sistema de CRM genera informes que sirven para la toma de decisiones, volviendo al área comercial más orientada a los datos.
            </p>
          </div>
          <div className="bg-gray-100 py-2 px-4">
            <Image
              className="h-50 w-full object-center md:h-full md:w-48"
              src={imagenCRM}
              alt="sistema de farmacias"
            />
          </div>
         </div>
      </div>
    </div>
  );
};

export default page;
