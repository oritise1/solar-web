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
            <li className='lis'> HOME</li>
            <li className='lis'> ABOUT US</li>
            <li className='lis'> SOLAR INITIATIVE</li>
            <li className='lis'> OUR SERVICES</li>
            <li className='lis'> COMMUNITY</li>
            <li className='lis'> AESTHETICS</li>
        </ul>
        </div>
        
    </div>
  )
}

export default NavBar
