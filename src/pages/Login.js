import Header from '../components/Header';
import '../styles/login.css';
import {Form, Col, Row, Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Login () {
    return (
        <>
            <Header />
            <div id="loginMain">
                <h1>LOGIN</h1>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Senha
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Sua senha" />
                        </Col>
                    </Form.Group>
                </Form>
                    <Row>
                    <div id="buttonsStyle">
                        <Button variant="success">Cadastrar</Button>
                    </div>
                    <div id="buttonsStyle">
                        <Button variant="secondary">Logar</Button>
                    </div>
                    </Row>
            </div>
        </>
    )
}