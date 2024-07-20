// Import the stylesheet for the app
import './App.css';

// Import the Header component from the components directory
import Header from './components/Header';

// Import necessary components from React Router DOM for routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components for different pages
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';

// Define the main App component
function App() {
  // Return the JSX structure of the application
  return (
    // Wrap the entire app with the Router component for routing
    <Router>
      <div className="App">  {/* Main container for the app */}
        {/* Potential placeholder for a filter functionality (unused currently) */}
        <div id="filter"></div>
        {/* Render the Header component at the top */}
        <Header />

        {/* Define routes for different parts of the application */}
        <Routes>
          {/* Route for the homepage with path '/' and Home component */}
          <Route path="/" element={<Home title="JobSync" />} />
          {/* Route for the login page with path '/login' and Login component */}
          <Route path="/login" element={<Login title="JobSync - Login" />} />
          {/* Route for the signup page (using the same Login component for now) */}
          <Route path="/signup" element={<Login title="JobSync - Signup" />} />
          {/* Route for the about us page with path '/about' and AboutUs component */}
          <Route path="/about" element={<AboutUs title="JobSync - About Us" />} />
          {/* Route for the jobs listing page with path '/jobs' and JobList component */}
          <Route path="/jobs" element={<JobList title="JobSync - Featured Jobs" />} />
          {/* 
              Route for individual job details with path '/jobs/:id'
              - ':id' is a dynamic parameter that captures the job ID from the URL
              - The JobDetail component is rendered with the title "JobSync - Job Detail"
          */}
          <Route path="/jobs/:id" element={<JobDetail title="JobSync - Job Detail" />} />
        </Routes>

        {/* Render the Footer component at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

// Export the App component as the default export
export default App;

