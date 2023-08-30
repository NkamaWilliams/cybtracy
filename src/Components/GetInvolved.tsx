'use client'

import React from "react"
import Image from "next/image"
import "@/Styles/get-involved-header.css"
import { useState } from "react"
import { Dangrek } from "next/font/google"
import Link from "next/link"

const dangrek = Dangrek({weight: "400", subsets: ["latin"]})

export default function GetInvolved(
    {title}: {title:string}
){
    
    const [state, setState] = useState(title)
    
    const cards = [{image: "/images/png/icon-gift.png", name: "Donation", href: '/get-involved/donation'}, {image: "/images/png/icon-globe.png", name: "Partnership", href: '/get-involved/partnership'}, {image: "/images/png/icon-volunteer.png", name: "Volunteer", href: '/get-involved/volunteer'}]
    
    return (
            <div className="main">
                <div className="text">
                    <h1 className={dangrek.className}>Get Involved</h1>
                    <p>We are better with your support. Become a part of the family!</p>
                </div>

                <div className="cards">
                    {cards.map(card => state == card.name? <Link href={card.href}><ActiveCard src={card.image} name={card.name}/></Link>: <Link href={card.href}><Card src={card.image} name={card.name}/></Link>)}
                </div>
            </div>
    )
}

function Card({src, name}: {src:string, name:string}){
    return (
        <div className="card">
            <div className="icon-container square">
                <div className="relative icon square">
                    <Image alt="icon" src={src} fill style={{objectFit: "contain"}} sizes="(max-width:40px)"/>
                </div>
            </div>

            <p>{name}</p>
        </div>
    )
}

function ActiveCard({src, name}: {src:string, name:string}){
    return (
        <div className="card card-active">
            <div className="icon-container square">
                <div className="relative icon square">
                    <Image alt="icon" src={src} fill style={{objectFit: "contain"}} sizes="(max-width:40px)"/>
                </div>
            </div>

            <p>{name}</p>
        </div>
    )
}