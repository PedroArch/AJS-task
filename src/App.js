import React, {useState} from 'react';
import Routes from './Routes'

export default function App() {
  const [users, setUsers] = useState([{name: "vini", email: "vini@mail.com"}, {name: "Tiago", email: "tiago@mail.com"}])

  function handleCadastrar (user) {
    const newUsers = [...users, user];


    setUsers(newUsers);
    
    console.log('Cadastrou');
  }

  return (
    <Routes users={users} cadastrar={handleCadastrar} />
  );
}