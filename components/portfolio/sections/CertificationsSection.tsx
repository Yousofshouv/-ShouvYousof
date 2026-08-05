import Image from "next/image";

import { certs } from "@/components/portfolio/data/portfolio";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Credentials" title="My Certifications" accent="purple" />

        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="glass border border-white/8 rounded-3xl overflow-hidden hover:-translate-y-1 hover:border-white/15 transition-all duration-200"
            >
              <div className="w-full h-52 bg-white flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image src={cert.src} alt={cert.title} fill sizes="(max-width:768px)100vw,33vw" className="object-contain" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{cert.badge}</div>
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-slate-400 text-sm">{cert.sub}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-1">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
