import React from 'react';
import './styles/layout.css';
import './styles/signup.css';

const Header = () => (
  <header>
    <h1 id="company-name">Job sync</h1>
    <nav id="nav-bar">
      <ul className="header-nav">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Job List</a></li>
        <li><a href="">Pages</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
    </nav>
    <a className="get-started" href=""><button id="get-started-cta">Get Started</button></a>
    <img id="nav-button" src="./images/nav-button.svg" alt="Nav Button" className="nav-button" />
  </header>
);

const LoginForm = () => (
  <section className="signup" id="Login">
    <h2>Welcome Back</h2>
    <p>Enter your details to login</p>
    <form action="#" method="POST">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="#login">Sign Up</a></p>
  </section>
);

const Footer = () => (
  <footer>
    <div className="logo-address-nav-help">
      <div className="description">
        <div className="logo-and-name">
          <img src="./images/footer-company-logo.svg" alt="Company Logo" />
          <h4>JobSync</h4>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed delectus, quas, voluptatum magni, voluptas debitis voluptatibus quod expedita recusandae doloribus error eligendi eveniet maxime harum.</p>
        <div className="socials">
          <a href="#"><img src="./images/logo-facebook.svg" alt="Facebook Icon" /></a>
          <a href="#"><img src="./images/logo-twitter.svg" alt="Twitter Icon" /></a>
          <a href="#"><img src="./images/logo-instagram.svg" alt="Instagram Icon" /></a>
          <a href="#"><img src="./images/logo-github.svg" alt="Github Icon" /></a>
        </div>
      </div>
      <div className="contact">
        <h4>Address</h4>
        <p>Lorem ipsum dolor sit amet nam?</p>
        <h4>Contact</h4>
        <p>+234 905 460 4494</p>
        <p>support@jobsync.com</p>
      </div>
      <div className="navigation">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="help">
        <h4>Help</h4>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div>
      <p>&copy; 2024 JobSync. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div>
      <div id="filter"></div>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
