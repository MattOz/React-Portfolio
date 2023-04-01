import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>About</h5>
      <h2>Get To Know Me</h2>

      <div className='container about_container'>
        
      

      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Title 1</h5>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
          </article>
          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Title 2</h5>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
          </article>
          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Title 3</h5>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
          </article>
        </div>
        
 
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor numquam sapiente maiores aliquid voluptates deserunt non accusantium quia optio excepturi! Soluta ullam libero impedit tempore ex suscipit, possimus minus odit?</p>
        <div className='contact_button'>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

      </div>

    </section>
  )
}

export default About