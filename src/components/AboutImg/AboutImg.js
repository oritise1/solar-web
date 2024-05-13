import React from 'react'
import './AboutImg.css'
import { ReactComponent as AboutImage } from '../../images/AboutImage.svg';

const AboutImg = () => {
  return (
    <div>
      <div >
      <AboutImage className='iconwrapper'/>
      </div>
      <div className='aboutP'>
          <p>SOLAR <span style={{color:'red'}}> SOLUTIONS </span> FOR A SUSTAINABLE TOMORROW <span style={{color:'red'}}>.</span> </p>
      </div>
     
    </div>

  )
}

export default AboutImg
