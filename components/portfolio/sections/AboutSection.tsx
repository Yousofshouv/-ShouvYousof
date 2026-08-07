import { aboutHighlights } from "@/components/portfolio/data/portfolio";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <div className="flex-1 space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-semibold">Yousof Hossain Shouv</span>, a passionate Computer Science student at{" "}
              <span className="text-cyan-400 font-semibold">American International University-Bangladesh (AIUB)</span>, pursuing my B.Sc. in CSE.
            </p>
            <p>
              I work across the full stack — React, Next.js, Node.js on the web, and Java Swing for desktop GUI apps, with C++ and Java for systems programming.
            </p>
              <p>
               I have keen interest in <span className="text-white font-semibold">AI, Machine Learning, and Deep Learning</span>, and I am actively exploring these fields to enhance my skills and contribute to innovative projects.
            </p>
            <p>
              My project <span className="text-white font-semibold">StarSentinel</span> was accepted into the{" "}
              <span className="text-orange-400 font-semibold">NASA International Space Apps Challenge 2025</span>.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {aboutHighlights.map(([icon, label, value]) => (
              <div
                key={label}
                className="glass rounded-2xl p-4 hover:border-cyan-500/20 transition-colors border border-white/5"
              >
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">{label}</p>
                <p className="text-white text-sm font-semibold break-all">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
