import React from 'react'

const Form = () => {
  return (
    <div className="form_box">
      <h4>Add new job postings for developers</h4>
      <form action="/my-handling-form-page" method="post">
         <label for="companysite">CompanySite:</label><br></br>
          <input className="new_job"type="text" placeholder='#'/><br></br>
          <label for="company">Company:</label><br></br>
          <input className="new_job" type="text" placeholder='company name'/><br></br>
           <label for="company">Logo:</label><br></br>
            <input className="new_job" type="text" placeholder='logo url'/><br></br>
         
            <label for="company">Position:</label><br></br>
            <input className="new_job" type="text" placeholder='position'/><br></br>
          
            <label for="company">PostedAt:</label><br></br>
            <input className="new_job" type="text" placeholder='day posted'/><br></br>
         
            <label for="company">Contract:</label><br></br>
            <input className="new_job" type="text" placeholder='contract type'/><br></br>
         
            <label for="company">Location:</label><br></br>
            <input className="new_job" type="text" placeholder='location of job'/><br></br>
          
            <label for="description">Description:</label><br></br>
            <textarea className="new_job" type="text" placeholder="about job"/><br></br>
         
          <button type = "submit" className='btn'>Submit</button>
      </form>
    </div>       
          
            
          

    

  )
}

export default Form