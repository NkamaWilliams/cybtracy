import Image from 'next/image';
import Link from 'next/link';
import '@/Styles/styles.css'
import Logo from '../../public/images/png/black-horizontal.png'

export default function NavBar() {
    return (
        <nav>
            <Link href='/'>
                <Image src={Logo} alt="logo" quality={100} id='logo'/>
            </Link>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/get-involved'>Get Involved</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li><button>Donate</button></li>
            </ul>
        </nav>
    )
}