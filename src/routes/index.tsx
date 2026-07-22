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
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 relative z-10">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">Harmoniz Orquídeas</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-foreground">
            Orquídeas com <em className="text-accent not-italic">alma</em>,
            <br /> cultivadas com amor.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Em 30 mil m² no bairro do Itapeti, em Mogi das Cruzes, produzimos quase 10 gêneros de orquídeas com propósito, delicadeza e distribuição para todo o Brasil.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/galeria" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm tracking-wide hover:bg-primary/90 transition-colors">
              Conheça nossas espécies <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/sobre" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-full text-sm tracking-wide hover:bg-secondary transition-colors">
              Sobre a Harmoniz
            </Link>
          </div>
        </div>
        <div className="md:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={hero} alt="Estufa de orquídeas Harmoniz" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10" />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-lg max-w-[220px]">
            <p className="font-display text-2xl text-primary">200 mil</p>
            <p className="text-xs text-muted-foreground mt-1">Orquídeas produzidas anualmente</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-hero)" }} />
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.number}>
            <p className="font-display text-3xl md:text-4xl text-primary">{s.number}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">A Harmoniz</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">Produção de orquídeas em Mogi das Cruzes</h2>
      </div>
      <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          A Harmoniz Orquídeas é uma empresa produtora de flores especializada em orquídeas, instalada no bairro do Itapeti, em Mogi das Cruzes (SP). Possui ampla capacidade de produção para atacado, com quase 10 gêneros selecionados, cultivadas com mudas de origem idônea em estufas equipadas e insumos de alta qualidade.
        </p>
        <p>
          Tudo para garantir belas flores, com o propósito de proporcionar harmonia, felicidade e paz para os ambientes dos clientes em todo o território nacional. Porém, mais que apenas produtores, nossa equipe cultiva um gigante apreço pelas flores — uma relação que começou muito antes do plantio da primeira muda.
        </p>
        <div className="pt-4 grid sm:grid-cols-3 gap-6">
          {structure.map((s) => (
            <div key={s.title} className="border-l-2 border-accent pl-4">
              <p className="font-display text-xl text-foreground">{s.title}</p>
              <p className="text-sm mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="valores" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">Nossos pilares</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">A Harmoniz Orquídeas se preocupa com…</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <article key={v.title} className={`group relative overflow-hidden rounded-2xl bg-card text-card-foreground ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}>
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
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
    <section id="especies" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
        <div className="md:col-span-7">
          <p className="uppercase tracking-[0.3em] text-xs text-accent mb-6">Espécies</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Quase 10 gêneros de orquídeas para o seu evento ou ambiente.</h2>
        </div>
        <p className="md:col-span-5 text-muted-foreground text-lg">
          Diferentes tamanhos de vasos, cores e formas — cada gênero cultivado com o mesmo rigor e delicadeza que definem a Harmoniz.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {species.map((s) => (
          <figure key={s.name} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
            <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 right-5 text-white font-display text-2xl">
              {s.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link to="/galeria" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-full text-sm hover:bg-secondary transition-colors">
          Ver galeria completa <ArrowRight className="h-4 w-4" />
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
