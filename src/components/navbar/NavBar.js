import React from 'react'
import './NavBar.css'
import NavLogo from '../../images/NavLogo.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={ NavLogo } alt='no imag found' className='imgNav' />
            <p className='navP'> LOGO HERE</p>
            <ul className='navlist'>
            <li> HOME</li>
            <li> ABOUT US</li>
            <li> SOLAR INITIATIVE</li>
            <li> OUR SERVICES</li>
            <li> COMMUNITY</li>
            <li> AESTHETICS</li>
        </ul>
        </div>
        
    </div>
  )
}

export default NavBar
