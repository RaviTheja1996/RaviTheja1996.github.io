import React, { useState } from 'react'
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div id="nav-menu">
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.raviLogo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`} className={`nav-link ${item}`}>{item}</a>
            </li>
          ))}
          {/* <li className='app__flex p-text'> */}
          <div />
          <button id='resume-button-1'
            className='nav-link resume app__flex'
            onClick={() => { window.open(`${images.resumePdf}`, "_blank"); }}
          >
            <img src={images.downloadIcon} alt="downloadIcon" />
            <a id="resume-link-1" href={`#contact`}>{"Resume"}</a>
          </button>
          {/* </li> */}
        </ul>
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} className={`nav-link ${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                  {/* <li className='app__flex p-text'> */}
                  <button id='resume-button-1'
                    className='nav-link resume app__flex'
                    onClick={() => { window.open(`${images.resumePdf}`, "_blank"); }}
                  >
                    <img src={images.downloadIcon} alt="downloadIcon" />
                    <a id="resume-link-1" href={`#contact`}>{"Resume"}</a>
                  </button>
                  {/* </li> */}
                </ul>
              </motion.div>
            )
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar;