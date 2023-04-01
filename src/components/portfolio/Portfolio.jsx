import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    title: 'Chicago Attractions',
    github: 'https://github.com/MattOz/Chicago-Attractions',
    demo: 'https://ancient-wildwood-93900.herokuapp.com/login',
  },
  {
    id: 2,
    title: 'Pupify',
    github: 'https://github.com/MattOz/Pupify',
    demo: 'https://mattoz.github.io/Pupify/',
  },
  {
    id: 3,
    title: 'E-Commerce Backend',
    github: 'https://github.com/MattOz/E-Commerce-Back-End',
    demo: 'https://drive.google.com/file/d/1896bWtghjvF4a3UbCLOKKME9b8Dlu-Xt/view',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    github: 'https://github.com/MattOz/Weather-Dashboard',
    demo: 'https://mattoz.github.io/Weather-Dashboard/',
  },
  {
    id: 5,
    title: 'Social Network API',
    github: 'https://github.com/MattOz/Social-Network-API',
    demo: 'https://github.com',
  },
  {
    id: 6,
    title: 'Tech Blog',
    github: 'https://github.com/MattOz/Tech-Blog',
    demo: 'https://desolate-brushlands-39848.herokuapp.com/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>

        {
          data.map(({id, title, github, demo, image}) => {
            return(
              <article className='portfolio_item'>
              <h3>{title}</h3>
              <a href={github} className='btn' id='portfolio_btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' id='portfolio_btn' target='_blank'>Live Demo</a>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio