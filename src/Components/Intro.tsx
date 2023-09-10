'use client'

import React from 'react';
import '@/Styles/home.css';
import '@/Styles/styles.css';
import { Typewriter, Cursor } from 'react-simple-typewriter';

export default function Intro(){
  return (
    <div className='landing-header_container'>
      <div className="landing-header">
        <h1 className="text-land">
        <Typewriter
            words={['Education', 'Empowerment', 'Sustainability']}
            loop={true}
            cursor = {false}
            cursorStyle={<span>|</span>}
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1200}
          />
        </h1>
        <div className="" style={{fontSize:'6rem', marginLeft:'-1.2rem'}}> <Cursor/></div>
      </div>
      <h2 className="landing-header-2">Promoting functional literacy through basic digital literacy.</h2>
      <div>
        <button className='primary-btn'>Partner with us</button>
      </div>
    </div>
  );
}
