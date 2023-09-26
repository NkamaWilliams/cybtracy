"use client"
import { useState } from "react"
export default function PhoneInput(){
    const [open, setOpen] = useState(false)
    const [code, setCode] = useState<string|number>("+1")
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
                        <div onClick={() => {handleCodeSelect(1234)}} className="item">
                            <p className="code">+234</p>
                            <p className="country">Nigeria</p>
                        </div>
                    </div>}
                </div>
                <input id="phone_number" type="text" title="Phone number" name="phone_number" pattern="[0-9]{10, 11}" required/>
            </div>
        </>
    )
}