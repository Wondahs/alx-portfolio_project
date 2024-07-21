import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobSummary from './JobSummary'; // optional component

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedJobs = await getJobListings();
      setJobs(fetchedJobs);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-content">
      <h2>Recent Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {/* Your content for each job here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

