import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import Loader from "./Loader";
import FetchHelper from "../assets/scripts/fetchHelper";

const Login = ({ title, setUserData, setLoggedIn, loggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [popupMsg, setPopupMsg] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  useEffect(() => {
    if (loggedIn) navigate('/dashboard');
  }, [loggedIn, navigate])

  useEffect(() => {
    document.title = title;
    setEmail('');
    setEmailError('');
    setName('');
    setPassword('');
    setAccountCreated(false);
  }, [title]);

  const createUser = async (event) => {
    event.preventDefault();
    setEmailError('');
    setAccountCreated(false);
    setPopupMsg(
      <>
        <Loader className="loading-div"></Loader>
      </>);
    setIsPopupOpen(true);
    // Create a new user
    const formData = { name, email, password };
    const postUrl = 'http://localhost:9000/users';

    try {
      // const response = await fetch(postUrl, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData),
      // })

      const userData = await FetchHelper.registerUser(postUrl, formData);

      if (userData) {
        console.log('New User Created Successfully');
        setPopupMsg(
          <>
            <h1>Account Created Successfully</h1>
            <p>Login Now</p>
            <button onClick={() => closePopup()}>Close</button>
          </>);
        setAccountCreated(true);
        setIsPopupOpen(true);

      } else {
        console.error("Failed to create user");
        // const error = await response.json();
        // console.log(error.msg);
        setPopupMsg(
          <>
            <h1>Error Creating Account</h1>
            {/* <p>{error.msg}</p> */}
            <button onClick={() => closePopup()}>Close</button>
          </>);
      }

    } catch (error) {
      console.error(error);
      setPopupMsg(
        <>
          <h1>An Error Occurred</h1>
          <p>{error.message}</p>
          <button onClick={() => closePopup()}>Close</button>
        </>);
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
    setEmailError('');
    setPopupMsg(
      <>
        <Loader className="loading-div"></Loader>
      </>);
    setIsPopupOpen(true);

    try {
      // const formData = { email, password };
      // const getUrl = 'http://127.0.0.1:5000/api/auth/login';

      // const response = await fetch(getUrl, {
      //   method: 'POST',
      //  headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData),
      // })

      const userData = await FetchHelper.Login('http://localhost:9000/users', email, password);

      if (userData) {
        // const data = await response.json();
        setUserData(userData);
        setLoggedIn(true);
        console.log("Logged In")
        navigate('/dashboard');
        setIsPopupOpen(false)
      } else {
        console.error("Failed to login user");
        // const error = await response.json();
        // console.log(error.msg);
        // setEmailError(error.msg);
        setIsPopupOpen(false);
      }

    } catch (error) {
      console.log(error)
      setPopupMsg(
        <>
          <h1>Login Unsuccessful</h1>
          <p>{error.message}</p>
          <button onClick={() => closePopup()}>Close</button>
        </>
      )
      // setIsPopupOpen(false);
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
        {popupMsg}
      </Popup>
    </main>
  );
}

export default Login;
