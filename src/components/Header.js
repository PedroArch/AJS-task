import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">                    
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/list" >List</Nav.Link>
                    <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                    <Nav.Link as={Link} to="/signup" >Signup</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}