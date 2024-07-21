import React, { useEffect } from 'react';

function Dashboard({ title, userData }) {

  useEffect(() => {
    document.title = title;
  }, [title]);

  console.log(userData)

  return (
    <div className="dashboard-content">
      <h1>Hello There</h1>
    </div>
  );
}

export default Dashboard;
