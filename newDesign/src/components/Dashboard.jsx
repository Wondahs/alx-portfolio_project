import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
	const navigate = useNavigate();
  // const { create, response } = location.state || {};

  return (
    <div className="dashboard-content">
      <h1>{"Success"}</h1>
      <button onClick={() => navigate('/about')}>Navigate</button>
    </div>
  );
}

export default Dashboard;
