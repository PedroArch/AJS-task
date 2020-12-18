import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List'
import Login from './pages/Login'
import Signup from './pages/Signup'



const Routes = () => {

    const [users, setUsers] = useState([{name: "vini", email: "vini@mail.com"}])

    function handleCadastrar (user) {
        setUsers(users.push(user));
        console.log(users)
    }


    
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list">
                    <List users={users}/>
                </Route>
                <Route path="/signup">
                    <Signup users={users} cadastrar={handleCadastrar}/>
                </Route>
                <Route path="/login" component={Login} />
            </Switch>
        </>
    )
}

export default Routes;