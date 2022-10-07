import React,{useState} from 'react'

const AddJobForm = ({jobs,setJobs,url}) => {
  console.log(jobs)
  
  const[addJobForm,setAddJobForm]=useState({
    companySite:"",
    company:"",
    logo:"",
    position:"",
    postedAt:"",
    contract:"",
    location:"",
    desc:""
  });
  const handleChange = (e) => {
    setAddJobForm({
      ...addJobForm,
      [e.target.name]: e.target.value,
    });
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addJobForm),
    })
      .then((respon) => respon.json())
      .then((data) => {
        
        const newData = [...jobs, data];
        console.log(newData)
        setJobs(newData);
      });
    e.target.reset();
  };

  return (
    <div className="form_box">
      <h4>Add new job postings for developers</h4>
      <form onSubmit={handleSubmit}>
         <label for="companysite">CompanySite:</label><br></br>
          <input className="new_job"type="text" placeholder='#' onChange={handleChange} name="companySite"/><br></br>
          <label for="company">Company:</label><br></br>
          <input className="new_job" type="text" placeholder='company name' onChange={handleChange} name="company"/><br></br>
           <label for="company">Logo:</label><br></br>
            <input className="new_job" type="text" placeholder='logo url ' onChange={handleChange} name="logo" /><br></br>
         
            <label for="company">Position:</label><br></br>
            <input className="new_job" type="text" placeholder='position'onChange={handleChange} name="position" /><br></br>
          
            <label for="company">PostedAt:</label><br></br>
            <input className="new_job" type="text" placeholder='day posted'onChange={handleChange} name="postedAt" /><br></br>
         
            <label for="company">Contract:</label><br></br>
            <input className="new_job" type="text" placeholder='contract type'onChange={handleChange} name="contract" /><br></br>
         
            <label for="company">Location:</label><br></br>
            <input className="new_job" type="text" placeholder='location of job'onChange={handleChange} name="location" /><br></br>
          
            <label for="description">Description:</label><br></br>
            <input className="new_job" type="text" placeholder="about job"onChange={handleChange} name="desc" /><br></br>
         
          <button  type = "submit" className='btn'>Submit</button>
      </form>
    </div>       
          
            
          

    

  )
}

export default AddJobForm;