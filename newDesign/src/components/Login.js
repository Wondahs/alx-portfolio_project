import { Link, useLocation } from "react-router-dom";
import "../assets/styles/login.css";
import { useEffect } from "react";

const Login = ({title}) => {

  useEffect(() => {
    document.title = title;
  }, [title]);

  const location = useLocation().pathname;

  return (
    <main>
      <section className="signup" id="Login">
        <h2>{location === "/login" ? "Welcome Back" : "Get Started"}</h2>
        <p>Enter your details to {location === "/login" ? "login" : "create an account"}</p>
        <form action="#" method="POST">
          {(location !== "/login") && (
            <div>
            <label>Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>)}
          <div>
            <label >Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label >Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" required />
          </div>
          <button type="button">{location === "/login" ? "Login" : "Signup"}</button>
        </form>
        {location === "/login" ?
          (<p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>) :
          (<p>Already have an account? <Link to='/login'>Login</Link></p>)
        }
      </section>
    </main>
  );
}

export default Login;
