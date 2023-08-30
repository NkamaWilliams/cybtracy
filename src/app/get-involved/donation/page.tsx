import GetInvolved from "@/Components/GetInvolved"
import HomeFooter from "@/Components/HomeFooter"
import '@/Styles/get-involved-main.css'
import { Dangrek } from "next/font/google"

const dangrek = Dangrek({subsets: ["latin"], weight: "400"})

export default function Donation(){
    return(
        <div>
            <GetInvolved title="Donation"/>
            
            <div className="header">
                <h2 className={dangrek.className}>
                    Thank you for choosing to donate to us
                </h2>

                <p>We accept both monetary and non-monetary donations.</p>
            </div>

            <div className="grid-container">
                <div className="grid grid-1">
                    <h3 className={dangrek.className}>Monetary Donation</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                    <h4 className={dangrek.className}>Account Details</h4>
                    <h5 className={dangrek.className}>Bank <span className="value"> : Guaranty Trust Bank</span></h5>
                    <h5 className={dangrek.className}>Acct Number <span className="value"> : 123456789</span></h5>
                    <h5 className={dangrek.className}>Acct Name <span className="value">: Cybtracy</span></h5>

                    <p>Thank you for choosing to be a game changer</p><br/>
                    <p>Kindly contact us via email or message for enquiry or receipt for confirmation of payment</p>

                    <button className="btn-1" type="button">Contact Us</button>
                </div>

                <div className="grid grid-2">
                    <h3 className={dangrek.className}>Non-Monetary Donation</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                    <p>Through:</p>
                    <ul>
                        <li>Computers</li>
                        <li>Routers</li>
                        <li>Other Gadgets</li>
                    </ul>

                    <p>Kindly Contact Us via email, phone call or Contact Message to make such donations. </p><br/>
                    <p>We appreciate your effort and kind will towards the underserved students through our community.</p>

                    <button className="btn-1" type="button">Contact Us</button>
                </div>
                
            </div>

            <footer>
                <HomeFooter/>
            </footer>
        </div>
    )
}