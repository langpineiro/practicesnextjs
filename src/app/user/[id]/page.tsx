
import React from 'react'
async function getUser(id:number){
 const data = await fetch(`https://reqres.in/api/users/${id}`);
 const transformacion = await data.json();
 const userIndividual = transformacion.data;
  return userIndividual;
}

const Userpage = async({params}:{params:any}) => {
 const valores = await getUser(params.id);
  return (
    <>
       <h1>Detalle de usuario</h1>
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
       </ul>
    </>
  )
}

export default Userpage