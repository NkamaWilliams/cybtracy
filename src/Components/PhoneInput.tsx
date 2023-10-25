"use client";
import { useState } from "react";
import codes from "./CountryCodes.json";
import "@/Styles/styles.css";

const country_code = codes.codes;
export default function PhoneInput() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState<string | number>("+00");
  const handleCodeSelect = (num: number | string) => {
    setCode(num);
    setOpen(false);
  };
  return (
    <>
      <label htmlFor="phone_number">Phone Number *</label>
      <div className="side-info">
        <select className="phone-select">
          <option>+1</option>
          {country_code.map((country, index) => (
            <option key={index} value={country.dial_code}>
              {country.dial_code} - {country.name}
            </option>
          ))}
        </select>
        <input
          id="phone_number"
          type="text"
          title="Phone number"
          name="phone_number"
          pattern="[0-9]{10, 11}"
          required
        />
      </div>
    </>
  );
}
