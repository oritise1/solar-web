import React from 'react'
import './Service.css'
import Text from '../Text/Text'
import { ReactComponent as SolarImg } from '../../images/SolarImg.svg';
import { ReactComponent as CableImg } from '../../images/CableImg.svg';
import { ReactComponent as DealImg } from '../../images/DealImg.svg';
import { ReactComponent as SupportImg } from '../../images/SupportImg.svg';
import { ReactComponent as ServiceImg } from '../../images/ServiceImg.svg';

const Service = () => {
  return (
    <div className='serVice'>
        <div className='serHead'>
            <h4 className='serH4'> Our Services </h4>
            <h1 className='serH1'>What We Do</h1>
        </div>
        <div className='serSide'>
            <span className='diff'>
                <Text 
                    head = {<SolarImg />}
                    text = 'Solar Solutions'
                    subtext = 'Harness the power of the sun and embrace clean, renewable energy with our solar solutions.'
                />
            </span>
            <span className='diff'>
                <Text 
                    head = {<CableImg />}
                    text = 'Cable Services'
                    subtext = 'Stay connected with high-quality cable services that deliver reliable and fast internet, television'
                />
            </span>
        </div>
        <div className='serSide1'>
            <span className='diff'>
                <Text 
                    head = {<DealImg />}
                    text = 'Deals and Promotions'
                    subtext = 'We pride ourselves on securing great deals and promotions for our customers.'
                />
            </span >
            <span className='diff'>
                <Text 
                    head = {<SupportImg />}
                    text = 'Consultation and Support'
                    subtext = 'We understand that navigating the solar and cable landscape can be overwhelming.'
                />
            </span>
        </div>
        <div className='serImg'>
            <ServiceImg />
        </div>
    </div>
  )
}

export default Service
