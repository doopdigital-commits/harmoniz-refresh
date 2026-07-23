import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/harmoniz/hero.jpg";
import qualidade from "@/assets/harmoniz/qualidade.jpeg";
import sustentabilidade from "@/assets/harmoniz/sustentabilidade.jpg";
import satisfacao from "@/assets/harmoniz/satisfacao.jpg";
import diversidade from "@/assets/harmoniz/diversidade.jpg";
import distribuicao from "@/assets/harmoniz/distribuicao.jpg";
import denphalaen from "@/assets/harmoniz/denphalaen.jpeg";
import cypripedium from "@/assets/harmoniz/cypripedium.jpg";
import zygopetalum from "@/assets/harmoniz/zygopetalum.jpeg";
import cymbidium from "@/assets/harmoniz/cymbidium.jpg";
import oncidium from "@/assets/harmoniz/oncidium.jpeg";
import cattleya from "@/assets/harmoniz/cattleya.jpeg";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { number: "Todo Brasil", label: "Atendemos clientes em todo o país através do Veiling Holambra" },
  { number: "30 mil m²", label: "Área total dedicada à produção de orquídeas" },
  { number: "200 mil", label: "Capacidade de produção anual em nossa estufa" },
  { number: "~10 gêneros", label: "Espécies cuidadosamente selecionadas para você" },
];

const structure = [
  { title: "Berçário", desc: "Local onde as mudas iniciam seu crescimento após a saída do laboratório." },
  { title: "Estufa", desc: "Espaço para crescimento, equipado para proporcionar o melhor ambiente para cada espécie." },
  { title: "Packing House", desc: "Setor responsável por preparar e embalar com cuidado cada orquídea cultivada." },
];

const values = [
  { img: qualidade, title: "Qualidade", desc: "Embalagens elaboradas para garantir que as flores cheguem até o cliente da mesma maneira que saíram da produção." },
  { img: sustentabilidade, title: "Sustentabilidade", desc: "Uso de produtos biológicos para controle da produção visando à preservação da natureza." },
  { img: satisfacao, title: "Satisfação", desc: "Equipe comprometida para tirar dúvidas e encontrar a melhor maneira de atender às necessidades de clientes." },
  { img: diversidade, title: "Diversidade", desc: "Parceria com fornecedores de orquídeas da Ásia para importar novas espécies e ampliar o portfólio." },
  { img: distribuicao, title: "Distribuição", desc: "Nossas orquídeas são comercializadas exclusivamente pelo Veiling Holambra, referência nacional." },
];

