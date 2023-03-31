import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    title: 'Project 1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    title: 'Project 2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    title: 'Project 4',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    title: 'Project 5',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    title: 'Project 6',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>

        <article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
          <h3>Project 1</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Link</a>
        </article>

      </div>
    </section>
  )
}

export default Portfolio