import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { useEffect, useState } from "react";

const Login = ({ title }) => {

  useEffect(() => {
    document.title = title;
  }, [title]);

  const navigate = useNavigate();

  const location = useLocation().pathname;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const createUser = async (event) => {
    event.preventDefault();
    // Create a new user
    const formData = { name, email, password };
    console.log(JSON.stringify(formData));
    const postUrl = 'http://127.0.0.1:5000/api/auth/register';

    try {
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      console.log(response);

      navigate('/dashboard');

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <section className="signup" id="Login">
        <h2>{location === "/login" ? "Welcome Back" : "Get Started"}</h2>
        <p>Enter your details to {location === "/login" ? "login" : "create an account"}</p>
        <form onSubmit={(e) => createUser(e)}>
          {(location !== "/login") && (
            <div>
              <label>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>)}
          <div>
            <label >Email Address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label >Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter Password" required />
          </div>
          <button type="submit">{location === "/login" ? "Login" : "Signup"}</button>
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
