import React from 'react'

const Users = ({data}:{data:any}) => {
  return (
    <ul>
    {
      data.map((user:any) => (
        <li key={ user.id }>
          <div>
            <h5>{user.first_name}</h5>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar}/>
        </li>
      ))
    }
  </ul>
  )
}

export default Users