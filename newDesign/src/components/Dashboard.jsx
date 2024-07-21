import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const { create, response } = location.state || {};

  return (
    <div className="dashboard-content">
      <h1>{response.ok ? "Success" : "Try again"}</h1>
    </div>
  );
}

export default Dashboard;
