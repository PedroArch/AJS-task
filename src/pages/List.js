import Header from '../components/Header';
import {ListGroup} from 'react-bootstrap'

export default function List ({users}) {

    console.log(users)

    return (
        <>
            <Header />
            <ListGroup>
                {users.map(user => {
                    return (
                        <ListGroup.Item key={user.email}>Name: {user.name} Email: {user.email}</ListGroup.Item>
                    )
                })}
                
            </ListGroup>
        </>
    )
}