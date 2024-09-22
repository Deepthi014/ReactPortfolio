import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className='services-title'>My Services</h2>
      <div className="services-list">
        <div>
          <i class='bx bx-code-alt'></i>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium impedit beatae exercitationem deleniti error sed mollitia veniam, distinctio vel!</p>
          <a href="#">Learn more</a>
        </div>
        <div>
          <i class='bx bx-crop' ></i>
          <h2>UI/UX Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium impedit beatae exercitationem deleniti error sed mollitia veniam, distinctio vel!</p>
          <a href="#">Learn more</a>
        </div>
        <div>
          <i class='bx bxs-devices' ></i>
          <h2>App Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium impedit beatae exercitationem deleniti error sed mollitia veniam, distinctio vel!</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  )
}

export default Services
