import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/harmoniz/hero.jpg";
import banner from "@/assets/harmoniz/sobre-banner.png";
import diversidade from "@/assets/harmoniz/diversidade.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Harmoniz Orquídeas" },
      { name: "description", content: "Desde 1968 no bairro Itapeti, em Mogi das Cruzes, a Harmoniz cultiva flores. Uma história de família, dedicação e amor pelas orquídeas há mais de 50 anos." },
      { property: "og:title", content: "Sobre a Harmoniz Orquídeas" },
      { property: "og:description", content: "Uma história de família, tradição japonesa e paixão por orquídeas há mais de 50 anos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

const timeline = [
  { year: "1968", title: "O começo", desc: "Produção de gladíolos no bairro Itapeti, em Mogi das Cruzes." },
  { year: "Anos 70–80", title: "Expansão", desc: "Rosas, crisântemos, poinsétias, hortênsias e gérberas se somam ao portfólio." },
  { year: "Anos 90", title: "Nascem as orquídeas", desc: "A dedicação exclusiva à produção de orquídeas marca uma nova era." },
  { year: "Hoje", title: "16 colaboradores", desc: "Quase 10 gêneros em 30 mil m² de área produtiva, com distribuição nacional." },
];

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">Nossa história</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">Uma paixão que atravessou o oceano e as gerações.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Do Japão para Mogi das Cruzes, do cultivo dos avós à floração de hoje — a Harmoniz é, antes de tudo, uma história de família.
          </p>
        </div>
        <div className="md:col-span-6">
          <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={hero} alt="Estufa Harmoniz" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Em 1968, a empresa iniciou a produção das flores de corte gladíolos no mesmo local onde está sediada até os dias atuais, no bairro Itapeti, em Mogi das Cruzes/SP.
        </p>
        <p>
          Tempos depois, passou a produzir também rosas e crisântemos, além de vasos, como poinsétias, hortênsias e gérberas, até que, na década de 1990, passou a se dedicar na produção de orquídeas.
        </p>
        <p>
          Porém, a relação dos proprietários da Harmoniz Orquídeas com as flores começou bem antes de todos esses acontecimentos. O encanto com essas belezas criadas pela natureza sempre fez parte da família, que já trabalhava com o cultivo desde a geração dos avós, no Japão.
        </p>
        <p>
          A paixão pelas plantas atravessou o continente e as gerações, e se transformou na vocação dos donos, que, há mais de 50 anos, se dedicam à produção e ao cuidado de flores de qualidade.
        </p>
        <p>
          Atualmente, trabalha com quase 10 gêneros diferentes de orquídeas, que são produzidas para atacado em uma área de 30 mil m² por 16 colaboradores diretos.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative aspect-[1024/379] rounded-3xl overflow-hidden">
          <img src={banner} alt="Harmoniz Orquídeas" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">O nome</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Harmonia + felicidade.</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            <span className="text-foreground font-medium">Harmoniz</span> é uma junção das palavras “harmonia” e “feliz”, que fazem parte dos nossos propósitos de proporcionar alegria e paz para os clientes que adquirem nossas flores para suas casas ou seus ambientes de trabalho.
          </p>
          <p>
            Para complementar esse lindo nome, foi utilizada a libélula na logomarca, que representa a transformação e está relacionada à cultura japonesa. Ela é o emblema nacional do Japão e simboliza o renascimento.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">Linha do tempo</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">Mais de meio século florescendo.</h2>
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {timeline.map((t) => (
              <div key={t.year} className="border-t border-accent pt-6">
                <p className="font-display text-3xl text-primary">{t.year}</p>
                <p className="mt-3 font-medium text-foreground">{t.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img src={diversidade} alt="Cultivo Harmoniz" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">Continue</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Conheça o método Sonevida.</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Um método exclusivo que une ciência moderna, sabedoria ancestral e frequências sonoras para nutrir cada orquídea.
          </p>
          <Link to="/sonevida" className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm hover:bg-primary/90 transition-colors">
            Descubra o Sonevida <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}