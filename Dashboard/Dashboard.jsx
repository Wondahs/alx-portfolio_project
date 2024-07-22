import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobSummary from './JobSummary';  // optional component

function Dashboard() {
  const location = 
  const {response} = location.state

  return (
    <div className="dashboard-content">
      <h2>Recent Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>

