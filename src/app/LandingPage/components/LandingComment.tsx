
import './landing.css'
import '../../Styles/font.css'
import {  Dangrek } from 'next/font/google'
import Image from 'next/image'
import landingImage1 from '../Images/landingImage1.png'


const LandingComment = () => {
  return (
   <div className="landing-comment_main-container">
     <div className='landing-text_container'>
        <div className="tex">
            <div className={`text`}>06 </div>
            <div className="comment">Basic
</div>
            <div className="comment">
Courses</div>
        </div>
        <div className="line"></div>
        <div className="tex">
            <div className={`text`}>60+</div>
            <div className="comment">Trained
</div>
            <div className="comment">
kids</div>
        </div>
        <div className="line-2"></div>

        <div className="tex">
            <div className={`text`}>30+</div>
            <div className="comment">Active
</div>
            <div className="comment">
volunteers</div>
        </div>
        {/* <Image height={'30rem'} width={'30rem'} src={landingImage1}/> */}
    </div>
    
   </div>
  )
}

export default LandingComment