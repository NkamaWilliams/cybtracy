"use client"
import { useState } from "react"
import codes from "./CountryCodes.json"

const country_code = codes.codes
export default function PhoneInput(){
    const [open, setOpen] = useState(false)
    const [code, setCode] = useState<string|number>("+00")
    const handleCodeSelect = (num: number|string) => {
        setCode(num)
        setOpen(false)
    }
    return (
        <>
            <label htmlFor="phone_number">Phone Number *</label>
            <div className="side-info">
                <div className="dropdown">
                    <p onClick={() => setOpen(!open)} className="selected">{code} </p>
                    {open && <div className="dropdown-content">
                        {country_code.map(country => 
                            <div onClick={() => {handleCodeSelect(country.dial_code)}} className="item">
                                <p className="code">{country.dial_code}</p>
                                <p className="country">{country.name}</p>
                            </div>
                        )}
                    </div>}
                </div>
                <input id="phone_number" type="text" title="Phone number" name="phone_number" pattern="[0-9]{10, 11}" required/>
            </div>
        </>
    )
}