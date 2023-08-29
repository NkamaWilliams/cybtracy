import '@/Styles/home.css'
import '@/Styles/styles.css'
import Image from 'next/image'
import WhoweareImg from '../../public/images/assets/whoweare.png'
import WhoweareBg from '../../public/images/assets/whoweare-bg.png'

export default function Whoweare() {
    return (
        <section>
            <div>
                <Image src={WhoweareImg} className='slider-image' alt='Who we are' width={570} quality={100} />
                <Image src={WhoweareBg} className='slider-background whoweare-bg' alt='Background' width={560} quality={100} />
            </div>
            <div className='primary-intro'>
                <h1 className='header'>Who we are</h1>
                <p className='header-text'>We are young individuals who are enthusiastic about promoting functional literacy by bridging the gap between underserved students, and their access to digital literacy in Nigeria.</p>
                <div className='btn-group'>
                    <button className='primary-btn'>Learn More</button>
                    <button className='secondary-btn'>Partner with us</button>
                </div>
            </div>
        </section>
    )
}