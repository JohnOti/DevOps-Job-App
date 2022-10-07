import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const JobLists = ({jobs,handleSubmit}) => {
  
  const[filteredJobs,setFilteredJobs]=useState([])

  const [searchTerm,setSearchTerm]=useState('')

  const[searchByLocation,setSearchByLocation]=useState()
  
  const locationHandle=()=>{
    const filData=jobs.filter(job=>job.location.toLowerCase().includes(searchByLocation.toLowerCase()));

    setFilteredJobs(filData)
  }

  
  const filterJobs= (e)=>{
    const filterValue=e.target.value;
    if (filterValue==="full-time") {
      const filteredData=jobs.filter((job)=>job.contract==="Full Time");
      setFilteredJobs(filteredData);
      
    }
    else if(filterValue==="part-time"){
      const filteredData=jobs.filter((job)=>job.contract==="Part Time");
      setFilteredJobs(filteredData);
    }
    else if(filterValue==="freelance"){
      const filteredData=jobs.filter((job)=>job.contract==="Freelance");
      setFilteredJobs(filteredData);
    }
    else if(filterValue==="contract"){
      const filteredData=jobs.filter((job)=>job.contract==="Contract");
      setFilteredJobs(filteredData);
    }else{
      setFilteredJobs(jobs)
    }
    
  }
  

  
  
   
  const searchTermValue=searchTerm.toLowerCase()
  const displayedJobs=filteredJobs.length>0?filteredJobs:jobs
  return <section className='job_list'>
    <div className='container'>
      <div className='job_list_wrapper'>
        <Search locationHandle={locationHandle} filterJobs={filterJobs} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchByLocation={searchByLocation} setSearchByLocation={setSearchByLocation}/>
        

      <div className="jobs_wrapper">
        {displayedJobs.filter(job=>{
          if(job.position.toLowerCase().includes(searchTermValue)
          ||job.company.toLowerCase().includes(searchTermValue))
          return job;
          return(searchTerm==='') ;
        }).map((job)=>(
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

