import React from 'react'
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from '../../constants';

import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <>
      <div className='app__header app__flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className="badge-cmp app__flex">
              <span className='wave'>👋</span>
              <div style={{ marginLeft: 20 }} className='user-detail-name'>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text-name'>Ravitheja</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className='p-text'>Web developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
          className='app__header-img'
        >
          <img src={images.raviProfilePic} alt="profile.bg" className='profilePic home-img' />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='overlay_circle'
            src={images.circle}
            alt="profile_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.redux, images.react, images.node, images.javascript, images.css].map((circle, index) => {
            return <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          })}
        </motion.div>
      </div>
      <div className='user-info'>
        <button
          id='resume-button-2'
          className='app__header-button'
          onClick={() => { window.open(`${images.resumePdf}`, "_blank"); }}
        >
          <span></span>
          <img src={images.PDF} alt="Resume" />
          <a
            id='resume-link-2'
            href="https://rebrand.ly/ravitheja-pdf-d1c49f"
            download="Ravitheja-Resume.pdf"
            className='p-text resume-button-2 resume-link-2'
            target='_blank'
            rel="noreferrer"
          >
            Resume
          </a>
          <span></span>
        </button>
      </div>
    </>
  )
}

export default AppWrap(Header, 'home');