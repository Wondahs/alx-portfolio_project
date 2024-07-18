import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import './JobList.css'; // Import stylesheet

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('your-api-endpoint');
        if (!response.ok) {
          throw new Error(`Error fetching jobs: ${response.statusText}`);
        }
        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    // Implement search logic to filter jobs based on searchTerm
  };

  const handleFilter = (filters) => {
    // Implement filter logic to filter jobs based on selected filters
  };

  return (
    <div className="job-list">
      {isLoading && <p className="loading">Loading jobs...</p>}
      {error && <p className="error">Error: {error.message}</p>}
      {jobs.length > 0 ? (
        <>
          <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
          <ul className="job-card-list">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </ul>
        </>
      ) : (
        <p className="no-results">No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;

