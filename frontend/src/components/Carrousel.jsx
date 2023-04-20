import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const datas = [
  {
    id: 1,
    image:
      "https://i0.wp.com/www.tvqc.com/wp-content/uploads/2019/04/The-Velocipastor.jpg?fit=1280%2C720&ssl=1",
    title: "The velocipastor",
    overview: `Après le décès de ses parents, un jeune prêtre se rend en Chine. Il hérite d'un pouvoir qui le rend capable de se transformer en dinosaure. Horrifié par cette faculté, l'homme d'église veut à tout prix s'en débarasser. Une prostituée le convainc cependant à utiliser cette force afin de combattre le crime et les ninjas.`,
  },
  {
    id: 2,
    image:
      "https://www.slashfilm.com/img/gallery/robin-williams-was-the-original-howard-the-duck-heres-why-he-left-the-project/intro-1641495222.jpg",
    title: "Howard the Duck",
    overview: `Une jeune chanteuse et un professeur qui veulent aider un canard à regagner sa planète d'origine, doivent affronter un monstre extra-terrestre.`,
  },
  {
    id: 3,
    image:
      "https://images.mubicdn.net/images/film/117266/cache-99068-1573892397/image-w1280.jpg?size=800x",
    title: "Sharknado",
    overview: `Un ouragan s'empare de Los Angeles. Des milliers de requins s'abattent sur la ville et terrorisent la population. Fin, un surfer également propriétaire de bar, accompagné de ses amis Baz et Nova, part à l'aventure afin de sauver son ex-femme April et leur fille Claudia.`,
  },
  {
    id: 4,
    image:
      "https://imgr.cineserie.com/2021/06/b9727357548z.1_20210614082743_000gvviap81r.2-0.jpg?imgeng=/f_jpg/cmpr_0/w_1190/h_669/m_cropbox&ver=1",
    title: "All inclusive",
    overview: `Planté par sa fiancée à l'aéroport, Bruno s'envole seul pour sa semaine de lune de miel dans un club 'All Inclusive' aux Caraïbes. Une mauvaise nouvelle n'arrivant jamais seule, il va devoir partager sa chambre avec Jean-Paul Cisse, éternel célibataire très envahissant. Avec Lulu, retraitée et veuve très open, Caroline, Manon et Sonia, trois copines venues enterrer le divorce de la première et Edouard Laurent, le directeur du club, les deux vacanciers ne sont pas prêts d'oublier leur séjour.`,
  },
  {
    id: 5,
    image:
      "https://album.mediaset.es/eimg/10000/2021/08/16/clipping_efzv4p_1241.jpg",
    title: "Zombeavers",
    overview: `Un groupe d'adolescents, partis pour un week-end de débauche au bord d'une rivière, se retrouve confronté à une horde de castors-zombies affamés. Pour réussir à rester en vie, les jeunes vont devoir affronter ces animaux d'une nouvelle espèce.`,
  },
];

export default function Carrousel() {
  return (
    <Carousel
      autoPlay
      interval={6000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      className="md:max-w-6xl ml-auto mr-auto "
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.title} />
          <div className="overlay">
            <h2 className="text-xl font-bold px-4 py-2">{slide.title}</h2>
            <p className="text-sm p-4 py-2">{slide.overview}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
