'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import LandingImage1 from '../Images/landingImage1.png'
import LandingImage2 from '../Images/landingImage2.png'
import LandingImage3 from '../Images/landingImage3.png'
import './landing.css'
import Transition from '@/app/Transition'
import ground1 from '../images/background1.png'
import ground2 from '../images/background2.png'
import ground3 from '../images/background3.png'
const ImgeComponent = () => {
    const images=[LandingImage1,LandingImage2,LandingImage3]
    const background:any[] = [ground1, ground2, ground3]
const [opacity, setOpacity] = useState(1)
    const[image, setimage] = useState(0)
    const [back, setBackground] = useState(0)

    
    useEffect(() => {
        const interval = setInterval(() => {
       
          setOpacity(() =>0);
          
          setTimeout(() => {
            setimage((prevIndex) => (prevIndex + 1) % images.length);
            setOpacity(()=>1); 
          }, 500); // Wait for 0.5 seconds for the fade-out animation to finish
    
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
    useEffect(() => {
        const interval = setInterval(() => {
       
          setOpacity(() =>0);
          
          setTimeout(() => {
            setBackground((prevIndex) => (prevIndex + 1) % background.length);
            setOpacity(()=>1); 
          }, 500); // Wait for 0.5 seconds for the fade-out animation to finish
    
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);

    
  return (
    <div className='image-slider display'>
        <Image className='slider-image' style={{opacity:opacity}} src={images[image]} alt='landing'height={500} width={550} />
        <Image className='Slider-image slider-background' style={{opacity:opacity}} src={background[image] } alt='landing'height={650} width={650}/>
    </div>
  )
}

export default Transition(ImgeComponent)