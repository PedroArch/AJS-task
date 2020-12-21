import Header from '../components/Header';
import {Row, Form, Col, Button} from 'react-bootstrap'
import {useState} from "react";

export default function Signup ({cadastrar, users}) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit () {
        const user = {name, email}
        cadastrar(user);
    }

    return (
        <>
            <Header />
            <div id="loginMain">
                <h1>CADASTRAR</h1>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextName">
                        <Form.Label column sm="2">
                        Nome
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control onChange={(event)=>{setName(event.target.value)}} type="text" placeholder="Qual seu nome?" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control onChange={(event)=>{setEmail(event.target.value)}}type="email" placeholder="Qual o seu email?" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail2">
                        <Form.Label column sm="2">
                        Confirmar email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="Reescreva seu email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Senha
                        </Form.Label>
                        <Col md={{ span: 6, offset: 4 }}>
                        <Form.Control type="password" placeholder="Qual sua senha?" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword2">
                        <Form.Label column sm="2">
                        Confirmar sua senha
                        </Form.Label>
                        <Col md={{ span: 6, offset: 4 }}>
                        <Form.Control type="password" placeholder="Reescreva a senha" />
                        </Col>
                    </Form.Group>
                </Form>
                    <Row>
                    <div id="buttonsStyle">
                        <Button onClick={handleSubmit} variant="success">Cadastrar</Button>
                    </div>
                    </Row>
            </div>
        </>
    )
}