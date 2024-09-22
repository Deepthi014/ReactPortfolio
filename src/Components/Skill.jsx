import React from 'react'
import './Skill.css'
import data from '../data.json'

const Skill = () => {
  return (
    <section id='skill'>
            
            <div className='main-container'>
                <div className='skill-content'>
                 <h2 className='skill-title'>Technical Skills</h2>
                  <div className='skills'>
                    {
                      data.tech_skills.map((item, id)=>{
                        return(
                            <div key={id} className='skill'>
                                <div className='skill-img'>
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <p>{item.title}</p>
                            </div>
                        );  
                      })  
                    }
                  </div>
                </div>

                <div className='personal-container'>
                 <h2 className='skill-title'>Personal Skills</h2>
                  <ul className='skill-perso'>
                    {data.perso_skills.map((item, id)=>{
                        return( 
                        <li key={id} className='skill-perso-item'>
                            <span>&#9745;</span>
                            {item.title}                             
                        </li>
                        )
                    })
                    }
                  </ul>
                </div>
            </div>
    </section>
  )
}

export default Skill