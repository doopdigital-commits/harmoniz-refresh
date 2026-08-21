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
    <section id="top" className="relative">
      <div className="relative h-[560px] md:h-[720px] overflow-hidden">
        <img src={hero} alt="Estufa de orquídeas Harmoniz" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        <span className="hidden md:inline-flex absolute top-8 right-8 lg:right-10 bg-background/90 backdrop-blur border border-border/60 rounded-full px-5 py-2 text-[11px] tracking-[0.25em] uppercase text-foreground/80 shadow-[var(--shadow-soft)]">
          Desde 2015
        </span>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
            <div className="max-w-xl rise-in">
              <p className="eyebrow mb-6 text-primary-foreground [&::before]:bg-primary-foreground">Harmoniz Orquídeas</p>
              <h1 className="font-display font-light text-4xl md:text-6xl leading-[1.06] text-primary-foreground text-balance">
                Orquídeas com <em className="italic font-normal">alma</em>, cultivadas com <em className="italic font-normal">amor.</em>
              </h1>
              <p className="mt-6 text-base md:text-lg text-primary-foreground/85 max-w-md leading-relaxed font-light">
                Em 30 mil m² no bairro do Itapeti, em Mogi das Cruzes, produzimos quase 10 gêneros de orquídeas com propósito, delicadeza e distribuição para todo o Brasil.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/galeria" className="group inline-flex items-center gap-3 bg-background text-primary pl-7 pr-2 py-2 rounded-full text-sm tracking-[0.05em] hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-[var(--shadow-elegant)]">
                  Conheça nossas espécies
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-primary/10 group-hover:bg-accent-foreground/15 group-hover:translate-x-0.5 transition-all duration-500">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link to="/sobre" className="inline-flex items-center gap-2 border border-primary-foreground/50 text-primary-foreground px-7 py-3.5 rounded-full text-sm tracking-[0.05em] hover:bg-primary-foreground/10 transition-all duration-500">
                  Sobre a Harmoniz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const tones = [
    "bg-primary text-primary-foreground",
    "bg-accent text-accent-foreground",
    "bg-foreground text-background",
    "bg-secondary text-secondary-foreground",
  ];
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.number} className={`${tones[i % tones.length]} px-6 md:px-8 py-10 md:py-12 flex flex-col justify-center`}>
          <p className="font-display italic font-light text-3xl md:text-4xl leading-none">{s.number}</p>
          <p className="mt-4 text-[13px] opacity-80 leading-relaxed max-w-[200px]">{s.label}</p>
        </div>
      ))}
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="eyebrow mb-8">A Harmoniz</p>
        <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-balance">
          Bem-vindo à <em className="italic text-accent">Harmoniz Orquídeas</em>
        </h2>
      </div>
      <div className="md:col-span-7 space-y-6 text-muted-foreground leading-[1.8] text-lg font-light">
        <p>
          A Harmoniz Orquídeas é uma empresa produtora de flores especializada em orquídeas, instalada no bairro do Itapeti, em Mogi das Cruzes (SP). Possui ampla capacidade de produção para atacado, com quase 10 gêneros selecionados, cultivadas com mudas de origem idônea em estufas equipadas e insumos de alta qualidade.
        </p>
        <p>
          Tudo para garantir belas flores, com o propósito de proporcionar harmonia, felicidade e paz para os ambientes dos clientes em todo o território nacional. Porém, mais que apenas produtores, nossa equipe cultiva um gigante apreço pelas flores — uma relação que começou muito antes do plantio da primeira muda.
        </p>
        <Link to="/sobre" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground pl-7 pr-2 py-2 rounded-full text-sm tracking-[0.05em] hover:bg-accent transition-all duration-500 shadow-[var(--shadow-soft)]">
          Conheça nossa história
          <span className="grid place-items-center h-10 w-10 rounded-full bg-primary-foreground/15 group-hover:bg-primary-foreground/25 group-hover:translate-x-0.5 transition-all duration-500">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
        <div className="pt-10 mt-4 border-t border-border/60 grid sm:grid-cols-3 gap-6">
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

const valueButtonTones = [
  "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
  "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground",
  "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
];

function Values() {
  return (
    <section id="valores" className="bg-secondary/30 py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-8">Nossos pilares</p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-balance">
            A Harmoniz Orquídeas <em className="italic text-accent">se preocupa</em> com…
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <article key={v.title} className="group flex flex-col overflow-hidden rounded-2xl bg-card text-card-foreground border border-border/60 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms] ease-out" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-primary-foreground/90 bg-primary/70 backdrop-blur px-3 py-1.5 rounded-full">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display italic font-normal text-2xl text-primary">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{v.desc}</p>
                <Link
                  to="/sobre"
                  className={`mt-6 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-[0.1em] uppercase transition-colors duration-300 ${valueButtonTones[i % valueButtonTones.length]}`}
                >
                  Saiba mais
                </Link>
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
    <section id="especies" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="eyebrow mb-8 justify-center">Espécies</p>
        <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] text-balance">
          Quase 10 <em className="italic text-accent">gêneros</em> de orquídeas
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-[1.8] font-light">
          Diferentes tamanhos de vasos, cores e formas — cada gênero cultivado com o mesmo rigor e delicadeza que definem a Harmoniz.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 md:gap-x-6">
        {species.map((s) => (
          <figure key={s.name} className="group text-center">
            <div className="relative aspect-square max-w-[168px] mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-[var(--shadow-soft)]">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            <figcaption className="mt-5 font-display italic font-normal text-lg text-foreground">{s.name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Link to="/galeria" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm tracking-[0.05em] hover:bg-accent transition-all duration-500 shadow-[var(--shadow-soft)]">
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
