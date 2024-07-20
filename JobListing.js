import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JobListing.css";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10); // Adjust as needed
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "", // Example filter: Full-time, Part-time
    experience: "", // Example filter: Entry-level, Mid-level
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `https://example.com/api/jobs?page=${currentPage}&q=${searchQuery}&location=${filters.location}&type=${filters.type}&experience=${filters.experience}`
        );
        setJobs(response.data.jobs); // Assuming API returns jobs in a 'jobs' field
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [currentPage, searchQuery, filters]);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search functionality for SearchQuery.
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtering logic for module.
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="job-listing-container">
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <div className="filter-options">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          />
          {/* Add more filter options as needed */}
        </div>
      </div>

      {currentJobs.length > 0 && (
        <ul className="job-list">
          {currentJobs.map((job) => (
            <li key={job.id} className="job-item">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              {/* Display additional job details from the API response */}
              <p className="job-type">{job.type}</p>
              <p className="job-experience">{job.experience}</p>
              <p className="job-salary">{job.salary}</p>
              <p className="job-description">{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </li>
          ))}
        </ul>
      )}
      {currentJobs.length === 0 && !isLoading && !error && (
        <div className="no-jobs">No jobs found.</div>
      )}

      <div className="pagination">
        {/* Logic to display pagination buttons (e.g., using a library or custom implementation) */}
        {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map(
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default JobListing;
