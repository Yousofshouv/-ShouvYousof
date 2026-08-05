type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent?: "cyan" | "purple";
};

export function SectionHeading({ eyebrow, title, accent = "cyan" }: SectionHeadingProps) {
  const accentStyle = accent === "purple" ? "linear-gradient(90deg,#a855f7,#ec4899)" : "linear-gradient(90deg,#22d3ee,#3b82f6)";
  const eyebrowClassName = accent === "purple" ? "text-purple-400" : "text-cyan-400";

  return (
    <div className="text-center mb-14">
      <p className={`${eyebrowClassName} text-xs font-bold tracking-widest uppercase mb-2`}>
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black">
        {title}
      </h2>
      <div className="section-line" style={{ background: accentStyle }} />
    </div>
  );
}
