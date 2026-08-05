import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { skills } from "@/components/portfolio/data/portfolio";

const marqueeSkills = [...skills, ...skills];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="What I Use" title="Tech Arsenal" accent="purple" />

        <div className="mt-12 space-y-6">
          <div className="skills-marquee skills-marquee-left">
            <div className="skills-marquee__track">
              {marqueeSkills.map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="skills-marquee__item glass">
                  <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                  <span
                    className="text-sm font-bold whitespace-nowrap"
                    style={{
                      background: `linear-gradient(135deg,${skill.from},${skill.to})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-marquee skills-marquee-right">
            <div className="skills-marquee__track">
              {marqueeSkills.map((skill, index) => (
                <div key={`${skill.name}-reverse-${index}`} className="skills-marquee__item glass">
                  <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                  <span
                    className="text-sm font-bold whitespace-nowrap"
                    style={{
                      background: `linear-gradient(135deg,${skill.from},${skill.to})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



