import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../assets/scripts/useRead";
import JobCard from "./Jobcard";
import '../assets/styles/JobDetail.css'
import { useEffect, useRef } from "react";

const JobDetail = () => {

  const { id } = useParams();
  let jobData = useRef({})
  const { data: jobs, isPending, error } = useFetch('http://localhost:8000/jobs/' + id);

  jobData.current = jobs;

  const {current } = jobData;

  const {jobProviders} = current;
  console.log(jobProviders);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className="job-detail">
      {isPending && <p>Loading</p>}
      {error && <p>Error Loading Job Details</p>}
      <button onClick={handleGoBack}>&#8592; Go Back</button>
      {jobs && <JobCard job={jobs} detail={true} location={'detail'} />}
      <p>Apply Via any of the following job providers:</p>
      {/* <ul className="job-providers">
        {jobs.jobProviders.map((provider) => (
          <li key={provider.jobProvider}>
            <Link to={provider.url}>{provider.name}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default JobDetail;
