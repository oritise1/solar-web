import React from 'react'
import './Text.css'

const Text = ( props ) => {
  return (
    <div>
            <h1 style={{color:'red', }} className='h1text'> {props.head} </h1>
            <h3 className='texth3'> {props.text} </h3>
            <p className='texthead' style={{marginLeft:'0'}}> {props.subtext} </p>
    </div>
  )
}

export default Text
