import React, { useState } from 'react'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'><span>Contact</span> Details</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.linkedIn} alt="linkedIn" />
          <a href="https://www.linkedin.com/in/ravitheja1996/" id='contact-linkedin' className='p-text' target='_blank' rel="noreferrer">LinkedIn</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.Github} alt="Github" />
          <a href="https://github.com/RaviTheja1996" className='p-text' id="contact-github" target='_blank' rel="noreferrer">Github</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.gmail} alt="email" />
          <a href="mailto:kopparapuraviteja@gmail.com" className='p-text' id='contact-email' target='_blank' rel="noreferrer">kopparapuraviteja@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 9502225286" className='p-text' id='contact-phone' target='_blank' rel="noreferrer">+91 9502225286</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.location} alt="location" />
          <a href="https://rb.gy/4wmcm" className='p-text' target='_blank' rel="noreferrer">Hyderabad, Telangana</a>
        </div>
        <div
          className='app__footer-card'
          onClick={() => { window.open(`${images.resumePdf}`, "_blank"); }}
        >
          <img src={images.PDF} alt="Resume" />
          <a
            href="https://rebrand.ly/ravitheja-pdf-d1c49f"
            className='p-text'
            target='_blank'
            rel="noreferrer"
            style={{ color: "white" }}
          >
            Resume
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input type="text" className='p-text' name='name' placeholder='Your Name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input type="email" className='p-text' name='email' placeholder='Your Email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput}></textarea>
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending..." : "Send Message"}</button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);