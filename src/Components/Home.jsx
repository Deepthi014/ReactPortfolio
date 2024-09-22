import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import data from '../data.json'

const Home = () => {
  return (
    <div className="home" id="home">
        {data.home.map((item,index)=>(
        <React.Fragment key={index}>
            <div className="home_content">
                <h1>Hi, It's <span>Deepthi</span></h1>
                <h3 className="text_animation" >I'am a 
                    <span>
                        <Typewriter
                            options={{
                            strings: ['Frontend Developer','Backend Developer','Full Stack Developer','UI/UX Designer'],
                            autoStart: true,
                            loop: true,
                        }}/>
                    </span>
                </h3>
                <p>{item.introduction}</p>
                <div className="link_buttons">
                    <div className="social_icons">
                        <a href="https://www.linkedin.com/in/deepthi-shettigar-25826b274/"><i class='bx bxl-linkedin'></i></a>
                        <a href="#" ><i class='bx bxl-github' ></i></a>
                    </div>
                    <div className="btn_group">
                        <a href="#contact" className="btn"><i class='bx bx-phone'></i>Contact</a>
                    </div>
                </div>
            </div>

            <div className="home_img">
                <img src={item.img} alt="Profile_img" />
            </div>
        </React.Fragment>
        ))}
    </div>
  )
}

export default Home