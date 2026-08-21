import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Play, Music, Heart, Sparkles } from "lucide-react";
import sonevidaLogo from "@/assets/harmoniz/sonevida-logo.png";
import banner from "@/assets/harmoniz/sonevida-banner.png";

export const Route = createFileRoute("/sonevida")({
  head: () => ({
    meta: [
      { title: "Sonevida — Método exclusivo da Harmoniz Orquídeas" },
      { name: "description", content: "Sonevida é o método exclusivo da Harmoniz que une ciência, sabedoria ancestral e frequências sonoras (432Hz e 528Hz) para cultivar orquídeas mais vigorosas e harmoniosas." },
      { property: "og:title", content: "Sonevida — o método das frequências" },
      { property: "og:description", content: "Frequências harmônicas 432Hz e 528Hz aplicadas ao cultivo das nossas orquídeas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SonevidaPage,
});

const frequencies = [
  { hz: "432 Hz", title: "Harmonia", desc: "Frequência natural, associada ao equilíbrio e à ressonância com a natureza." },
  { hz: "528 Hz", title: "Amor e regeneração", desc: "Conhecida como a frequência do amor, estimula a regeneração celular." },
];

function SonevidaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 text-center">
          <p className="eyebrow mb-6 justify-center">Nosso método</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl mx-auto">
            Orquídeas que <em className="text-accent not-italic">ressoam</em> com o ambiente.
          </h1>
          <div className="mt-12 flex justify-center">
            <img src={sonevidaLogo} alt="Sonevida" className="h-48 md:h-64 w-auto" />
          </div>
        </div>
        <div aria-hidden className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-hero)" }} />
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]">
          <img src={banner} alt="Sonevida — método Harmoniz" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 space-y-7 text-lg text-muted-foreground leading-relaxed">
        <p>
          Na Harmoniz Orquídeas, acreditamos que as plantas, assim como nós, ressoam com o ambiente à sua volta. Para crescerem saudáveis e exuberantes, as orquídeas precisam de mais do que luz, água e nutrientes: elas precisam de <span className="text-foreground font-medium">harmonia e boas vibrações</span>.
        </p>
        <p>
          Foi assim que nasceu o <span className="text-foreground font-medium">Sonevida</span>, um método exclusivo que une <span className="text-foreground font-medium">ciência moderna, sabedoria ancestral e intenção positiva</span> para nutrir nossas orquídeas com o poder das frequências sonoras.
        </p>
      </section>

      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-6">Frequências que inspiram vida</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Sons que atravessam a estufa.</h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              Inspirados por pesquisas que mostram como as plantas respondem a sons específicos, aplicamos frequências harmônicas ao longo de todo o cultivo — da germinação à floração.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {frequencies.map((f) => (
              <div key={f.hz} className="bg-card text-card-foreground rounded-2xl p-8">
                <div className="flex items-center gap-3 text-accent">
                  <Music className="h-5 w-5" />
                  <span className="uppercase text-xs tracking-[0.3em]">Frequência</span>
                </div>
                <p className="font-display text-5xl mt-4 text-primary">{f.hz}</p>
                <p className="mt-2 text-lg text-foreground">{f.title}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-primary-foreground/80 max-w-3xl leading-relaxed">
            O resultado? Plantas mais vigorosas, com maior absorção de nutrientes, crescimento equilibrado e floração mais abundante.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-8">
        <a href="https://www.youtube.com/watch?v=18SBhkemOB0" target="_blank" rel="noreferrer" className="group relative aspect-video rounded-3xl overflow-hidden bg-secondary flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/30" />
          <div className="relative z-10 text-center text-primary-foreground">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 ml-1" />
            </div>
            <p className="mt-4 font-display text-2xl">Harmoniz — Sonevida</p>
            <p className="text-sm text-primary-foreground/80">Assista no YouTube</p>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=2dFq-_Y7mKQ" target="_blank" rel="noreferrer" className="group relative aspect-video rounded-3xl overflow-hidden bg-primary flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-primary/40" />
          <div className="relative z-10 text-center text-primary-foreground">
            <div className="mx-auto w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Music className="h-6 w-6" />
            </div>
            <p className="mt-4 font-display text-2xl">Música exclusiva</p>
            <p className="text-sm text-primary-foreground/80">Ouça a composição feita para a Harmoniz</p>
          </div>
        </a>
      </section>

      <section className="bg-secondary/40 border-y border-border/60 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          <div>
            <Heart className="h-8 w-8 text-accent" />
            <h3 className="font-display text-3xl md:text-4xl mt-4">Mais do que beleza, um cuidado holístico.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cada orquídea Harmoniz é cultivada com carinho, respeitando o ritmo da natureza e integrando frequências que promovem bem-estar. Cada flor se torna uma verdadeira fonte de energia positiva.
            </p>
          </div>
          <div>
            <Sparkles className="h-8 w-8 text-accent" />
            <h3 className="font-display text-3xl md:text-4xl mt-4">Viva essa experiência.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nossa missão é cultivar harmonia. Ao adquirir uma orquídea nossa, você leva para casa mais do que uma planta: leva um pedacinho de serenidade, paz e propósito.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}