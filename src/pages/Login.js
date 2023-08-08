import Google from "../img/google-icon.png"
import "./Login.css"
const Login = () => {
    const google = () =>{
        window.open("http://localhost:5000/auth/google","_self")
    }
    return ( 
        <div className="loginPage">
            <div className="loginBtn google" onClick={google}> 
                <img src={Google} alt=""/>
                Login with Google
            </div>
        </div>
     );
}
 
export default Login;