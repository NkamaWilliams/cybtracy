import Image from 'next/image'
import DonationIcon from '../../public/images/icons/donation-Icon.png'
import PartnershipIcon from '../../public/images/icons/partnership-icon.png'
import VolunteerIcon from '../../public/images/icons/volunteer-icon.png'


export default function GetInvolvedSection(){
    return (
        <section className="get-involved-section">
            <div className="get-involved-intro">
                <h1 className="header text-fdfdfd">Get Involved</h1>
                <p className='header-text text-fdfdfd'>We are better with your support. Become a part of the family!</p>
                <button className='secondary-btn bg-green'>Contact Us</button>
            </div>
            <div className='get-involved-card-container'>
                <div className='get-involved-card-wrapper'>
                    <div className='get-involved-card'>
                        <div className='get-involved-icon bg-green'><Image src={DonationIcon} alt='Donation Icon'/></div>
                        <h2>Donation</h2>
                    </div>
                </div>
                <div className='get-involved-card-wrapper'>
                    <div className='get-involved-card'>
                        <div className='get-involved-icon bg-green'><Image src={PartnershipIcon} alt='Donation Icon'/></div>
                        <h2>Partnership</h2>
                    </div>
                </div>
                <div className='get-involved-card-wrapper'>
                    <div className='get-involved-card'>
                        <div className='get-involved-icon bg-green'><Image src={VolunteerIcon} alt='Donation Icon'/></div>
                        <h2>Volunteer</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}