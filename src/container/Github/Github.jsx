import React from 'react'
import { MotionWrap, AppWrap } from '../../wrapper'
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import "./Github.scss";

const showDataFromApril = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 7;

  return contributions.filter(activity => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const Github = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className='head-text'><span>Github</span> Stats</h2>
      <div className='app__github-cards'>
        <div className='flex-item'>
          <img
            id='github-streak-stats'
            style={{ maxWidth: "100%" }}
            src="https://github-readme-streak-stats.herokuapp.com?user=RaviTheja1996&theme=graywhite&border_radius=15&card_width=600"
            alt="GitHub Streak" />
        </div>
        <div className='flex-item'>
          <img
            src="https://github-readme-stats.vercel.app/api?username=RaviTheja1996&show_icons=true&theme=flag-india"
            style={{ maxWidth: "100%" }}
            id='github-stats-card'
            alt="" />
        </div>
        <div className='react-activity-calendar flex-item'>
          {/* <img src="https://ghchart.rshah.org/313bac/ravitheja1996"
            style={{ maxWidth: "100%" }}
            alt="github-activity-calendar" /> */}
          <GitHubCalendar
            username="ravitheja1996"
            blockRadius="7px"
            colorScheme="light"
            transformData={showDataFromApril}
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                'data-tooltip-id': 'react-tooltip',
                'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
              })
            }
          />
          <ReactTooltip id="react-tooltip" />
        </div>
        <div className='flex-item'>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=RaviTheja1996&layout=donut"
            style={{ maxWidth: "100%" }}
            id='github-top-langs'
            alt="" />
        </div>
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Github, 'app__github'),
  'Github',
  "app__primarybg"
);