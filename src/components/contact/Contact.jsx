import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>MattJOzzy@gmail.com</h5>
            <a href='mailto:mattjozzy@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>mattjosborne96</h5>
            <a href='https://www.linkedin.com/in/mattjosborne96/'>Profile</a>
          </article>
          <article className='contact_option'>
            <AiOutlinePhone className='contact_option-icon' />
            <h4>Phone</h4>
            <h5>312-468-4711</h5>
            <a href='https://api.whatsapp.com/send?phone=13124684711'>Call me</a>
          </article>
        </div>

        <form action=''>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact