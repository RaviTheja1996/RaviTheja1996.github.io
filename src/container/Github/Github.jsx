import React from 'react'
import { MotionWrap, AppWrap } from '../../wrapper'
import "./Github.scss";

const Github = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className='head-text' style={{ marginTop: "2rem" }}><span>Github</span> Stats</h2>
      <div className='app__github-cards'>
        {/* <a
          href="https://git.io/streak-stats"
          target='_blank'
          rel='noreferrer'
          style={{ margin: "auto" }}
          id='github-streak-stats'>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=RaviTheja1996&theme=graywhite&border_radius=15&card_width=600"
            alt="GitHub Streak" />
        </a> */}
        <div className='flex-item'>
          <img
            id='github-streak-stats'
            src="https://github-readme-streak-stats.herokuapp.com?user=RaviTheja1996&theme=graywhite&border_radius=15&card_width=600"
            alt="GitHub Streak" />
        </div>
        <div className='flex-item'>
          <img
            src="https://github-readme-stats.vercel.app/api?username=RaviTheja1996&hide=contribs,prs" id='github-stats-card'
            alt="" />
        </div>
        <div className='react-activity-calendar flex-item'>
          <img src="https://ghchart.rshah.org/313bac/ravitheja1996" alt="github-activity-calendar" />
        </div>
        <div className='flex-item'>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=RaviTheja1996&layout=donut"
            id='github-top-langs'
            alt="" />
        </div>
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Github, 'app__github'),
  'github',
  "app__primarybg"
);