import React from 'react'
import './Expert.css'
import  ExpertImg1 from '../../images/ExpertImg1.svg'
import  ExpertImg2 from '../../images/ExpertImg2.svg'
import  ExpertImg3 from '../../images/ExpertImg3.svg'
import  ExpertImg4 from '../../images/ExpertImg4.svg'

const Expert = () => {
  return (
    <div>
      <div className='headE'>
        <h3> Our Expertise and Experience </h3>
      </div>
      <div className='wrapper'>
            <div className='textimg'>
                <img src={ExpertImg1} alt='no img' />
                <span className='textspan2'>
                     <h4 className='textspan'> Solar Solutions </h4> 
                        <span className='textspan1'> 
                        Harness the power of the sun and embrace clean, renewable energy with our solar solutions. 
                        </span> 
                </span>
            </div>
            <div className='textimg'>
                <img src={ExpertImg2} alt='no img' />
                <span className='textspan2'>
                     <h4 className='textspan'> Cable Services </h4> 
                        <span className='textspan1'> 
                        Stay connected with high-quality cable services that deliver reliable and fast internet, television
                        </span> 
                </span>
            </div>
            <div className='textimg'>
                <img src={ExpertImg3} alt='no img' />
                <span className='textspan2'>
                     <h4 className='textspan'> Internet Solutions </h4> 
                        <span className='textspan1'> 
                        From fast broadband to fiber-optic connections, we'll help you find the internet service provider 
                        </span> 
                </span>
            </div>
            <div className='textimg'>
                <img src={ExpertImg4} alt='no img' />
                <span className='textspan2'>
                     <h4 className='textspan'> Phone Services </h4> 
                        <span className='textspan1'> 
                        Discover cost-effective and feature-rich phone services that keep you connected to your loved ones
                        </span> 
                </span>
            </div>
      </div>
    </div>
  )
}

export default Expert
