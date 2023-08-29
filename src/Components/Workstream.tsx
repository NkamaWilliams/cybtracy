import '@/Styles/home.css'
import '@/Styles/styles.css'
import Image from 'next/image'
import WorkstreamBg from '../../public/images/assets/workstream-bg.png'


export default function Workstream(){
    return (
        <section>
            <div className='primary-intro'>
                <h1 className='header'>Our Program Workstream</h1>
                <p className='header-text'>We seek to impact students with forward-thinking digital skills to a point where they can come up with solutions to problems on their own, and communicate it digitally.</p>
                <div className='btn-group'>
                    <button className='secondary-btn'>Partner with us</button>
                </div>
            </div>
            <Image src={WorkstreamBg} alt='Background Image' className='workstream-img'/>
            <div className='workstream-card-container'>
                <div className='workstream-card-wrapper workstream-card-first'>
                    <div className='workstream-card'>
                        <div>
                            <h2>Basic Digital Education</h2>
                            <p>Our mission is to give underserved children the fundamental digital literacy skills they need through sustainability to get started and thrive in the present and future digital economies.</p>
                        </div>
                    </div>
                </div>
                <div className='workstream-card-wrapper workstream-card-second'>
                    <div className='workstream-card'>
                        <div>
                            <h2>Digital Skill Acquisition</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                    </div>
                </div>
                <div className="workstream-card-wrapper workstream-card-third">
                    <div className='workstream-card'>
                        <div>
                            <h2>Online Safety and Security</h2>
                            <p>In addition to introducing them to the digital world, we also teach the kids how to stay safe online by teaching them the dos and don'ts of using the internet as youngsters.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}