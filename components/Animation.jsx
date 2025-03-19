// Create a file called Animation.jsx
"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import animationData from '../public/Animation - 1741750534762.json';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export default function Animation() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => {};
  }, []);
  
  if (!isMounted) return null;
  
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  
  return (
    <Lottie 
      options={options} 
      height={350} 
      width={350} 
      isClickToPauseDisabled={true}
    />
  );
}

// Then in your Navbar component, import and use this component