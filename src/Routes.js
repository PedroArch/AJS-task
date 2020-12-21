import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function Routes ({users, cadastrar}) {

    const handleCadastrarUsuario = (user) => {
        cadastrar(user);        
    }
        
    return (
        
            <Switch>
                <Route exact path="/" component={Home} />                
                <Route path="/list">
                    <List users={users} />
                </Route> 
                <Route path="/signup">
                    <Signup cadastrar={handleCadastrarUsuario}/>
                </Route>
                <Route path="/login" component={Login} />
            </Switch>        
    )
}