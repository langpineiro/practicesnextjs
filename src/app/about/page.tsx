import React from 'react'
import img from '@/app/images/LogoEmpresa.png'
 const page = () => {
  return (
    <>
    <div className="max-w-sm mx-auto my-10">
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="h-48 w-full object-cover md:h-full md:w-48" src = "../images/LogoEmpresa.png" alt="Imagen de la card"/>
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800">Título de la Card</h3>
      <p className="text-gray-600 mt-2">Descripción de la Card.</p>
      <a href="#" className="block text-center bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">Botón</a>
    </div>
  </div>
</div>
       <h1 className='text-3xl font-bold underline'>ABOUT</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente, libero ducimus suscipit incidunt ratione neque ad cumque animi! Ipsum ipsa iusto similique impedit, amet deserunt id sed voluptates temporibus!
    Libero a quisquam velit laboriosam dolore, perspiciatis aliquam cumque at itaque eaque expedita eius pariatur nihil repudiandae suscipit blanditiis quasi optio laborum assumenda error quidem. Quae dolorem a voluptatibus libero.
    Odio facere unde inventore eveniet amet laudantium a quibusdam, in tenetur, quam cum? Tempore, eum. Asperiores laborum voluptas quaerat fugit, nulla officia doloribus tempora ut totam, optio voluptate delectus expedita!
    Modi aliquid error laboriosam ipsum accusamus earum voluptates, voluptate reiciendis excepturi aliquam dolor culpa nobis voluptatem explicabo magnam? Molestias amet dolorem sunt tenetur, voluptatibus pariatur quisquam reiciendis temporibus ex sapiente!
    Temporibus vero eligendi omnis fugiat, ipsa rem iure velit, laudantium quia ad pariatur illo distinctio officiis dolores incidunt corrupti perspiciatis. Impedit repellendus suscipit consequatur blanditiis nihil magni in fugit mollitia!</p>
    </>
  )
}

export default page