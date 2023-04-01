import React from 'react'
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#resume'>Resume</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://github.com/MattOz"><AiFillGithub/></a>
        <a href="https://github.com/MattOz"><AiFillLinkedin/></a>
      </div>
      
    </footer>
  )
}

export default Footer