import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, []);


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      }
      else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'><span>Projects</span> section</h2>
      <div className='app__work-filter'>
        {['React JS websites', 'MERN website', 'Bootstrap website', 'Vanilla JS', 'All'].map((item, index) => {
          return <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        })}
      </div >
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => {
          // console.log(typeof (work.tags), work.tags);
          return <div
            className='app__work-item app__flex project-card'
            key={index}
          >
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer' className='project-deployed-link'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    transition={{ duration: 0.3 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer' className='project-github-link'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ opacity: [1, 0.9] }}
                    transition={{ duration: 0.3 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4
                className='bold-text project-title'
                style={{ marginTop: "1rem" }}>
                {work.title}
              </h4>
              <p className='p-text project-description' style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="project-tech-stack app__flex" style={{ marginTop: "1rem", gap: "0.7rem" }}>
                {work.techStack.map((img) => {
                  return <img src={urlFor(img)} alt={work.name} key={work.name} />
                })}
              </div>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>
                  {work.tags[0]}
                </p>
              </div>
            </div>
          </div>
        })}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'projects',
  "app__primarybg"
);