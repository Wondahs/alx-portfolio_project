import React from 'react';
import JobCard from './Jobcard.jsx';
import '../assets/styles/JobList.css';
import useFetch from '../assets/scripts/useRead';

const JobList = () => {
  const { data: jobs, isPending, error } = useFetch('http://localhost:8000/jobs');

  return (
    <div className="job-list">
      <h2>Latest Featured Jobs</h2>
      {isPending && <p className="loading">Loading jobs...</p>}
      {error && <p className="error">Error: {error}</p>}
      {jobs && jobs.length > 0 ? (
        <div className="featured-jobs">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} detail={false} location={'list'} />
          ))}
        </div>
      ) : (
        <p className="no-results">No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
