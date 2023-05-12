import React from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({signup}) => {

    const formRef = useRef()
    const navigate = useNavigate()
   
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        const userInfo = {
            "user": { email: data.email, password: data.password }
        }
        signup(userInfo)
        navigate('/')
        e.target.reset()
    }
    return (
        <div className="signup-container">
            <h3>Sign Up</h3>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Enter password" />
                </FormGroup>
                <Button color="primary">Sign Up</Button>
            </Form>
            <div className="login-container">
                <span>Already registered?</span>
                <a href="/login">Login</a>
            </div>
        </div>
    )
}

export default SignUp