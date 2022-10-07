
import './index.css';
import React, { useState,useEffect} from 'react'
import AddJobForm from './components/AddJobForm';
import Header from './components/Header';
import JobLists from './components/JobLists';
import JobDetails from './components/JobDetails';
import {Routes,Route,Navigate,} from "react-router-dom"
function App() {
  const url="https://devops-job-app.herokuapp.com/jobs"
  const[jobs,setJobs]=useState([])
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
    setJobs(data)
    console.log(data)
    })
  },[])
  return (
    <div>
      
    <Header/>
    <Routes>
      <Route path="/" element={<Navigate to="/jobs"/>}/>
      <Route path="/jobs" element={<JobLists jobs={jobs} />}/>
      <Route path="/jobs/:position" element={<JobDetails jobs={jobs}/>}/>
      <Route path="/jobs/add" element={<AddJobForm job={jobs} url={url} setJobs={setJobs} />}/>
    </Routes>
    </div>
  )
    

}

export default App;
