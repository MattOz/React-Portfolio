import React from 'react'
import './header.css'
import QuickLinks from './QuickLinks'
import avatar from '../../assets/sampleAvatar.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Matt Osborne</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <QuickLinks/>
        <HeaderSocials/>

        <div className='me'>
          <img src={avatar} alt='me'></img>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header