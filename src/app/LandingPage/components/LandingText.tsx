'use client'

import React from 'react';
import './landing.css';
import { Typewriter } from 'react-simple-typewriter';
const LandingText: React.FC = () => {

  return (
    <div className='landing-header_container'>
      <div className="landing-header">
        <h1 className="text-land">
        <Typewriter
            words={['Education', 'Empowerment', 'Sustainability']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1000}
       
          />
        </h1>
        {/* <Cursor /> */}
      </div>
      <h2 className="landing-header-2">Promoting functional literacy through basic digital literacy.</h2>
      <div className=""><button className='landing-page_button'>Partner with us</button></div>
    </div>
  );
}

export default LandingText;
