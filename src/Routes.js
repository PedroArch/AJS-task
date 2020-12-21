import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List'
import Login from './pages/Login'
import Signup from './pages/Signup'



const Routes = () => {

    const [users, setUsers] = useState([{name: "vini", email: "vini@mail.com"}, {name: "Tiago", email: "tiago@mail.com"} ])

    useEffect(() => {
        console.log(users);   
        
    }, [users])

    useEffect(() => {
        console.log(users);   
        
    }, [])



    function handleCadastrar (user) {

        const newUsers = [...users, user]
        setUsers(newUsers);
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