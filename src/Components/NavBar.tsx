import Image from 'next/image';
import Link from 'next/link';
import '@/Styles/styles.css'
import Logo from '../../public/images/png/black-horizontal.png'

export default function NavBar() {
    return (
        <nav className='w-full h-24 fixed flex flex-row px-24 py-8 justify-between items-center'>
            <Link href='/'>
                <Image src={Logo} alt="logo" className='w-44 h-12' quality={100}/>
                </Link>
            <ul className="flex flex-row items-center justify-between">
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/get-involved'>Get Involved</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li><button>Donate</button></li>
            </ul>
        </nav>
    )
}