
const Login = () => {
    return(
        <div> 
            <form onSubmit={handleSubmit}>
                Email: <input type="email" name="email" placeholder="email" />
                <br/>
                Password: <input type="password" name="password" placeholder="password" />
                <br/>
                <input type="submit" value="Login" />
            </form>
            <br/>
            <div>Not registered yet, <a href="/signup">SignUp</a></div>

        </div>
    )
}

export default Login