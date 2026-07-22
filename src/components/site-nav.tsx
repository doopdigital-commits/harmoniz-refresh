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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Harmoniz Orquídeas" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-foreground/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href="https://www.instagram.com/harmoniz_orquideas/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/harmonizorquideas" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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