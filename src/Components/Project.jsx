import React from 'react'
import './Project.css'
import data from '../data.json'


const Project = () => {
  return (
    <div className='project' id='project'>
        <div className="project_container">
          <h1 className="sub-title">My Work</h1>
          

          <div className="work-list">

          {data.project.map((item)=>(
      
            <div className="work">
              <img src={item.img} alt="" />
              <div className="layer">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target='_blank'><i class='bx bx-link-external'></i></a>
              </div>
            </div>
            ))} 
          </div>
        
          {/* <a href="#" className='project-btn'>See more</a> */}
        </div>
    </div>
  )
}

export default Project