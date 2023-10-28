"use client";
import { useState } from "react";
import codes from "./CountryCodes.json";
import "@/Styles/styles.css";

const country_code = codes.codes
export default function PhoneInput(){
    const [open, setOpen] = useState(false)
    const [code, setCode] = useState<string>("")
    const handleCodeSelect = (num: string) => {
        setCode(num)
        setOpen(false)
    }
    return (
        <>
            <label htmlFor="phone_number">Phone Number *</label>
            <div className="side-info">
                <div className="dropdown">
                    {/* <p onClick={() => setOpen(!open)} className="selected">{code} </p> */}
                    <div className="selected" onClick={() => setOpen(!open)}>
                        <input
                        id="country-code" 
                        type="text" 
                        title="Country code" 
                        name="country_code" 
                        pattern="[\+0-9]+" 
                        value={code} 
                        onInput={(e:any) => setCode(e.target.value)}
                        placeholder="+000"
                        required/>
                    </div>
                    {open && <div className="dropdown-content">
                        {country_code.filter((country) => {return country.dial_code.includes(code)}).map(country => 
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
