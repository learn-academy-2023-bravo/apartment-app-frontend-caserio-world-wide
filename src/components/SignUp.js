import React from "react"

const SignUp = () => {
    const handleSubmit = () => {
        console.log("yes")
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                Email: <input type="email" name="email" placeholder="email" />
                <br/>
                Password: <input type="password" name="password" placeholder="password" />
                <br/>
                <input type="submit" value="SingUp" />
            </form>
            <br/>
            <div>Already registered, <a href="/login">Login</a></div>
        </div>
    )
}

export default SignUp