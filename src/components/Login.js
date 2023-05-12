import React from "react"
import { Form, Button } from "react-bootstrap"


const Login = ({onSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit()
    }
    return (
        <div className="login-container">
            <h3>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <br/>
            <div>Not registered yet? <a href="/signup">Signup</a></div>
        </div>
    )
}

export default Login
