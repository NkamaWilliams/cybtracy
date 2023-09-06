'use client'
import { Dangrek } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import HomeFooter from "@/Components/HomeFooter"
import '@/Styles/contact.css'

const dangrek = Dangrek({subsets: ["latin"], weight: "400"})
export default function Contact() {

    return (
        <div className="contact">
            
            <HomeFooter/>
        </div>
    )
}