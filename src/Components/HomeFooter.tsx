import FooterLogo from '../../public/images/assets/logo-vertical.png'
import EmailIcon from '../../public/images/icons/email-icon.png'
import PhoneIcon from '../../public/images/icons/phone-icon.png'
import MapIcon from '../../public/images/icons/map-icon.png'
import Image from 'next/image';
import Link from 'next/link';

export default function HomeFooter(){
    return (
        <footer className="home-footer">
            <div className='home-footer-logo'>
                <Image src={FooterLogo} alt='Cybtracy Footer Image' width={220} quality={100}/>
            </div>
            <div className='footer-elements'>
                <div className='quick-links'>
                    <h3>QUICK LINKS</h3>
                    <div className='quick-links-container'>
                        <Link className='link' href='/about/about'>About Us</Link>
                        <Link className='link' href='/about/team'>The Team</Link>
                        <Link className='link' href='/get-involved/partnership'>Get Involved</Link>
                        <Link className='link' href='contact'>Contact Us</Link>
                    </div>
                </div>
                <ul>
                    <li><Image src={EmailIcon} alt='Email Icon'/><Link className='link' href='mailto:Cybtracy@gmail.com'>Cybtracy@gmail.com</Link></li>
                    <li><Image src={PhoneIcon} alt='Email Icon'/><span>+234 800 000 0000</span></li>
                    <li><Image src={MapIcon} alt='Email Icon'/><span>124, Ahmadu Bello way, UNILAG, Lagos, Nigeria.</span></li>
                </ul>
                <div className='btn-group-col'>
                    <button className='secondary-btn'>Donate</button>
                    <button className='primary-btn'>Partner with us</button>
                </div>
            </div>
        </footer>
    )
}