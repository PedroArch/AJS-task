import React, {useState, useEffect} from 'react';
import Routes from './Routes'




export default function App() {

  const [users, setUsers] = useState( [{name: "vini", email: "vini@mail.com"}, {name: "Tiago", email: "tiago@mail.com"} ])
  
  useEffect(() => {
      console.log(users);   
      
  }, [users])

  useEffect(() => {
      console.log(users);   
      
  }, [])

function handleCadastrar (user) {

    const newUsers = [...users, user]
    return setUsers(newUsers);
}



  return (
    <Routes users={users} cadastrar={handleCadastrar}></Routes>
  );
}


