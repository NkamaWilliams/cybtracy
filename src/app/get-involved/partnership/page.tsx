'use client'

import GetInvolved from "../../../Components/GetInvolved"
import HomeFooter from "@/Components/HomeFooter"
import PhoneInput from "@/Components/PhoneInput"
import '@/Styles/get-involved-main.css'
import { Dangrek } from "next/font/google"

const dangrek = Dangrek({subsets: ["latin"], weight: "400"})

export default function Partnership(){
    return(
        <div>
            <GetInvolved title="Partnership"/>

            <div className="header">
                <h2 className={dangrek.className}>
                    Thank you for choosing to partner with us
                </h2>

                <p>Kindly fill the form below to get started. We would reach out to you via mail as soon as we can.</p>
            </div>

            <form noValidate={false}>
                <div className="group">
                    <div className="input-group">
                        <label htmlFor="first_name">First Name *</label>
                        <input id="first_name" title="First name" name="first_name" type="text" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="last_name">Last Name *</label>
                        <input id="last_name" title="Last name" name="last_name" type="text" required/>
                    </div>
                </div>

                <div className="group">
                    <div className="input-group">
                        <label htmlFor="email">Email *</label>
                        <input id="email" title="Email" name="email" type="email" required/>
                    </div>

                    <div className="input-group">
                        <PhoneInput/>
                    </div>
                </div>

                <div className="group">
                    <div className="input-group">
                        <label htmlFor="location">Location *</label>
                        <input id="location" title="Location" name="location" type="text" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="status">Status *</label>
                        <select id="status" name="status" required>
                            <option>~Select Individual/Organization~</option>
                        </select>
                    </div>
                </div>

                    <div className="group">
                        <div className="input-group">
                            <label htmlFor="details">Partnership Details *</label>
                            <textarea id="details" name="details" title="details" required/>
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