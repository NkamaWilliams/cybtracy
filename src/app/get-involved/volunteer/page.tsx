import GetInvolved from "@/Components/GetInvolved"
import HomeFooter from "@/Components/HomeFooter"
import '@/Styles/get-involved-main.css'
import { Dangrek } from "next/font/google"

const dangrek = Dangrek({subsets: ["latin"], weight: "400"})

export default function Volunteer(){
    return (
        <div>
            <GetInvolved title="Volunteer"/>

            <div className="header">
                <h2 className={dangrek.className}>
                    Thank you for choosing to volunteer for us
                </h2>

                <p>Kindly fill the form below to get started</p>
            </div>

            <form noValidate={false}>
                <div className="group">
                    <div className="input-group">
                        <label htmlFor="first_name">First Name *</label>
                        <input id="first_name" title="First name" name="first_name" type="text"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="last_name">Last Name *</label>
                        <input id="last_name" title="Last name" name="last_name" type="text"/>
                    </div>
                </div>

                <div className="group">
                    <div className="input-group">
                        <label htmlFor="email">Email *</label>
                        <input id="email" title="Email" name="email" type="email"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone_number">Phone Number *</label>
                        <div className="side-info">
                            <p>234 |</p>
                            <input id="phone_number" type="text" title="Phone number" name="phone_number" pattern="[0-9]{10, 11}"/>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="input-group">
                        <label htmlFor="location">Location *</label>
                        <input id="location" title="Location" name="location" type="text"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="dob">Date of Birth *</label>
                        <input id="dob" type="date" name="dob" title="Date of Birth"/>
                    </div>
                </div>

                    <div className="group">
                        <div className="input-group">
                            <label htmlFor="department">Status *</label>
                            <select id="department" name="department">
                                <option>~Select Department~</option>
                            </select>
                        </div>
                    </div>

                    <div className="group">
                        <div className="input-group">
                            <label htmlFor="reason">Why would you like to Volunteer with Cybtracy * </label>
                            <textarea id="reason" name="reason" title="Reason for volunteering"/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="expectations">What are your expectations from Cybtracy * </label>
                            <textarea id="expectations" name="expectations" title="Expectations from us"/>
                        </div>
                    </div>

                <button className="btn-1" type="submit">Submit Form</button>
            </form>

            <footer>
                <HomeFooter/>
            </footer>
        </div>
    )
}