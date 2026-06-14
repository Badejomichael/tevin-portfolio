"use client";

import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import NftProject from "../components/NftProject";
import Collabs from "../components/Collabs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      {/* Fixed grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Custom cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Work />
      <NftProject />
      <Collabs />
      <Contact />
      <Footer />
    </main>
  );
}