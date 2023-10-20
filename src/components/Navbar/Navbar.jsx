import React, { useState } from 'react'
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar nav-menu'>
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
        <li className='app__flex p-text'>
          <div />
          <a href={`#contact`} className='nav-link resume'>{"resume"}</a>
        </li>
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
                <li className='app__flex p-text nav-link resume'>
                  <a href={`#contact`}>{"resume"}</a>
                </li>
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;