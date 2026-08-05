export const NAV_LINKS = ["About", "Skills", "Projects", "Certifications", "Contact"] as const;

export const skills = [
  { name: "React", icon: "⚛️", from: "#22d3ee", to: "#3b82f6" },
  { name: "Next.js", icon: "▲", from: "#e2e8f0", to: "#94a3b8" },
  { name: "JavaScript", icon: "⚡", from: "#fde047", to: "#f59e0b" },
  { name: "HTML5", icon: "🌐", from: "#fb923c", to: "#ef4444" },
  { name: "CSS3", icon: "🎨", from: "#818cf8", to: "#3b82f6" },
  { name: "Node.js", icon: "🟢", from: "#4ade80", to: "#16a34a" },
  { name: "Express.js", icon: "🚂", from: "#d1d5db", to: "#9ca3af" },
  { name: "MongoDB", icon: "🍃", from: "#4ade80", to: "#84cc16" },
  { name: "MySQL", icon: "🐬", from: "#38bdf8", to: "#0ea5e9" },
  { name: "PostgreSQL", icon: "🐘", from: "#818cf8", to: "#6366f1" },
  { name: "C++", icon: "⚙️", from: "#60a5fa", to: "#a855f7" },
  { name: "Java", icon: "☕", from: "#fb923c", to: "#ef4444" },
  { name: "Java Swing", icon: "🖥️", from: "#fbbf24", to: "#f59e0b" },
] as const;

export const photos = [
  "/projectphoto.png",
  "/projectphoto1.png",
  "/projectphoto2.png",
  "/projectphotoa.png",
  "/projectphotoq.png",
] as const;

export const certs = [
  {
    src: "/gemini badge.png",
    title: "Gemini Certified",
    sub: "University Student",
    issuer: "Google",
    badge: "🤖",
  },
  {
    src: "/it-essentials (1).png",
    title: "IT Essentials",
    sub: "Verified",
    issuer: "Cisco Networking Academy",
    badge: "🌐",
  },
  {
    src: "/nasa certificate.png",
    title: "Space Apps Challenge",
    sub: "Accepted 2025",
    issuer: "NASA",
    badge: "🚀",
  },
] as const;

export const heroStats = [
  { value: "3+", label: "Certifications" },
  { value: "1", label: "NASA space apps challenge-2025 Project" },
  { value: "13+", label: "Tech Skills" },
] as const;

export const aboutHighlights = [
  ["🎓", "University", "AIUB"],
  ["📚", "Degree", "B.Sc. in CSE"],
  ["📧", "Email", "shouvhossain25@gmail.com"],
  ["📱", "Phone", "+880 1897-794846"],
  ["🚀", "Achievement", "NASA Space Apps 2025"],
  ["📍", "Location", "Bangladesh"],
] as const;
