export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">Reach Out</p>
        <h2 className="text-4xl font-black mb-3">
          Let&apos;s <span className="text-cyan">Connect</span>
        </h2>
        <div className="section-line mb-6" />
        <p className="text-slate-400 mb-12">Open for freelance, collaboration, or just a great conversation.</p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <a
            href="mailto:shouvhossain25@gmail.com"
            className="glass border border-white/8 rounded-2xl p-6 flex items-center gap-4 hover:border-red-500/30 hover:bg-white/[0.06] transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-2xl flex-shrink-0">
              📧
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Email</p>
              <p className="text-white font-semibold text-sm">shouvhossain25@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+8801897794846"
            className="glass border border-white/8 rounded-2xl p-6 flex items-center gap-4 hover:border-green-500/30 hover:bg-white/[0.06] transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl flex-shrink-0">
              📱
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Phone</p>
              <p className="text-white font-semibold">+880 1897-794846</p>
            </div>
          </a>
        </div>

        <a
          href="mailto:shouvhossain25@gmail.com"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-80 transition-opacity shadow-xl shadow-cyan-500/20"
        >
          ✉️ Send Me a Message
        </a>
      </div>
    </section>
  );
}
