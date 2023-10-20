import React from 'react'
import { MotionWrap, AppWrap } from '../../wrapper'

const Github = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className='head-text' style={{ marginTop: "4rem" }}><span>Github</span> Stats</h2>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", flexDirection: "column", gap: "2rem" }}>
        <a
          href="https://git.io/streak-stats"
          target='_blank'
          rel='noreferrer'
          style={{ margin: "auto" }}
          id='github-streak-stats'>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=RaviTheja1996&theme=graywhite&border_radius=15&card_width=600"
            alt="GitHub Streak" />
        </a>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=RaviTheja1996&layout=pie"
          id='github-top-langs'
          style={{ height: "30rem" }}
          alt=""></img>
        <img src="https://github-readme-stats.vercel.app/api?username=RaviTheja1996&hide=contribs,prs" id='github-stats-card' alt=""></img>
        <div className='react-activity-calendar'>
          <img src="https://ghchart.rshah.org/313bac/ravitheja1996" alt="github-activity-calendar" />
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