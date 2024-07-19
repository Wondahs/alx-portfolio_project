import React from 'react';
import '../assets/styles/JobCard.css';
import { Link } from 'react-router-dom';
const JobCard = ({ job, detail, location}) => {

  const formatDescription = (description) => {
    return description.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className={"job-card-" + location}>
      <div className="logo-and-name">
        <img src={job.image} alt="Company Logo" />
        <div>
          <p className="company-name">{job.company}</p>
          <p className="job-type">{job.employmentType}</p>
        </div>
      </div>
      <div className="title-and-salary">
        <p className="job-title">{job.title}</p>
        <p className="job-salary">{job.salaryRange !== "" ? job.salaryRange : "Attractive Salary"}</p>
      </div>
      <div className="job-description">
        <p>{detail === true ? formatDescription(job.description) : job.description.substring(0, 500) + '...'}</p>
      </div>
      {!detail && <Link to={`/jobs/${job.id}`} className="details-link">See details</Link>}
    </div>
  );
};

export default JobCard;
