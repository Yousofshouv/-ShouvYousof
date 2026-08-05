"use client";

import { useState } from "react";

import { Footer } from "@/components/portfolio/Footer";
import { Navbar } from "@/components/portfolio/Navbar";
import { AboutSection } from "@/components/portfolio/sections/AboutSection";
import { CertificationsSection } from "@/components/portfolio/sections/CertificationsSection";
import { ContactSection } from "@/components/portfolio/sections/ContactSection";
import { HeroSection } from "@/components/portfolio/sections/HeroSection";
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <Navbar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((previous) => !previous)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
