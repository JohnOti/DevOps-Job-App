import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const JobLists = () => {
  const[jobs,setJobs]=useState([])
  


  
  const filterJobs= (e)=>{
    const filterValue=e.target.value;
    if (filterValue==="full-time") {
      const filteredData=jobs.filter((job)=>job.contract==="Full Time");
      setJobs(filteredData);
      
    }
    else if(filterValue==="part-time"){
      const filteredData=jobs.filter((job)=>job.contract==="Part Time");
      setJobs(filteredData);
    }
    else if(filterValue==="freelance"){
      const filteredData=jobs.filter((job)=>job.contract==="Freelance");
      setJobs(filteredData);
    }
    else if(filterValue==="contract"){
      const filteredData=jobs.filter((job)=>job.contract==="Contract");
      setJobs(filteredData);
    }else{
      setJobs(jobs)
    }
    
  }
  

  
  useEffect(()=>{
    fetch("https://devops-job-app.herokuapp.com/jobs")
    .then(res=>res.json())
    .then(data=>{
    setJobs(data)
    console.log(data)
    })
  },[])
   
  return <section className='job_list'>
    <div className='container'>
      <div className='job_list_wrapper'>
        <Search filterJobs={filterJobs}/>
        

      <div className="jobs_wrapper">
        {jobs?.map((job)=>(
        <div className="job_item" key={job.id}>
          <img src={job.logo} alt= ""/>
          <div>
            <h6>{job.postedAt} - {job.contract} </h6>
            <h1><Link to={`/jobs/${job.position}`}>{job.position}</Link></h1>
            <p>{job.company}</p>

            <div className='location'>
              <p>Location: <span>{job.location}</span></p>
            </div>
          </div>
        </div>

        ))}
        

      </div>
      </div>

    </div>
  </section>
    
  
}

export default JobLists

