"use client";

import { useState, useEffect } from "react";

import Loader from "./components/Loader";

import NavbarDesktop from "./components/navbar/NavbarDesktop";
import HeroSection from "./components/section/HeroSection";
import AboutSection from "./components/section/AboutSection";
import TechSection from "./components/section/TechSection";
import ContactSection from "./components/section/ContactSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/section/ProjectSection";
import NavbarMobile from "./components/navbar/NavbarMobile";

export default function Home() {

  const [loading, setLoading] = useState(true);

  // SIDEBAR STATE
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black text-white">

      {/* LOADER */}
      <Loader isVisible={loading} />

      {/* NAVBAR */}
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:block">
        <NavbarDesktop
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />
      </div>

      {/* MOBILE NAVBAR */}
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>


      {/* MAIN CONTENT */}
      <div
        className={`
          transition-all
          duration-300
          ${sidebarOpen
            ? "lg:ml-72.5"
            : "lg:ml-27.5"
          }
        `}
      >

        {/* HERO */}
        <section id="home">
          <HeroSection loading={loading} sidebarOpen={sidebarOpen} />
        </section>

        {/* ABOUT */}
        <section id="about">
          <AboutSection />
        </section>

        {/* TECH STACK */}
        <section id="tech">
          <TechSection />
        </section>

        {/* PROJECT */}
        <section
          id="projects"
        >
          <ProjectsSection />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer />

      </div>
    </main>
  );
}