"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { photos } from "@/components/portfolio/data/portfolio";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

export function ProjectsSection() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="What I Built" title="Featured Project" />

        <div className="glass border border-white/8 rounded-3xl overflow-hidden">
          <div className="relative w-full h-64 md:h-[480px]">
            <Image
              src={photos[activePhoto]}
              alt={`StarSentinel screenshot ${activePhoto + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={activePhoto === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold bg-orange-500/20 border border-orange-500/30 text-orange-300 backdrop-blur-sm">
              🚀 NASA Space Apps Challenge 2025
            </span>
          </div>

          <div className="flex gap-3 p-4 bg-black/20 overflow-x-auto">
            {photos.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActivePhoto(index)}
                className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === activePhoto
                    ? "border-cyan-500 opacity-100"
                    : "border-white/10 opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={src} alt={`Thumb ${index + 1}`} fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="flex-1">
              <h3 className="text-3xl font-black text-cyan mb-3">StarSentinel</h3>
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                An immersive space weather adventure accepted into the{" "}
                <span className="text-orange-300 font-semibold">2025 NASA International Space Apps Challenge</span>. It educates users how solar events affect farmers, pilots, astronauts, and power operators — featuring an AI Teacher and live space weather data.
              </p>
            </div>
            <a
              href="https://star-sentinel.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-80 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              🌐 Live Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
