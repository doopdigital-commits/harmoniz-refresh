import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import logoWhite from "@/assets/harmoniz/logo-white.png";
import veiling from "@/assets/harmoniz/veiling.png";

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground mt-24">
      <div className="bg-secondary/40 text-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 flex md:justify-start justify-center">
            <img src={veiling} alt="Veiling Holambra" className="max-h-28 w-auto" />
          </div>
          <div className="md:col-span-8">
            <h3 className="font-display text-2xl md:text-3xl text-primary">Comercializados exclusivamente pelo Veiling Holambra</h3>
            <p className="mt-4 text-muted-foreground flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              Rodovia SP-107, km 27 — S/N, Zona Rural Veiling, Santo Antônio de Posse — SP
            </p>
            <div className="mt-3 flex flex-wrap gap-6 text-muted-foreground text-sm">
              <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> sac@cvh.com.br</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0300 775 8955</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <img src={logoWhite} alt="Harmoniz" className="h-16 w-auto" />
          <p className="mt-6 text-primary-foreground/70 max-w-sm leading-relaxed">
            Orquídeas com alma, cultivadas com amor em Mogi das Cruzes e entregues em todo o Brasil.
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">Navegação</p>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><Link to="/sobre" className="hover:text-accent">Sobre</Link></li>
            <li><Link to="/sonevida" className="hover:text-accent">Sonevida</Link></li>
            <li><Link to="/galeria" className="hover:text-accent">Galeria</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">Redes</p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/harmoniz_orquideas/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/harmonizorquideas" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Harmoniz Orquídeas. Todos os direitos reservados.</span>
          <span>Mogi das Cruzes — SP</span>
        </div>
      </div>
    </footer>
  );
}