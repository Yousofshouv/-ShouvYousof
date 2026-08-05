export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center">
      <p className="text-slate-600 text-sm">
        learn think build
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
         
        </span>{" "}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
