import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { Tooltip as ReactToolTip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      // console.log(data);
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

  }, []);

  return (
    <>
      <h2 className='head-text'>
        <span>Skills</span> & <span>Experience</span>
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) => {
            return <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex skills-card'
              key={skill.name}
            >
              <div className='app__flex skills-card-img' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text skills-card-name'>
                {skill.name}
              </p>
            </motion.div>
          })}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {/* {console.log("here ", experience.works)} */}
          {experience?.map((experience) => {
            return <motion.div className='app__skills-exp-item'
              key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>
                  {experience.year}
                </p>
              </div>
              <motion.div
                className='app__skills-exp-works'
              >
                {experience.works.map((work) => {
                  return <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      id={work.name}
                    >
                      <h4 className='bold-text'>
                        {work.name}
                      </h4>
                      <p className='p-text'>
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactToolTip
                      anchorId={work.name}
                      place='bottom'
                      content={work.desc}
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactToolTip>

                  </div>
                })}
              </motion.div>
            </motion.div>
          })}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
);