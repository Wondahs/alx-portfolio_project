import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { useEffect, useState } from "react";
import Popup from "./Popup";

const Login = ({ title, setUserData }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [popupMsg, setPopupMsg] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    document.title = title;
    setEmail('');
    setEmailError('');
    setName('');
    setPassword('');
    setAccountCreated(false);
    setLoggedIn(false);
  }, [title]);

  const createUser = async (event) => {
    event.preventDefault();
    setEmailError('');
    setAccountCreated(false);
    // Create a new user
    const formData = { name, email, password };
    const postUrl = 'http://127.0.0.1:5000/api/auth/register';

    try {
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('New User Created Successfully');
        setPopupMsg('Account Created Successfully');
        setAccountCreated(true);
        setIsPopupOpen(true);
      } else {
        console.error("Failed to create user");
        const error = await response.json();
        console.log(error.msg);
        setEmailError(error.msg);
      }

    } catch (error) {
      console.error(error);
      setPopupMsg('An Error Occurred');
      setIsPopupOpen(true);
    }
  }

  const closePopup = () => {
    setIsPopupOpen(false);
    setEmailError('');
    accountCreated && navigate('/login');
  }

  const loginUser = async (event) => {
    event.preventDefault();
    setLoggedIn(false);

    try {
      const formData = { email, password };
      const getUrl = 'http://127.0.0.1:5000/api/auth/login';

      const response = await fetch(getUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setLoggedIn(true);
        navigate('/dashboard');
      } else {
        console.error("Failed to login user");
        const error = await response.json();
        console.log(error.msg);
        setPopupMsg(error.msg)
        setEmailError(error.msg);
        setIsPopupOpen(true);
      }

    } catch (error) {
      console.log(error)
    }



  }

  return (
    <main>
      <section className="signup" id="Login">
        <h2>{location === "/login" ? "Welcome Back" : "Get Started"}</h2>
        <p>Enter your details to {location === "/login" ? "login" : "create an account"}</p>
        <form onSubmit={location === "/login" ? (e) => loginUser(e) : (e) => createUser(e)}>
          {(location !== "/login") && (
            <div>
              <label>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>)}
          <div>
            <label >Email Address</label>
            <input className="email-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <p className="email-error">{emailError}</p>
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
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h1>{popupMsg}</h1>
        <button onClick={() => closePopup()}>Close</button>
      </Popup>
    </main>
  );
}

export default Login;
