import React from 'react'
import { Link,useParams} from "react-router-dom"
// import Form from './Form'


const JobDetails = ({jobs}) => {
  const{position}=useParams()
  console.log(position)
  const job=jobs.find((job=>job.position===position))

  return (
    <section>
      <div className='container'>
        <div className='details_wrapper'>
          <div className='details_top'>
            <img src={job.logo} alt=""/>
            <div>
              <h1>{job.company}</h1>
            </div>

            <button>
              <Link to={job.companySite}>Company Site</Link>
            </button>

          </div>

          <div className='job_details'>
            <div className='about_job'>
              <div>
                <h6>{job.postedAt} - {job.contract}</h6>
                <h1>{job.position}</h1>
                <span>{job.location}</span>
              </div>

              <button className='btn'>Apply</button>

            </div>
            <p className='job_desc'>{job.desc}</p>

          </div>
        </div>
        <div>
        <Link to="/jobs/add">Add a Job Posting</Link><span className='forward'><i className="ri-share-forward-line"></i></span>
        </div>  
      </div>

      
      
    </section>
  )
}

export default JobDetails