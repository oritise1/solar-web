import React from 'react'
import './Footer.css'
import NavLogo from '../../images/NavLogo.svg'
import { ReactComponent as Social} from '../../images/Social.svg';
import { ReactComponent as Mail} from '../../images/Mail.svg';
import { ReactComponent as Contact} from '../../images/Contact.svg';

const Footer = () => {
  return (
    <div className='footerWrapper'>
        <p className='footP'>Whether you're looking to switch to solar energy or upgrade your cable services, our sales and 
            marketing company is here to help. Contact us today to start saving on your energy bills and
             enjoy reliable connectivity from the leading solar and cable companies in the DC,
             Maryland, and Virginia area. Snag the best deals with us and embrace a brighter and more connected future.</p>
             <div className='line1'></div>
             <div className='footMid'>
                <div className='footCon'>
                <span className='line2'></span>
                    <img src={ NavLogo } alt='no imag found' />
                    <p className='navP'> LOGO HERE</p>
                    <p >Contact us today to explore our services and take advantage of the great deals available from the leading solar
                         and cable companies in the DC, Maryland, and Virginia area.
                         Let us be your trusted partner in finding the best solutions for your energy and connectivity needs.
                         </p>       
                </div>
                <div>
                <span className='line3'></span>
                <ul className='footList'>
                    <h5>Quick Links </h5>
                    <li> Home </li>
                    <li> About us </li>
                    <li> Solar Initiative </li>
                    <li> Our Services </li>
                    <li> Community </li>
                    <li> Aesthethics </li>
                </ul>
                </div>
                <div>
                <span className='line4'></span>
                <ul className='footList'>
                    <h5>Service </h5>
                    <li> Solar Solution</li>
                    <li>Cable Services </li>
                    <li>Deals and Promotions</li>
                    <li>Consultation and Support  </li>
                </ul>
                </div>
                <div>
                <ul className='footList'>
                    <h5>Contact </h5>
                    <li> <Contact className= 'footerImg' />+2349067813147</li>
                    <li> <Mail className= 'footerImg'/> ikareemabiodun730@gmail.com </li>
                    <li> <Social /> </li>
                </ul>
                </div>
             </div>
             <div className='footLine'>
             </div>
             <p className='foot'> &copy; 2023 Company Name  -  Developed By Roots Digital Marketing</p>
    </div>

  )
}

export default Footer
