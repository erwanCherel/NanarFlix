import "./App.css";
import "./components/header.scss";
import "./components/footer.scss";
import "./components/profile.scss";
import { Routes, Route } from "react-router-dom";

import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Annuaire from "./pages/Annuaire";
import ContactPage from "./pages/ContactPage";
import Communaute from "./pages/Communaute";
import Profil from "./pages/Profil";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annuaire" element={<Annuaire />} />
        <Route path="/communaute" element={<Communaute />} />
        <Route path="/profil/" element={<Login />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
