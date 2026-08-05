import Image from "next/image";

import { heroStats } from "@/components/portfolio/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-14">
      <div className="flex-1 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          B.Sc. CSE · American International University-Bangladesh
        </span>

        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-5">
          Hi, I&apos;m
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Yousof Hossain
            <br />
            Shouv
          </span>
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
          Full Stack Developer building high-performance web apps, desktop GUI tools (Java Swing), and award-winning projects accepted by{" "}
          <span className="text-white font-semibold">NASA</span>.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3 font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-80 transition-opacity shadow-lg shadow-cyan-500/20"
          >
            View My Work
          </a>
          <a
            href="mailto:shouvhossain25@gmail.com"
            className="px-7 py-3 font-semibold rounded-full glass border border-white/10 hover:border-cyan-500/30 hover:bg-white/8 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-10 mt-12">
          {heroStats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-black text-cyan">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-shrink-0 z-10">
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-purple-600/10 to-pink-500/10 blur-xl" />
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/myphoto.png"
            alt="Yousof Hossain Shouv"
            fill
            sizes="(max-width:768px) 240px, 320px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
