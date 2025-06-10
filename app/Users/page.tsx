import React from 'react'

interface User{
  id:number,
  name:string,

}
const Userspage = async() => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {cache: 'no-cache'});
 const users: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(User => <li key={User.id}>{User.name}</li>)}
      </ul>
    </div>
  )
}

export default Userspage;
