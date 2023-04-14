import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carrousel() {
  const datas = [
    {
      id: 1,
      image:
        "https://i0.wp.com/www.tvqc.com/wp-content/uploads/2019/04/The-Velocipastor.jpg?fit=1280%2C720&ssl=1",
      title: "The velocipastor",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 2,
      image:
        "https://www.slashfilm.com/img/gallery/robin-williams-was-the-original-howard-the-duck-heres-why-he-left-the-project/intro-1641495222.jpg",
      title: "Howard the Duck",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 3,
      image:
        "https://images.mubicdn.net/images/film/117266/cache-99068-1573892397/image-w1280.jpg?size=800x",
      title: "Sharknado",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 4,
      image:
        "https://imgr.cineserie.com/2021/06/b9727357548z.1_20210614082743_000gvviap81r.2-0.jpg?imgeng=/f_jpg/cmpr_0/w_1190/h_669/m_cropbox&ver=1",
      title: "All inclusive",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 5,
      image:
        "https://album.mediaset.es/eimg/10000/2021/08/16/clipping_efzv4p_1241.jpg",
      title: "Zombeavers",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];
  return (
    <Carousel
      autoPlay
      interval={6000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="absolute top-20 "
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.title} />
        </div>
      ))}
    </Carousel>
  );
}

export default Carrousel;
