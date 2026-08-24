import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/harmoniz/hero.jpg";
import banner from "@/assets/harmoniz/sobre-banner.png";
import diversidade from "@/assets/harmoniz/diversidade.jpg";

const SITE_URL = "https://harmoniz.com.br";
const PAGE_URL = `${SITE_URL}/sobre`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Sobre", item: PAGE_URL },
  ],
};

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Harmoniz Orquídeas" },
      { name: "description", content: "Desde 1968 no bairro Itapeti, em Mogi das Cruzes, a Harmoniz cultiva flores. Uma história de família, dedicação e amor pelas orquídeas há mais de 50 anos." },
      { property: "og:title", content: "Sobre a Harmoniz Orquídeas" },
      { property: "og:description", content: "Uma história de família, tradição japonesa e paixão por orquídeas há mais de 50 anos." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: SobrePage,
});

const timelineTones = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-foreground text-background",
  "bg-secondary text-secondary-foreground",
];

const timeline = [
  { year: "1968", title: "O começo", desc: "Produção de gladíolos no bairro Itapeti, em Mogi das Cruzes." },
  { year: "Anos 70–80", title: "Expansão", desc: "Rosas, crisântemos, poinsétias, hortênsias e gérberas se somam ao portfólio." },
  { year: "Anos 90", title: "Nascem as orquídeas", desc: "A dedicação exclusiva à produção de orquídeas marca uma nova era." },
  { year: "Hoje", title: "16 colaboradores", desc: "Quase 10 gêneros em 30 mil m² de área produtiva, com distribuição nacional." },
];

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteNav />

      <section className="relative">
        <div className="relative h-[420px] md:h-[520px] overflow-hidden">
          <img src={hero} alt="Estufa Harmoniz" className="absolute inset-0 w-full h-full object-cover object-[50%_28%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-primary/10" />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
              <div className="max-w-xl">
                <p className="eyebrow mb-6 text-primary-foreground [&::before]:bg-primary-foreground">Nossa história</p>
                <h1 className="font-display font-light text-4xl md:text-6xl leading-[1.05] text-primary-foreground text-balance">Uma paixão que atravessou o oceano e as gerações.</h1>
                <p className="mt-6 text-base md:text-lg text-primary-foreground/85 leading-relaxed font-light">
                  Do Japão para Mogi das Cruzes, do cultivo dos avós à floração de hoje — a Harmoniz é, antes de tudo, uma história de família.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-20 space-y-7 text-lg text-muted-foreground leading-relaxed">
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
          <img src={banner} alt="Harmoniz Orquídeas" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-6">O nome</p>
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

      <section className="bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28">
          <p className="eyebrow mb-6">Linha do tempo</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">Mais de meio século florescendo.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {timeline.map((t, i) => (
            <div key={t.year} className={`${timelineTones[i % timelineTones.length]} px-6 md:px-8 py-10 md:py-12`}>
              <p className="font-display italic font-light text-3xl md:text-4xl leading-none">{t.year}</p>
              <p className="mt-4 font-medium">{t.title}</p>
              <p className="mt-2 text-[13px] opacity-80 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img src={diversidade} alt="Cultivo Harmoniz" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <p className="eyebrow mb-6">Continue</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Conheça o método Sonevida.</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Um método exclusivo que une ciência moderna, sabedoria ancestral e frequências sonoras para nutrir cada orquídea.
          </p>
          <Link to="/sonevida" className="group mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground pl-7 pr-2 py-2 rounded-full text-sm tracking-[0.05em] hover:bg-accent transition-all duration-500 shadow-[var(--shadow-soft)]">
            Descubra o Sonevida
            <span className="grid place-items-center h-10 w-10 rounded-full bg-primary-foreground/15 group-hover:bg-primary-foreground/25 group-hover:translate-x-0.5 transition-all duration-500">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}