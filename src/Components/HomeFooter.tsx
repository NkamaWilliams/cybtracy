import FooterLogo from '../../public/images/assets/logo-vertical.png'
import EmailIcon from '../../public/images/icons/email-icon.png'
import PhoneIcon from '../../public/images/icons/phone-icon.png'
import MapIcon from '../../public/images/icons/map-icon.png'
import Image from 'next/image';

export default function HomeFooter(){
    return (
        <footer className="home-footer">
            <Image src={FooterLogo} alt='Cybtracy Footer Image' width={220} quality={100}/>
            <div className='footer-elements'>
                <div className='quick-links'>
                    <h3>QUICK LINKS</h3>
                    <div className='quick-links-container'>
                        <span>About Us</span>
                        <span>The Team</span>
                        <span>Get Involved</span>
                        <span>Contact Us</span>
                    </div>
                </div>
                <ul>
                    <li><Image src={EmailIcon} alt='Email Icon'/><span>Cybtracy@gmail.com</span></li>
                    <li><Image src={PhoneIcon} alt='Email Icon'/><span>+234 800 000 0000</span></li>
                    <li><Image src={MapIcon} alt='Email Icon'/><span>124, Amadu Bello way, UNILAG, Lagos, Nigeria.</span></li>
                </ul>
                <div className='btn-group-col'>
                    <button className='secondary-btn'>Donate</button>
                    <button className='primary-btn'>Partner with us</button>
                </div>
            </div>
        </footer>
    )
}