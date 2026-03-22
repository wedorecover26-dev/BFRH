import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import WhatWeOffer from "@/components/WhatWeOffer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <WhatWeOffer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
