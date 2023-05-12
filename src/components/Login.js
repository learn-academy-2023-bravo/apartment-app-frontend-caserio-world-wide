import React from "react"
import { Form, Button } from "react-bootstrap"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({login}) => {

    const formRef = useRef()
    const navigate = useNavigate()
   
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        const userInfo = {
            "user": { email: data.email, password: data.password }
        }
        login(userInfo)
        navigate('/')
        e.target.reset()

    }
    return (
        <div className="login-container">
            <h3>Login</h3>
            <Form ref={formRef} onSubmit={handleSubmit}>
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
