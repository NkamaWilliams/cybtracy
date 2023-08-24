'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import LandingImage1 from '../Images/landingImage1.png'
import LandingImage2 from '../Images/landingImage2.png'
import LandingImage3 from '../Images/landingImage3.png'
import './landing.css'
import Transition from '@/app/Transition'

const ImgeComponent = () => {
    const images=[LandingImage1,LandingImage2,LandingImage3]
const [opacity, setOpacity] = useState(1)
    const[image, setimage] = useState(0)
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
    
    console.log(images[0]);
    
  return (
    <div className='image-slider'>
        <Image className='slider-image' style={{opacity:opacity}} src={images[image]} alt='landing'height={550} width={600} />
    </div>
  )
}

export default Transition(ImgeComponent)