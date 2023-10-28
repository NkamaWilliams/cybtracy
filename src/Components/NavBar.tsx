"use client";

import Image from "next/image";
import Link from "next/link";
import "@/Styles/styles.css";
import Logo from "../../public/images/png/black-horizontal.png";
import MenuLogo from "../../public/images/assets/logo-vertical.png";
import Hamburger from "../../public/images/icons/hamburger.png";
import Close from "../../public/images/icons/close.png";
import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [ham, setHam] = useState(Hamburger);

  const toggleNavigation = () => {
    setShowMenu(!showMenu);
    setHam(ham === Hamburger ? Close : Hamburger);
  };

  return (
    <nav id={showMenu ? "nav" : ""}>
      <Link href="/" className="nav-icons">
        {!showMenu && <Image src={Logo} alt="logo" quality={100} id="logo" />}
        <Image
          src={ham}
          alt="Hamburger"
          quality={100}
          id={ham === Close ? "hamburger-absolute" : "hamburger"}
          onClick={toggleNavigation}
        />
      </Link>
      {showMenu && (
        <Image
          src={MenuLogo}
          alt="logo"
          quality={100}
          width={215}
          id="menu-logo"
        />
      )}
      <ul id={showMenu ? "nav-list" : ""}>
        <li>
          <Link href="/about/about">About</Link>
        </li>
        <li>
          <Link href="/get-involved/donation">Get Involved</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button>Donate</button>
        </li>
      </ul>
    </nav>
  );
}
