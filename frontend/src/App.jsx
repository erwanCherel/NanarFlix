import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Home from "./pages/Home";
import "./App.css";
import "./components/header.scss";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <main className=" min-h-screen">
      <Home />
      {/* <section>
        <Carrousel />
      </section> */}
      {/* <MovieList movies={movies} /> */}
      {/* <ContactForm /> */}
      <Routes>
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </main>
  );
}

export default App;
