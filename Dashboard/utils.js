export const getUserData = async () => {
  const response = await fetch('/api/user');
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to fetch user data');
  }
};

export const getJobListings = async () => {
  const response = await fetch('/api/jobs');
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to fetch job listings');
  }
};

export const getJobApplications = async () => {
  const response = await fetch('/api/applications');
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('Failed to fetch job applications');
  }
};

