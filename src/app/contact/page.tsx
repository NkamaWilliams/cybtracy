'use client'
import { Dangrek } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import HomeFooter from "@/Components/HomeFooter"
import '@/Styles/contact.css'

const dangrek = Dangrek({subsets: ["latin"], weight: "400"})
export default function Contact() {
    const validateEmail = () => {
        const email = document.querySelectorAll("input")[1]
        const button = document.querySelector("button")
        const error = document.getElementById("error-msg")
        const pattern = /\w+@\w+\.\w+/

        if (pattern.test(email.value)){
            document.getElementById("submit-btn")?.removeAttribute("disabled")
            error?.setAttribute("style", "display:none")
        }
        else{
            document.getElementById("submit-btn")?.setAttribute("disabled", "true")
            error?.setAttribute("style", "display:block")
        }
        console.log("Validate!")
    }
    return (
        <div className="contact">
            <div className="main">
                <div className="contact-container">
                    <div className="contact">
                        <h2>Contact Us</h2>

                        <div className="contact-item">
                            <Image alt="icon" src="/images/icons/mail.png" height={24} width={24}/>
                            <p>Cybtracy@gmail.com</p>
                        </div>

                        <div className="contact-item">
                            <Image alt="icon" src="/images/icons/phone.png" height={24} width={24}/>
                            <p>+234 800 000 0000</p>
                        </div>

                        <div className="contact-item">
                            <Image alt="icon" src="/images/icons/location.png" height={24} width={24}/>
                            <p>124, Amadu Bello way, UNILAG, Lagos, Nigeria</p>
                        </div>

                        <div className="socials">
                            <Link href="#" target="_blank">
                                <Image alt="socials" src="/images/icons/fb-icon.png" height={30} width={30}/>
                            </Link>

                            <Link href="#" target="_blank">
                                <Image alt="socials" src="/images/icons/x-icon.png" height={30} width={30}/>
                            </Link>

                            <Link href="#" target="_blank">
                                <Image alt="socials" src="/images/icons/insta-icon.png" height={30} width={30}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="form-container">
                    <form>
                        <h1>Get in Touch</h1>
                        <p>We would love to hear from you.</p>

                        <div className="input-group">
                            <label htmlFor="fullname">Full Name *</label>
                            <input id="fullname" type="text" name="fullname" required/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email *</label>
                            <input onInput={validateEmail} id="email" type="text" name="email" required/>
                            <p id="error-msg">Wrong Email format</p>
                        </div>

                        <div className="input-group">
                            <label htmlFor="message">Message *</label>
                            <textarea id="message" name="message" required/>
                        </div>

                        <button id="submit-btn" type="submit">Send message</button>
                    </form>
                </div>
            </div>
            <HomeFooter/>
        </div>
    )
}