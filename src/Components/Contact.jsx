import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import "./Contact.css"
// import fileToDownload from '../public/assets/css.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7e70e5t', 'template_20lcc1b', form.current, 'dE3aSUAldxzcMyGOD')
      .then((result) => {
          console.log('Success:',result.text);
          alert('Message Sent Successfully!');
      }, (error) => {
          console.error('Error:', error.text);
          alert('An error occurred, please try again later.');
      });

    e.target.reset(); 
   };

    return (
    <>
    <div id="contact">
        <div className="contact-container">
            <div className="row">
                <div className="contact-left">
                    <h1 className='contact-title'>Contact Me</h1>
                    <p><i class='bx bx-send' ></i>deepthishettigar14@gmail.com</p>
                    <p><i class='bx bx-phone-call' ></i>9482537825</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/deepthi-shettigar-25826b274/"><i class='bx bxl-linkedin' ></i></a>
                        <a href="https://x.com/Deepthi738393"><i class='bx bxl-twitter'></i></a>
                        <a href="#"><i class='bx bxl-github'></i></a>
                    </div>
                    <a href="/assets/css.png" download target="_blank"  className='btn c_btn btn2'>Download CV</a>
                </div>
                <div className="contact-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Name" pattern='[A-Za-z\s]+' required />
                        <input type="email" name="email" placeholder='Your Email' required/>
                        <textarea name="message" rows="4" placeholder='Your Message...'></textarea>
                        <button type='submit' className='btn c_btn btn2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>        
    </div>
    </>
  )
}

export default Contact