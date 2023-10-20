import React, { useState, useEffect } from 'react'
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);


  return (
    <>
      <h2 className='head-text'><span>About</span> Me</h2>
      <div className='user-info'>
        <h2 className='head-text' id='user-detail-name'>
          I'm <span>Ravitheja</span> a <span>Full Stack Web Developer</span>
        </h2>
        <h2 className='head-text' style={{ fontSize: "2.5rem" }}>
          I know that <span>Good Development</span> means <span>Good Business</span>
        </h2>
        <p id='user-detail-intro'>
          A dedicated full stack web developer, I bring passion, lifelong learning, and proficiency in the MERN stack to the table. My focus is on crafting robust, functional, and user-centric websites having attention to detail and a problem-solving mindset with hands-on experience on Git for version control. Quality and solution driven, skilled in and having hands-on experience of working with HTML, CSS, JavaScript, React, NodeJS and MongoDB. Highly resilient and focused on learning new techniques to build real world websites while facilitating the growth of self and that of the organization.
        </p>
      </div>
      <div className='app__profiles'>
        {abouts.map((about, index) => {
          return <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        })}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg about section"
);