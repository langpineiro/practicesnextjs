import React from 'react'
import Users from '@/components/Users'

const fetchData = async() =>{
  const res =  await fetch('https://reqres.in/api/users');
  const users = await res.json();
  return users.data;
}
const page = async() => {
  const data = await fetchData();
  return (
    <>
         <h1>INDEX PAGE</h1>
         <Users data={data}/>
    </>
    
  )
}

export default page