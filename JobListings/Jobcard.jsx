import React from 'react';
import './JobCard.css'; // Import stylesheet

const JobCard = ({ job }) => {
  return (
    <li key={job.id} className="job-card">
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <p className="description">{job.description.substring(0, 100)}...</p>
      <a href={`/jobs/${job.id}`} className="details-link">See details</a>
    </li>
  );
};

export default JobCard;

