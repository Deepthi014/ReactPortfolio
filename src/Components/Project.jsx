import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='project' id='project'>
        <div className="project_container">
          <h1 className="sub-title">My Work</h1>
          
          <div className="work-list">
            <div className="work">
              <img src="assets/Project1.png" alt="" />
              <div className="layer">
                <h3>Temple Website</h3>
                <p>Temple Website using HTML, CSS.</p>
                <a href="https://deepthi014.github.io/Temple/" target='_blank'><i class='bx bx-link-external'></i></a>
              </div>
            </div>
            <div className="work">
              <img src="assets/Project3.png" alt="" />
              <div className="layer">
                <h3>Restaurant Website</h3>
                <p>Restaurant Website using HTML CSS and Java Script.</p>
                <a href="https://deepthi014.github.io/RestoProject/" target='_blank'><i class='bx bx-link-external'></i></a>
              </div>
            </div>
            <div className="work">
              <img src="assets/Project2.png" alt="" />
              <div className="layer">
                <h3>Social Website</h3>
                <p>Social Website using React JS</p>
                <a href="https://deepthi014.github.io/Temple/" target='_blank'><i class='bx bx-link-external'></i></a>
              </div>
            </div>
    
          </div>
        
        </div>
    </div>
  )
}

export default Project