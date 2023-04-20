
import Home from "./pages/Home";
import Carrousel from "./components/Carrousel";
import MovieSection from "./components/MovieSection";
import SerieSection from "./components/SerieSection";
import CritiqueSection from "./components/CritiqueSection";

import "./App.css";
import "./components/header.scss";

// const movies = [
//   {
//     title: "Ninja Kids",
//     id: 763529,
//     genre: "Action",
//     overview:
//       "Un groupe de jeunes ninjas entre dans une école de ninja où ils rencontrent un groupe d'enseignants excentriques et apprennent diverses techniques de ninja bizarres. Cependant, au milieu de leur aventure hilarante et de leur jeune amour naissant, des forces obscures menacent leur école. Les enfants ninja doivent apprendre à se débrouiller et à se débrouiller avec leur école.",
//     released: "01-06-1997",
//     image:
//       "https://media.senscritique.com/media/000011056977/300/ninja_kids.jpg",
//   },
//   {
//     title: "Le jugement dernier",
//     id: 72174,
//     genre: "Science-Fiction",
//     overview:
//       "Partout sur Terre, des perturbations géologiques menacent l'humanité. Une recherche désespérée s'engage pour retrouver un écrivain disparu, qui pourrait détenir la clé de ce mystère et prédire les futures catastrophes. Celui-ci est retrouvé mort, en possession d'une baguette antique qui permet à celui qui le détient d'avoir des visions de l'avenir...",
//     released: "13-08-2011",
//     image:
//       "https://www.themoviedb.org/t/p/w500/vdHUOCEDrlYOOLYO0bafRHpaz4h.jpg",
//   },
//   {
//     title: "Twilight",
//     id: 8966,
//     genre: "Fantastique",
//     overview:
//       "Isabella Swan, 17 ans, déménage à Forks, petite ville pluvieuse dans l'État de Washington, pour vivre avec son père. Elle s'attend à ce que sa nouvelle vie soit aussi ennuyeuse que la ville elle-même. Or, au lycée, elle est terriblement intriguée par le comportement d'une étrange fratrie, deux filles et trois garçons. Bella tombe follement amoureuse de l'un d'eux, Edward Cullen. Une relation sensuelle et dangereuse commence alors entre les deux jeunes gens : lorsque Isabella comprend que Edward est un vampire, il est déjà trop tard.",
//     released: "07-01-2009",
//     image:
//       "https://fr.web.img6.acsta.net/medias/nmedia/18/67/60/06/19031254.jpg",
//   },
// ];

function App() {
  return (
    <main className="min-h-screen">
      <Home />
      <Carrousel />

      <div className="md:grid md:grid-cols-2  md:grid-flow-row md:grid-">
        <MovieSection />
        <SerieSection />
      </div>
      <CritiqueSection />
    </main>
  );
}

export default App;
