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

                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/python.png" alt="PYTHON" />
                    </div>
                    <p>PYTHON</p>
                  </div>
                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/java.png" alt="PYTHON" />
                    </div>
                    <p>JAVA</p>
                  </div>
                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/html.png" alt="PYTHON" />
                    </div>
                    <p>HTML</p>
                  </div>
                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/css.png" alt="PYTHON" />
                    </div>
                    <p>CSS</p>
                  </div>
                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/javascript.png" alt="PYTHON" />
                    </div>
                    <p>JAVA SCRIPT</p>
                  </div>
                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/react.png" alt="PYTHON" />
                    </div>
                    <p>REACT</p>
                  </div>
                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/figma.png" alt="PYTHON" />
                    </div>
                    <p>FIGMA</p>
                  </div>
                  <div className='skill'>
                    <div className='skill-img'>
                      <img src="assets/mongoDb.png" alt="PYTHON" />
                    </div>
                    <p>MONGODB</p>
                  </div>
                                   
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