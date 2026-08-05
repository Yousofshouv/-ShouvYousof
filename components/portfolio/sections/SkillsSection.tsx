import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { skills } from "@/components/portfolio/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="What I Use" title="Tech Arsenal" accent="purple" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group glass border border-white/5 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-white/15 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-200 cursor-default"
            >
              <span className="text-4xl">{skill.icon}</span>
              <span
                className="text-sm font-bold"
                style={{
                  background: `linear-gradient(135deg,${skill.from},${skill.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {skill.name}
              </span>
              <div
                className="w-0 group-hover:w-full h-0.5 rounded-full transition-all duration-300"
                style={{ background: `linear-gradient(90deg,${skill.from},${skill.to})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
