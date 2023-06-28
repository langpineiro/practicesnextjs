import React from "react";
import Image from "next/image";
import Link from "next/link";
async function getUser(id: number) {
  const data = await fetch(`https://reqres.in/api/users/${id}`);
  const transformacion = await data.json();
  const userIndividual = transformacion.data;
  return userIndividual;
}

const Userpage = async ({ params }: { params: any }) => {
  const valores = await getUser(params.id);
  return (
    <>
      <div className="flex flex-cols-1 my-10 sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4 gap-4 items-center justify-center ">
        <div className="dark:bg-black shadow-lg rounded-lg p-6 flex">
          <div className="dark:bg-black shadow-lg rounded-lg overflow-hidden">
            <h1 className="font-bold text-white">Detalle de usuario</h1>
            <ul>
              {
                <li key={valores.id}>
                  <div>
                    <h5 className="text-white">Nombre {valores.first_name}</h5>
                    <p className="text-white"> Apellido {valores.last_name}</p>
                    <p className="text-white">Correo: {valores.email}</p>
                  </div>
                  <img src={valores.avatar} />
                </li>
              }
            </ul>
            <button className="bg-sky-500 hover:bg-sky-700 my-10 shadow-lg rounded-lg">
            <Link className="px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md" href="/">Regresar</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <h1>Detalle de usuario</h1>
       <ul>
        {
          <li key={valores.id}>
            <div>
              <h5>
                {valores.first_name}
              </h5>
              <p>{valores.last_name}</p>
            </div>
            <img src={valores.avatar}/>
          </li>
        }
       </ul> */}
    </>
  );
};

export default Userpage;
