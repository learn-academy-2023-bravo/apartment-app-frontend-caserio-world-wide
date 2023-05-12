import React from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SignUp = () => {

    // const formRef = useRef

const handleSubmit = () => {

        console.log("yes")
    }
    return (
        <div className="signup-container">
            <h3>Sign Up</h3>
            <Form onSubmit={handleSubmit}>
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