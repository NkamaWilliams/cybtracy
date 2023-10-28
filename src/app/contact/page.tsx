"use client";
import { Dangrek } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import HomeFooter from "@/Components/HomeFooter";
import "@/Styles/contact.css";

const dangrek = Dangrek({ subsets: ["latin"], weight: "400" });
export default function Contact() {
  const contact_icons = [
    "/images/icons/mail.png",
    "/images/icons/phone.png",
    "/images/icons/location.png",
  ];

  const contact_info = [
    "Cybtracy@gmail.com",
    "+234 800 000 0000",
    "124, Amadu Bello way, UNILAG, Lagos, Nigeria",
  ];

  const social_icons = [
    "/images/icons/fb-icon.png",
    "/images/icons/x-icon.png",
    "/images/icons/insta-icon.png",
  ];

  const social_links = ["#", "#", "#"];

  const validateMail = () => {
    const mail = document.querySelectorAll("input")[1];
    const pattern = /\w+@\w+\.\w+/;
    if (pattern.test(mail.value)) {
      document.querySelector(".error-txt")?.classList.add("hidden");
      mail.classList.remove("error");
      document.querySelector(".btn-1")?.removeAttribute("disabled");
    } else {
      document.querySelector(".error-txt")?.classList.remove("hidden");
      mail.classList.add("error");

      document.querySelector(".btn-1")?.setAttribute("disabled", "true");
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="relative main">
          <div className="info">
            <div className="info-details">
              <h2 className={dangrek.className}>Contact Us</h2>

              <div className="list">
                {contact_icons.map((icon) => (
                  <div key={contact_icons.indexOf(icon)} className="list-item">
                    <div className="relative icon square">
                      <Image
                        alt="icon"
                        src={icon}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width:40px)"
                      />
                    </div>
                    <p>{contact_info[contact_icons.indexOf(icon)]}</p>
                  </div>
                ))}
              </div>

              <div className="social">
                {social_icons.map((icon) => (
                  <Link
                    key={social_icons.indexOf(icon)}
                    className="square icon-2 relative"
                    href={social_links[social_icons.indexOf(icon)]}
                  >
                    <Image
                      alt="icon"
                      src={icon}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width:30px)"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="form">
            <form method="post">
              <h1>Get in touch</h1>
              <p>We would love to hear from you</p>

              <div className="input-group">
                <label htmlFor="full_name">Full Name *</label>
                <input
                  id="full_name"
                  title="Full name"
                  name="full_name"
                  type="text"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input
                  onInput={() => validateMail()}
                  className=""
                  id="email"
                  title="email"
                  name="email"
                  type="text"
                  required
                />
                <p className="error-txt hidden">Wrong message format</p>
              </div>

              <div className="input-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  title="Message"
                  name="message"
                  required
                />
              </div>

              <button className="btn-1" type="submit">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <HomeFooter />
      </footer>
    </div>
  );
}
