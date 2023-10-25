"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/Styles/home.css";
import Transition from "@/app/Transition";

//Assets
import LandingImage2 from "../../public/images/assets/landingImage2.png";
import LandingImage1 from "../../public/images/assets/landingImage1.png";
import LandingImage3 from "../../public/images/assets/landingImage3.png";
import ground1 from "../../public/images/assets/background1.png";
import ground2 from "../../public/images/assets/background2.png";
import ground3 from "../../public/images/assets/background3.png";

function ImageComponent() {
  const images = [LandingImage1, LandingImage2, LandingImage3];
  const background: any[] = [ground1, ground2, ground3];
  const [opacity, setOpacity] = useState(1);
  const [image, setimage] = useState(0);
  const [back, setBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(() => 0);

      setTimeout(() => {
        setimage((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(() => 1);
      }, 500); // Wait for 0.5 seconds for the fade-out animation to finish
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(() => 0);

      setTimeout(() => {
        setBackground((prevIndex) => (prevIndex + 1) % background.length);
        setOpacity(() => 1);
      }, 500); // Wait for 0.5 seconds for the fade-out animation to finish
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <Image
        className="slider-image"
        style={{ opacity: opacity }}
        src={images[image]}
        alt="Home Image"
        quality={100}
        placeholder="blur"
      />
      <Image
        className="Slider-image slider-background"
        style={{ opacity: opacity }}
        src={background[image]}
        alt="Home Image Background"
        quality={100}
        placeholder="blur"
      />
    </div>
  );
}

export default Transition(ImageComponent);
