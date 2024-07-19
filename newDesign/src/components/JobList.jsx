import React from 'react';
import JobCard from './Jobcard.jsx';
import '../assets/styles/JobList.css';
import useFetch from '../assets/scripts/useRead';

const JobList = () => {
  const { data: jobs, isPending, error } = useFetch('http://localhost:8000/jobs');

  return (
    <div className="job-list">
      {isPending && <p className="loading">Loading jobs...</p>}
      {error && <p className="error">Error: {error}</p>}
      {jobs && jobs.length > 0 ? (
        <ul className="job-card-list">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </ul>
      ) : (
        <p className="no-results">No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;