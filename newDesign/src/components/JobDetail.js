import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../assets/scripts/useRead";
import JobCard from "./Jobcard";
import '../assets/styles/JobDetail.css'
import { useEffect } from "react";
import Loader from "./Loader";

const REACT_APP_JOBS_API = process.env.REACT_APP_JOBS_API;

const JobDetail = ({ title, userData }) => {

  useEffect(() => {
    document.title = title;
  }, [title]);

  const { id } = useParams();
  const { data: jobs, isPending, error } = useFetch(REACT_APP_JOBS_API + id);


  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className="job-detail">
      <button onClick={handleGoBack}>&#8592; Go Back</button>
      {isPending && <Loader className="loading-div"></Loader>}
      {error && <p>Error Loading Job Details</p>}
      {jobs && <JobCard userData={userData} job={jobs} detail={true} location={'detail'} />}
    </div>
  );
}

export default JobDetail;
