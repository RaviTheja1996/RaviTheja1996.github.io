import React, { useState, useEffect, useRef } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import Typed from "typed.js";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const [cursorVisibility, setCursorVisibility] = useState(true);

  const el = useRef(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setCursorVisibility(window.innerWidth < 1130 ? false : true);
    };

    const typed = new Typed(el.current, {
      strings: [
        " Full ^100 Stack ^100 Web ^100 Developer.",
        " Aspiring ^100 Designer.",
        " Lifelong ^100 learner.",
      ],
      typingSpeed: 9900,
      backSpeed: 70,
      startDelay: 700,
      loop: true,
      loopCount: Infinity,
      showCursor: cursorVisibility,
      cursorChar: "_",
    });

    window.addEventListener('resize', handleWindowResize);

    return () => {
      typed.destroy();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [cursorVisibility]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>About</span> Me
      </h2>
      <div className="user-info">
        <div className="head-text text-wrapper" id="user-detail-name">
          <div style={{ color: "black", marginRight: "1rem" }} className="static-text">
            I'm Ravitheja
          </div>
          <span style={{ color: "rgb(255, 86, 56)" }} ref={el}></span>
          {/* <ul className='dynamic-texts'>
            <li><span>Full Stack Web Developer.</span></li>
            <li><span>Aspiring Designer.</span></li>
            <li><span>Lifelong learner.</span></li>
          </ul> */}
        </div>
        <h2 className="head-text" style={{ fontSize: "2.5rem" }}>
          I know that <span>Good Development</span> means{" "}
          <span>Good Business</span>
        </h2>
        <p id="user-detail-intro">
          A dedicated fullstack web developer, I bring passion, lifelong
          learning, and proficiency in the MERN stack to the table. My focus is
          on crafting robust, functional, and user-centric websites having
          attention to detail and a problem-solving mindset with hands-on
          experience on Git for version control. Quality and solution driven,
          skilled in and having hands-on experience of working with HTML, CSS,
          JavaScript, React, NodeJS and MongoDB. Highly resilient and focused on
          learning new techniques to build real world websites while
          facilitating the growth of self and that of the organization.
        </p>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg about section"
);
