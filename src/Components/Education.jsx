import React from 'react'
import './Education.css'
import data from '../data.json'

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      
      <div className="timeline-items">

      {data.education.map((item)=>(
        <div className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-date">
              {item.date}
            </div> 
            <div className="timeline-content">
              <h3>{item.course}</h3>
              <p>{item.institute}</p>
              <p>{item.percentage}</p>
            </div>
          
          </div>
      ))}
        </div>
    </section>
  )
}

export default Education