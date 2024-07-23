import React, { useEffect, useState } from 'react';
import '../assets/styles/Dashboard.css';
import FetchHelper from '../assets/scripts/fetchHelper';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard({ title, userData, setLoggedIn, loggedIn }) {

  let userDataSes = userData || sessionStorage.getItem('userData');
  const [userJobs, setUserJobs] = useState(null);
  const navigate = useNavigate();

  const { name, appliedJobs } = userDataSes;

  useEffect(() => {
    document.title = title;
    FetchHelper.fetchItemsData('http://localhost:8000/jobs', appliedJobs)
      .then(response => {
        setUserJobs(response)
      })
      .catch(error => {
        console.log(error);
      })
  }, [title, appliedJobs]);


  console.log(userDataSes);
  console.log(userJobs);

  const logout = () => {
    sessionStorage.removeItem('userData');
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <div className="dashboard-content">
      {loggedIn ?
        (<>
          <div className='welcome-logout'>
            <h2 className='welcome-back'>Welcome Back, {name.split(' ')[0]}</h2>
            <button onClick={logout}>Logout</button>
          </div>
          <div className='applications'>
            <h3>Your Applications</h3>
            <h4>{appliedJobs.length}</h4>
            <p>Jobs so far.</p>
          </div>
          <div className="recent-applications">
            <h3>Recent Applications</h3>
            {userJobs ? (
              <ul>
                {userJobs.map((job) => (
                  <li key={job.id}>
                    <Link to={`/jobs/${job.id}`}>
                      <p className='title'>{job.title}</p>
                      <p className='company'>{job.company}</p>
                    </Link>
                  </li>
                ))}
              </ul>) : (
              <p>No recent applications found.</p>
            )}
          </div>
          <div className="apply-btn">
            <Link to="/jobs"><button>See Latest Jobs</button></Link>
          </div>
          </>) : (
          <p className='login-signup'>
            <Link to='/login'>Login</Link> or <Link to='/signup'>Sign up</Link> to Continue
          </p>
        )}
    </div>
  );
}

export default Dashboard;
