import Home from "./pages/Home";
import Carrousel from "./components/Carrousel";
import MovieSection from "./components/MovieSection";
import SerieSection from "./components/SerieSection";
import CritiqueSection from "./components/CritiqueSection";

import "./App.css";
import "./components/header.scss";

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
