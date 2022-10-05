import React from 'react'

const Search = ({filterJobs,searchTerm,setSearchTerm,searchByLocation,setSearchByLocation,locationHandle}) => {
  return (
    <div className='search_panel'>
          <div className='search_panel-01'>
          <span><i className="ri-search-line"></i>
          </span>
            <input type="text" placeholder="search by title or company" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
          </div>

          <div className='search_panel-02'>

          <span><i className="ri-map-pin-line"></i>
          </span>
            <input type="text" placeholder="search by location" value={searchByLocation} onChange={e=>setSearchByLocation(e.target.value)}/>
            <button className='btn' onClick={locationHandle}>Search</button>
          </div>

          <div className='search_panel-03'>
            <select onChange={filterJobs}>
            <option >Filter job by</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="freelance">Freelance</option>
              <option value="contract">Contract</option>
              
            </select>
          </div>
        </div>

  )
}

export default Search