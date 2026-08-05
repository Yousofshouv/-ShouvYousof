import { NAV_LINKS } from "@/components/portfolio/data/portfolio";

type NavbarProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Navbar({ menuOpen, onToggleMenu, onCloseMenu }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight">
          <span className="text-cyan">YH</span>
          <span className="text-white/40">.</span>
          <span>Shouv</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-80 transition-opacity"
          >
            Hire Me
          </a>
          <button type="button" onClick={onToggleMenu} className="md:hidden p-2" aria-label="Toggle menu">
            <div className="w-5 h-0.5 bg-white mb-1.5" />
            <div className="w-5 h-0.5 bg-white mb-1.5" />
            <div className="w-3 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={onCloseMenu}
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
