import React, { useState, useEffect } from 'react';
import './styles/layout.css';
import './styles/signup.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <h1 id="company-name">Job sync</h1>
      <nav id="nav-bar" style={{ display: isNavOpen ? 'block' : '' }}>
        <ul className="header-nav">
          <li><a href="">Home</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Job List</a></li>
          <li><a href="">Pages</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </nav>
      <a className="get-started" href=""><button id="get-started-cta">Get Started</button></a>
      <img 
        id="nav-button" 
        src="./images/nav-button.svg" 
        alt="Nav Button" 
        className="nav-button"
        onClick={toggleNav}
      />
    </header>
  );
};

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="signup" id="signup">
      <h2>Get Started</h2>
      <p>Enter your details to create an account</p>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>Have an account? <a href="#login">Sign In</a></p>
    </section>
  );
};

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
          {['facebook', 'twitter', 'instagram', 'github'].map(social => (
            <a key={social} href="#"><img src={`./images/logo-${social}.svg`} alt={`${social} Icon`} /></a>
          ))}
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
          {['Home', 'About', 'Jobs', 'Contact'].map(item => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="help">
        <h4>Help</h4>
        <ul>
          {['FAQs', 'Terms & Conditions', 'Privacy Policy'].map(item => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
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
    <>
      <div id="filter"></div>
      <Header />
      <main>
        <SignupForm />
      </main>
      <Footer />
    </>
  );
};

export default App;
