import React from 'react';
import '../assets/styles/JobCard.css';
import { Link } from 'react-router-dom';
import FetchHelper from '../assets/scripts/fetchHelper';
const JobCard = ({ job, detail, location, userData }) => {

  const formatDescription = (description) => {
    return description.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  const openInNewWindow = async (event, url) => {
    event.preventDefault()
    await applyJob();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const applyJob = async () => {
    try {
      const response = await FetchHelper.applyJob('http://localhost:9000/users', userData, job.id);
      response && sessionStorage.setItem('userData', response)
    } catch (error) {
      console.log(error);
      throw new Error('Could not apply')
    }

  }

  const showProviders = (providers) => {
    if (!providers || !providers.length) return null

    return (
      <ul className="job-providers">
        <p>Apply via any of the following job providers:</p>
        {providers.map((provider, index) => (
          <li key={index}>
            <button onClick={(e) => openInNewWindow(e, provider.url)}>
              {provider.jobProvider}
            </button>
          </li>
        ))
        }
      </ul >
    )

  }
  return (
    <div className={`job-card-${location}`}>
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
        <p>{detail ? formatDescription(job.description) : job.description.substring(0, 500) + '...'}</p>
      </div>
      {!detail && <Link to={`/jobs/${job.id}`} className="details-link">See details</Link>}
      {job && detail && (
        showProviders(job.jobProviders))}
    </div>
  );
};

export default JobCard;
