import React from 'react'
import Product from '../components/Product'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2021/Jan_default_onsite/XCM_Manual_1302634-gw_desk_tall-control-en-2x_56692bd7-443d-4ff8-a7c2-09ed2ae16e64._CB411473854_.png' width='1500px' alt='home banner' />

        <div className='home__row'>
          <Product id='001' title='Holy Stone HS720E 4K EIS Drone with UHD Camera for Adults, Easy GPS Quadcopter for Beginner with 46mins Flight Time, Brushless Motor, 5GHz FPV Transmission, Auto Return Home, Follow Me & Anti-shake Cam' price={305.99} image='https://m.media-amazon.com/images/I/71-OM1MFdLL._AC_SY400_.jpg' rating={5} />
          <Product id='002' title='Kwikset Halo Touch Traditional Arched Wi-Fi Fingerprint Smart Lock No Hub Required featuring SmartKey Security in Satin Nickel (99590-001)' price={230.95} image='https://images-na.ssl-images-amazon.com/images/I/415XKikqWIL._AC_SX184_.jpg' rating={5} />
        </div>
        <div className='home__row'>
          <Product id='004' title='Bose Home Speaker 500 with Alexa Voice Control Built-in, Black' price={229} image='https://m.media-amazon.com/images/I/81NI0UFz4zL._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
          <Product id='005' title='Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black' price={278} image='https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
          <Product id='003' title='Gas ONE Propane or Butane Stove GS-3400P Dual Fuel Portable Camping and Backpacking Gas Stove Burner with Carrying Case Great for Emergency Preparedness Kit (Gold)' price={29.58} image='https://m.media-amazon.com/images/I/41VXSP1itAL._AC_SY200_.jpg' rating={4} />
        </div>
        <div className='home__row'>
          <Product id='006' title='SAMSUNG QN82Q800T / QN82Q800TAFXZA / QN82Q800TAFXZA 82 inch Class Q800T QLED 8K UHD HDR Smart TV (Renewed)' price={3767.99} image='https://m.media-amazon.com/images/I/6181qexiJ1L._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
        </div>
      </div>
    </div>
  )
}

export default Home
