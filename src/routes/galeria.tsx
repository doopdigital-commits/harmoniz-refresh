import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import banner from "@/assets/harmoniz/galeria-banner.jpg";
import s1 from "@/assets/harmoniz/g-sharry1.jpg";
import s2 from "@/assets/harmoniz/g-sharry2.jpg";
import s3 from "@/assets/harmoniz/g-sharry3.jpg";
import s4 from "@/assets/harmoniz/g-sharry4.jpg";
import oncid from "@/assets/harmoniz/g-oncidium.jpg";
import cypripedium from "@/assets/harmoniz/cypripedium.jpg";
import cymb1 from "@/assets/harmoniz/g-cymbidium1.jpg";
import cymb2 from "@/assets/harmoniz/cymbidium.jpg";
import oncidVulcana from "@/assets/harmoniz/oncidium.jpeg";
import cattleya from "@/assets/harmoniz/cattleya.jpeg";
import cymbPend from "@/assets/harmoniz/g-cymbidium-pend.jpeg";
import zygo from "@/assets/harmoniz/zygopetalum.jpeg";
import denph from "@/assets/harmoniz/denphalaen.jpeg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Harmoniz Orquídeas" },
      { name: "description", content: "Explore nossa galeria de orquídeas: Sharry Baby, Oncidium, Cypripedium, Cymbidium, Cattleya, Zygopetalum, Denphalaen e mais." },
      { property: "og:title", content: "Galeria de orquídeas Harmoniz" },
      { property: "og:description", content: "Uma coleção visual das nossas orquídeas cultivadas com amor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GaleriaPage,
});

const photos = [
  { img: s1, name: "Sharry Baby" },
  { img: s2, name: "Sharry Baby" },
  { img: s3, name: "Sharry Baby" },
  { img: s4, name: "Sharry Baby" },
  { img: oncid, name: "Oncidium" },
  { img: cypripedium, name: "Cypripedium" },
  { img: cymb1, name: "Cymbidium" },
  { img: cymb2, name: "Cymbidium" },
  { img: oncidVulcana, name: "Oncidium Vulcana" },
  { img: cattleya, name: "Cattleya" },
  { img: cymbPend, name: "Cymbidium Pendente" },
  { img: zygo, name: "Zygopetalum" },
  { img: denph, name: "Denphalaen" },
];

function GaleriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative">
        <div className="relative h-[420px] md:h-[520px] overflow-hidden">
          <img src={banner} alt="Galeria Harmoniz" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-primary/10" />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
              <div className="max-w-xl">
                <p className="eyebrow mb-6 text-primary-foreground [&::before]:bg-primary-foreground">Galeria</p>
                <h1 className="font-display font-light text-4xl md:text-6xl leading-[1.05] text-primary-foreground text-balance">Nossa galeria de flores.</h1>
                <p className="mt-6 text-base md:text-lg text-primary-foreground/85 leading-relaxed font-light">
                  Uma coleção viva dos gêneros cultivados na Harmoniz — clique nas imagens para admirar cada detalhe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
          {photos.map((p, i) => (
            <figure key={i} className="mb-4 md:mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl">
              <img src={p.img} alt={p.name} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {p.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}