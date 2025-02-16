import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skillss from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import About from "./components/About";
import Contact from "./components/Contact";
import BG_gradient from "./assets/wave.png";
import bg from "./assets/blue.png";
import Footer from "./components/Footer";
import ActiveCard from "./components/ActiveCard";

const AnimatedCursor = ({ hovered }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none mix-blend-difference"
      animate={{ x: position.x - 12, y: position.y - 12, scale: hovered ? 2 : 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />
  );
};

export default function App() {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="bg-background" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "-40% -70%",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <AnimatedCursor hovered={hovered} />
      <Skillss />
      <WorkExperience /> 
      <ActiveCard />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
