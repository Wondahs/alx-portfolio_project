import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../assets/scripts/useRead";
import JobCard from "./Jobcard";
import '../assets/styles/JobDetail.css'
import { useEffect } from "react";

const JobDetail = ({title}) => {

  useEffect(() => {
    document.title = title;
  }, [title]);

  const { id } = useParams();
  const { data: jobs, isPending, error } = useFetch('http://localhost:8000/jobs/' + id);


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
    </div>
  );
}

export default JobDetail;
