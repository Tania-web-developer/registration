import { Button, Form } from 'react-bootstrap';

export default function Registration() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control type="text" placeholder="Login"/>                
            </Form.Group>            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>                                      
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}