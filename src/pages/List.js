import Header from '../components/Header';
import {ListGroup} from 'react-bootstrap'

export default function List (props) {

    console.log(props)

    return (
        <>
            <Header />
            <ListGroup>
                {props.users.map(user => {
                    return (
                        <ListGroup.Item key={user.email}>Name: {user.name} Email: {user.email}</ListGroup.Item>
                    )
                })}
                
            </ListGroup>
        </>
    )
}