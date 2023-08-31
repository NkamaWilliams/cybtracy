
import Image from 'next/image'
import '../Styles/About.css'
import Link from 'next/link'

import Picture from '../../../../public/images/png/About1.png'
import Picture1 from '../../../../public/images/png/About2.png'
import Picture2 from '../../../../public/images/png/About3.png'
 
const About = () => {
  return (
    <div className='about-2'> 
        <div className="about-container">
          <section className="first-section">
            <div className="about-main-container">
                <div className="about-text-container">
                    <div className="about-header">
                        <h1>About us</h1>
                        <p className="about-header-text">We are young individuals who are enthusiastic about promoting functional literacy by bridging the gap between underserved students, and their access to digital literacy in Nigeria.

                       </p>
                        <p className="about-header-text">Cybtracy was founded in 2020 after our founders volunteered for the World Literacy Foundation and saw the need for digital literacy in their community. They ran a four-weeks digital training class in an underserved school, and they saw that there was a big void that needed to be filled as the majority of the students had zero to little idea on how to do basic things with a digital computer.</p>
                    </div>
                </div>
                <div className="about-text-container">
                    <div className="about-header">
                        <h1>Our mission</h1>
                        <p className="about-header-text">Our mission is to promote functional literacy through basic digital literacy in underserved schools and communities in Nigeria. We seek to impact students with forward-thinking digital skills to a point where they can come up with solutions to problems on their own, and communicate it digitally.</p>
                    </div>
                </div>
                <div className="about-button">
                <button  >
                   meet the Team
                </button>
            </div>
           </div> 
           <div className="about-us-image_container">
            <div className="pic-1 pi">
            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="111" viewBox="0 0 138 111" fill="none">
  <circle cx="69" cy="86" r="25" fill="#092643"/>
  <circle cx="48" cy="20" r="15" fill="#092643"/>
  <circle cx="128" cy="92" r="10" fill="#092643"/>
  <circle cx="10" cy="10" r="10" fill="#092643"/>
</svg>
            </div>
            <div className="picture"><Image src={Picture} alt='leone'/></div>
            <div className="pic-1 pic"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="95" viewBox="0 0 100 95" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M51.284 0.106649C62.1768 -0.835356 72.8905 4.57632 81.0449 11.8596C88.7171 18.7121 91.5175 28.934 94.5611 38.7604C97.5595 48.4406 102.518 58.8618 98.4828 68.1577C94.5133 77.3026 83.2576 79.9887 74.5546 84.8511C67.0368 89.0513 59.8952 94.6018 51.284 94.5278C42.7102 94.4541 35.9754 88.2796 28.3023 84.4535C18.6546 79.6429 4.13196 79.4765 0.642555 69.2763C-2.83582 59.1084 8.73034 50.2132 13.2543 40.4653C17.0698 32.2439 18.826 23.2992 25.0419 16.7027C32.3178 8.98116 40.714 1.02075 51.284 0.106649Z" fill="#092643"/>
</svg></div>
            </div>
            
            </section>  
            <section className="impact">
                <div className="impact-container">
               <div className="div-impact">
               <div className="impact-header">The Impact </div>
               
               <div className="impact-text-container"> <div className="impact-text">Over 200 secondary school students in this cohort and 150 in the pilot version have been impacted.</div></div>
               </div>
                </div>
                </section>    
                <section className="support">
                    <div className="section-support-container">
                        <div className="support-text-container">
                            <div className="support-text-header">Supporting organizations</div>
                            <p className="support-text">We are better with your support. Become a part of the family!</p>
                            <div className="about-button">
                            <button>
                            Partner with us
                           </button>
                           </div>
                        </div>
                        <div className="support-image-container">
                            <div className='div-1 a'>
                            <div className="support-div"></div>
                            <div className="support-div"></div>
                            </div>
                           
                            <div className='div-1 b'>
                            <div className="support-div"></div>
                            <div className="support-div"></div>
                            </div>
                           
                            <div className='div-1 c'>
                            <div className="support-div"></div>
                            <div className="support-div"></div>
                            </div>
                           
                        </div>

                    </div>
                </section>
     </div>
    </div>
  )
}

export default About