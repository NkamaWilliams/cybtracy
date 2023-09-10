import Image from 'next/image'
import '../../../Styles/Team.css'
import {BiGift} from 'react-icons/bi'
import {IoIosPeople} from 'react-icons/io'
import {IoEarth} from 'react-icons/io5'
import TeamImage from '../../../../public/images/png/Teamimage1.png'
import rect from '../../../../public/images/png/rect.png'
import face1 from '../../../../public/images/png/face1.png'
import face2 from '../../../../public/images/png/face2.png'
import face3 from '../../../../public/images/png/face3.png'
import HomeFooter from '@/Components/HomeFooter'


export default function  Team(){
    return (
        <div className="team">
            <div>
            <section className="Team-landing-component">
                <div className="team-header">
                    <div className="team-header-text-container">
                        <p className="team-head">Our people</p>
                        <p className="team-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="team-button">
                            <button className="team">Become a Volunteer</button>
                        </p>
                        
                    </div>
                    <div className="team-header-image">
                     <div className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="113" height="122" viewBox="0 0 113 122" fill="none">
      <circle cx="73" cy="87" r="25" fill="#092643"/>
      <circle cx="98" cy="25" r="15" fill="#092643"/>
      <circle cx="10" cy="112" r="10" fill="#092643"/>
      <circle cx="48" cy="10" r="10" fill="#092643"/>
    </svg></div>
                     <div className="team-image"><Image src={TeamImage} alt='team-image'/></div>
                     <div className="svg-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="400" height="379" viewBox="0 0 400 379" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M205.136 0.426594C248.707 -3.34142 291.562 18.3053 324.18 47.4382C354.868 74.8485 366.07 115.736 378.244 155.041C390.238 193.762 410.072 235.447 393.931 272.631C378.053 309.211 333.03 319.955 298.218 339.404C268.147 356.205 239.581 378.407 205.136 378.111C170.841 377.816 143.902 353.118 113.209 337.814C74.6186 318.572 16.5278 317.906 2.57022 277.105C-11.3433 236.434 34.9214 200.853 53.0172 161.861C68.2793 128.976 75.3041 93.1968 100.167 66.8108C129.271 35.9246 162.856 4.08299 205.136 0.426594Z" fill="#092643"/>
    </svg>
                     </div>
                    </div>
                </div>
            </section>
            <section className="section-team-images">
                <div className="team-pictures">
            <div className="team-pic-text">
                <div className="team-head">Meet the team</div>
                <div className="team-text">Here are the amazing minds working behind Cybtracy</div>
    
            </div>
            <div className="images">
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face1} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face2} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face3} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face1} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face2} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face2} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face1} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face3} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face1} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
                <div className="image">
                   <div className="image-div">
                    <div className="svg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 3C5 4.062 4.29 4.976 2.999 4.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1C4.24 1 4.976 1.91 5 3ZM1 19V6H5V19H1ZM7 10.444C7 8.899 6.949 7.608 6.898 6.493H10.492L10.67 8.216H10.746C11.252 7.405 12.492 6.216 14.568 6.216C17.1 6.216 19 7.911 19 11.558V19H15V12.139C15 10.545 14.393 9.329 13 9.329C11.938 9.329 11.406 10.189 11.127 10.898C11.025 11.152 11 11.506 11 11.861V19H7V10.444Z" fill="#FDFDFD"/>
    </svg>
                    </div>
                    <Image src={rect} className='rect' alt='backgroud'/>
                   <Image src={face1} alt='face1' className='i'/>
                   </div>
                    <div className="image-head">Amari Aderigbigbe</div>
                    <div className="image-text">Convener, Cybtracy</div>
                </div>
            </div>
                </div>
            </section>
            <section className="get-involved">
                <div className="get-involved-container">
                    <div className="get-header-container">
                        <p className="get-header">Get invloved</p>
                        <p className="get-text">We are better with your support. Become a part of the family!</p>
                        <p className="get-button">
                            <button>Contact Us</button>
                        </p>
                    </div>
                    <div className="donate">
                        <div className="don">
                            <div className="svg-con">
                            <BiGift/>
                            </div>
                            <div className="svg-text">Donation</div>
                        </div>
                        <div className="don">
                            <div className="svg-con">
                            <IoEarth/>
                            </div>
                            <div className="svg-text">Partnership</div>
                        </div>
                        <div className="don">
                            <div className="svg-con">
                            <IoIosPeople/>
                            </div>
                            <div className="svg-text">Volunteer</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="footer">
            <HomeFooter/>
        </div>
        </div>
      )
}
