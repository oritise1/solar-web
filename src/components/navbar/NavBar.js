import React from 'react'
import './NavBar.css'
import NavLogo from '../../images/NavLogo.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={ NavLogo } alt='no imag found' className='imgNav' />
    </div>
  )
}

export default NavBar
