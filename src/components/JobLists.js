import React from 'react'

const JobLists = () => {
  return <section className='job_list'>
    <div className='container'>
      <div className='job_list_wrapper'>
        <div className='search_panel'>
          <div className='search_panel-01'>
          <span><i class="ri-search-line"></i>
          </span>
            <input type="text" placeholder="search by title,companies"/>
          </div>

          <div className='search_panel-02'>

          <span><i class="ri-map-pin-line"></i>
          </span>
            <input type="text" placeholder="search by location"/>
            <button>Search</button>
          </div>

          <div className='search_panel-03'>
            <select>
            <option >Filter job by</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="freelance">Freelance</option>
              <option value="contract">Contract</option>
              
            </select>
          </div>
        </div>
      </div>

    </div>
  </section>
    
  
}

export default JobLists

