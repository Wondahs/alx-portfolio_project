import React, { useEffect } from 'react';
import FetchHelper from '../assets/scripts/fetchHelper';
import '../assets/styles/Dashboard.css';

function Dashboard({ title, userData }) {

  useEffect(() => {
    document.title = title;
  }, [title]);

  console.log(userData)
  const {id, name, postedJobs, appliedJobs} = userData;

  return (
    <div className="dashboard-content">
      <h1>Hello, {name}</h1>
      <p>Here are your posted jobs</p>
      <ul>
        {postedJobs.map((job, index) => (
          <li key={index}>Id: {job}</li>
        ))}
      </ul>

      <p>Here are your applied jobs</p>
      <ul>
        {appliedJobs.map((job, index) => (
          <li key={index}>Id: {job}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
