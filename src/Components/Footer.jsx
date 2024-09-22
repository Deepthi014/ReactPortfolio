import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
          <li><a href="#home">HOME</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#skill">MY SKILLS</a></li>
          <li><a href="#project">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
      </div>
      <hr />
        <p>Copyright © Deepthi. Made with <i class='bx bxs-heart'></i></p>
    </div>
  )
}

export default Footer