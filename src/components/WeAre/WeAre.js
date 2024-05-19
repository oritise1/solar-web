import React from 'react'
import './WeAre.css'
import {ReactComponent as WeAreI} from '../../images/WeAre.svg';

const WeAre = () => {
  return (
    <div className='weWrapper'>
        <h2 className='weH2'> Who We Are </h2>
        <p className='weP'>
            Welcome to our sales and marketing company, where we specialize in helping customers snag great deals from the leading solar and cable companies in the DC,
            Maryland, and Virginia area.We understand that finding the right solar and cable solutions for your needs can be a daunting task,
            which is why we're here to make the process easier and more affordable for you.
        </p>
        <WeAreI className='weImg'/>
        <button className='btn1'> Read More </button>
        <button className='btn2'> Contact us today </button>
    </div>
  )
}

export default WeAre
