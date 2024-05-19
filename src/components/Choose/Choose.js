import React from 'react'
import './Choose.css'
import Text from '../Text/Text'

const Choose = () => {
  return (
    <div className='pagewrapper'>
        <span className='together'>
            <h1 className='texth1'> Why Choose Us? </h1>
            <p className='texthead' style={{color:'#3e3e3e'}}>Whether you're looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help.</p>
        </span>
        <div className='together1'>
          <Text 
            head='01'
            text='Expertise and Experience'
            subtext='With years of experience in the sales and marketing industry, our team has a deep'
          />
          </div>
          <div className='together1'>
          <Text 
            head='02'
            text='Extensive Network'
            subtext='We have established strong relationships with the leading solar and cable companies in the region'
          />
          </div>
          <div className='together1'>
          <Text 
            head='03'
            text='Personalized Approach'
            subtext='We believe that every customer is unique, and their needs should be addressed accordingly'
          />
          </div>
          <div className='together1'>
          <Text 
            head='04'
            text='Cost Savings'
            subtext='By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases'
          />
          </div>
          <div className='together1'>
          <Text 
            head='05'
            text=' Hassle-Free Process'
            subtext='We handle all the research, negotiations, and paperwork for you, making the process of finding'
          />
          </div>
    </div>
  )
}

export default Choose
