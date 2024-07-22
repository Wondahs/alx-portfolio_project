import React, { useEffect } from 'react';
import JobCard from './Jobcard.jsx';
import '../assets/styles/JobList.css';
import useFetch from '../assets/scripts/useRead';
import { Link } from 'react-router-dom';
import Loader from './Loader.js';

const JobList = ({ title, loggedIn }) => {

  const { data: jobs, isPending, error } = useFetch('http://localhost:8000/jobs');

  useEffect(() => {
    document.title = title;
  }, [title, loggedIn]);


  return (
    <div className="job-list">
      {loggedIn ? (
        <>
          <h2>Latest Featured Jobs</h2>
          {isPending && <Loader className="loading-div"></Loader>}
          {error && <p className="error">Error Fetching Data: {error}</p>}
          {jobs && jobs.length > 0 ? (
            <div className="featured-jobs">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} detail={false} location={'list'} />
              ))}
            </div>
          ) : (
            <p className="no-results">No jobs found.</p>
          )}
        </>) :
        <p className='login-signup'>
          <Link to='/login'>Login</Link> or <Link to='/signup'>Sign up</Link> to Continue
        </p>}
    </div>
  );
};

export default JobList;