const species = [
  { img: denphalaen, name: "Denphalaen" },
  { img: cypripedium, name: "Cypripedium" },
  { img: zygopetalum, name: "Zygopetalum" },
  { img: cymbidium, name: "Cymbidium" },
  { img: oncidium, name: "Oncidium Vulcana" },
  { img: cattleya, name: "Cattleya" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-36 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 relative z-10 rise-in">
          <p className="eyebrow mb-8">Harmoniz Orquídeas</p>
          <h1 className="font-display font-light text-5xl md:text-7xl leading-[1.02] text-foreground text-balance">
            Orquídeas com <em className="italic font-normal text-accent">alma</em>,<br />
            <span className="text-foreground/85">cultivadas com </span>
            <em className="italic font-normal gilded">amor.</em>
          </h1>
          <div className="hairline w-24 mt-10" />
          <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
            Em 30 mil m² no bairro do Itapeti, em Mogi das Cruzes, produzimos quase 10 gêneros de orquídeas com propósito, delicadeza e distribuição para todo o Brasil.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/galeria" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground pl-7 pr-2 py-2 rounded-full text-sm tracking-[0.05em] hover:bg-accent transition-all duration-500 shadow-[var(--shadow-elegant)]">
              Conheça nossas espécies
              <span className="grid place-items-center h-10 w-10 rounded-full bg-primary-foreground/15 group-hover:bg-primary-foreground/25 group-hover:translate-x-0.5 transition-all duration-500">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/sobre" className="inline-flex items-center gap-2 border border-border/80 px-7 py-3.5 rounded-full text-sm tracking-[0.05em] hover:bg-secondary/60 hover:border-accent/40 transition-all duration-500">
              Sobre a Harmoniz
            </Link>
          </div>
        </div>
        <div className="md:col-span-6 relative veil-in">
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-accent/20 via-primary/5 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] noise">
            <img src={hero} alt="Estufa de orquídeas Harmoniz" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary-foreground/10 rounded-[2rem]" />
          </div>
          <div className="hidden md:flex items-center gap-4 absolute -bottom-8 -left-8 bg-card/95 backdrop-blur border border-border/60 rounded-2xl px-6 py-5 shadow-[var(--shadow-elegant)] max-w-[260px]">
            <div className="h-10 w-px bg-accent/50" />
            <div>
              <p className="font-display italic text-3xl text-primary leading-none">200 mil</p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-2">Orquídeas / ano</p>
            </div>
          </div>
          <div className="hidden md:block absolute -top-4 -right-4 bg-background/80 backdrop-blur border border-border/60 rounded-full px-5 py-2 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            Desde 2015
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute -top-32 -right-32 w-[620px] h-[620px] rounded-full blur-3xl opacity-50 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div aria-hidden className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border/40 bg-gradient-to-b from-secondary/30 to-secondary/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:divide-x divide-border/50">
        {stats.map((s, i) => (
          <div key={s.number} className={i > 0 ? "md:pl-10" : ""}>
            <p className="font-display italic font-light text-3xl md:text-4xl text-primary leading-none">{s.number}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[220px]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="eyebrow mb-8">A Harmoniz</p>
        <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-balance">
          Produção de orquídeas em <em className="italic text-accent">Mogi das Cruzes</em>
        </h2>
      </div>
      <div className="md:col-span-7 space-y-6 text-muted-foreground leading-[1.8] text-lg font-light">
        <p>
          A Harmoniz Orquídeas é uma empresa produtora de flores especializada em orquídeas, instalada no bairro do Itapeti, em Mogi das Cruzes (SP). Possui ampla capacidade de produção para atacado, com quase 10 gêneros selecionados, cultivadas com mudas de origem idônea em estufas equipadas e insumos de alta qualidade.
        </p>
        <p>
          Tudo para garantir belas flores, com o propósito de proporcionar harmonia, felicidade e paz para os ambientes dos clientes em todo o território nacional. Porém, mais que apenas produtores, nossa equipe cultiva um gigante apreço pelas flores — uma relação que começou muito antes do plantio da primeira muda.
        </p>
        <div className="pt-8 grid sm:grid-cols-3 gap-6">
          {structure.map((s, i) => (
            <div key={s.title} className="relative pl-5 py-1 border-l border-accent/40 hover:border-accent transition-colors group">
              <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent/70 mb-2">0{i + 1}</p>
              <p className="font-display text-xl text-foreground">{s.title}</p>
              <p className="text-sm mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="valores" className="relative bg-primary text-primary-foreground py-28 md:py-36 overflow-hidden noise">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[oklch(0.32_0.12_350)]" />
      <div aria-hidden className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-8 text-accent">Nossos pilares</p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-balance">
            A Harmoniz Orquídeas <em className="italic text-accent">se preocupa</em> com…
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <article key={v.title} className={`group relative overflow-hidden rounded-3xl bg-card text-card-foreground border border-primary-foreground/5 shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-700 ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}>
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-primary-foreground/90 bg-primary/60 backdrop-blur px-3 py-1.5 rounded-full">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display italic font-normal text-2xl text-primary">{v.title}</h3>
                <div className="hairline w-10 my-3" />
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Species() {
  return (
    <section id="especies" className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
      <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
        <div className="md:col-span-7">
          <p className="eyebrow mb-8">Espécies</p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-balance">
            Quase 10 <em className="italic text-accent">gêneros</em> de orquídeas para o seu evento ou ambiente.
          </h2>
        </div>
        <p className="md:col-span-5 text-muted-foreground text-lg leading-[1.8] font-light">
          Diferentes tamanhos de vasos, cores e formas — cada gênero cultivado com o mesmo rigor e delicadeza que definem a Harmoniz.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {species.map((s, i) => (
          <figure key={s.name} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-[var(--shadow-soft)]">
            <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary-foreground/10 rounded-3xl" />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/70 mb-1">Gênero</p>
                <p className="font-display italic font-normal text-2xl">{s.name}</p>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-primary-foreground/60">0{i + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Link to="/galeria" className="group inline-flex items-center gap-3 border border-border/80 px-7 py-3.5 rounded-full text-sm tracking-[0.05em] hover:bg-secondary/60 hover:border-accent/40 transition-all duration-500">
          Ver galeria completa
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
        </Link>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Stats />
      <Sobre />
      <Values />
      <Species />
      <SiteFooter />
    </div>
  );
}
