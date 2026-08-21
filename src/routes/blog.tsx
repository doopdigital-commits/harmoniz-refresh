import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ArrowUpRight } from "lucide-react";
import blog1 from "@/assets/harmoniz/blog1.png";
import blog2 from "@/assets/harmoniz/blog2.jpg";
import blog3 from "@/assets/harmoniz/blog3.jpg";
import blog4 from "@/assets/harmoniz/blog4.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Harmoniz Orquídeas" },
      { name: "description", content: "Dicas de cultivo, significados energéticos e curiosidades sobre orquídeas — direto do blog Harmonia da Harmoniz Orquídeas." },
      { property: "og:title", content: "Blog Harmonia — Harmoniz Orquídeas" },
      { property: "og:description", content: "Conteúdo sobre cuidado, bioenergia e o universo das orquídeas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const categoryTones = [
  "bg-accent text-accent-foreground",
  "bg-foreground text-background",
  "bg-secondary text-secondary-foreground",
];

const posts = [
  {
    img: blog1,
    category: "Harmonia",
    title: "Ganhei uma orquídea! O que fazer para que ela dure mais e floresça novamente?",
    excerpt: "Confira algumas dicas importantes para cuidar da sua orquídea da maneira correta, garantindo que ela cresça de forma saudável.",
    href: "https://www.harmoniz.com.br/2026/02/ganhei-uma-orquidea-o-que-fazer-para-que-ela-dure-mais-e-floresca-novamente/",
    date: "Fev 2026",
  },
  {
    img: blog2,
    category: "Harmonia",
    title: "Espécies de orquídeas e seus significados energéticos",
    excerpt: "Beleza, vibração e harmonia no ambiente — descubra o que cada espécie representa energeticamente.",
    href: "https://www.harmoniz.com.br/2026/01/especies-de-orquideas-e-seus-significados-energeticos-beleza-vibracao-e-harmonia-no-ambiente/",
    date: "Jan 2026",
  },
  {
    img: blog3,
    category: "Harmonia",
    title: "Bioenergia e orquídeas: como essas flores influenciam o ambiente",
    excerpt: "A emoção e o equilíbrio do lar — como a energia sutil das orquídeas transforma cada espaço.",
    href: "https://www.harmoniz.com.br/2025/12/bioenergia-e-orquideas-como-essas-flores-influenciam-o-ambiente-a-emocao-e-o-equilibrio-do-lar/",
    date: "Dez 2025",
  },
  {
    img: blog4,
    category: "Harmonia",
    title: "Cuidar de uma orquídea é cultivar a própria essência",
    excerpt: "Uma reflexão sobre o vínculo entre quem cuida e a planta cuidada — e o que essa relação nos ensina.",
    href: "https://www.harmoniz.com.br/2025/11/cuidar-de-uma-orquidea-e-cultivar-a-propria-essencia/",
    date: "Nov 2025",
  },
];

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-6">Blog</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
          Cultivo, energia e <em className="text-accent not-italic">harmonia</em>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Histórias e dicas sobre o universo das orquídeas — para você viver a experiência Harmoniz em casa.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <a href={featured.href} target="_blank" rel="noreferrer" className="group grid md:grid-cols-12 gap-8 items-center bg-card border border-border/60 rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] p-3 md:p-4">
          <div className="md:col-span-7 overflow-hidden rounded-2xl aspect-[4/3]">
            <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="md:col-span-5 p-4 md:p-6">
            <div className="flex items-center gap-3 text-xs">
              <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full uppercase tracking-[0.2em]">{featured.category}</span>
              <span className="text-muted-foreground">{featured.date}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight group-hover:text-accent transition-colors">
              {featured.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              Ler artigo <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 border-t border-border/60">
        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((p, i) => (
            <a key={p.href} href={p.href} target="_blank" rel="noreferrer" className="group flex flex-col bg-card border border-border/60 rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs">
                  <span className={`px-3 py-1.5 rounded-full uppercase tracking-[0.2em] ${categoryTones[i % categoryTones.length]}`}>{p.category}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl leading-tight group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}