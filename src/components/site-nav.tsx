import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/harmoniz/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/sonevida", label: "Sonevida" },
  { to: "/galeria", label: "Galeria" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden sm:block bg-primary text-primary-foreground text-[11px] tracking-[0.14em]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-9 flex items-center justify-between uppercase">
          <span className="opacity-90">Mogi das Cruzes — SP · Bairro Itapeti</span>
          <div className="flex items-center gap-6">
            <span className="opacity-90">Distribuição pelo Veiling Holambra</span>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/harmoniz_orquideas/" target="_blank" rel="noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.facebook.com/harmonizorquideas" target="_blank" rel="noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-xl bg-background/95 border-b border-border/50 shadow-[var(--shadow-soft)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img src={logo} alt="Harmoniz Orquídeas" className="h-11 w-auto transition-transform duration-500 group-hover:scale-105" />
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.08em] text-foreground/70">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative py-2 transition-colors hover:text-foreground after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                activeProps={{ className: "text-foreground [&::after]:scale-x-100" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link to="/galeria" className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs tracking-[0.08em] uppercase hover:bg-accent transition-all duration-500">
            Nossas espécies
          </Link>
          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2 text-foreground/80 hover:text-accent"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}