import { useEffect, useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import SignIn from "@pages/SignIn";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Annuaire from "./pages/Annuaire";
import ContactPage from "./pages/ContactPage";
import DefaultPage from "./pages/DefaultPage";

import Profil from "./pages/Profil";
import Home from "./pages/Home";

import CommunityPage from "./pages/CommunityPage";
import Login from "./pages/Login";

function App() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    console.info(userId);
    const id = parseInt(localStorage.getItem("id"), 10);
    if (!Number.isNaN(id)) {
      setUserId(id);
    }
  }, []);

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header userId={userId} />
      <Routes className="routes">
        <Route path="/" element={<Home />} />
        <Route path="/annuaire" element={<Annuaire />} />
        <Route path="/communaute" element={<CommunityPage />} />
        {!userId && (
          <Route
            path="/login"
            element={<Login userId={userId} setUserId={setUserId} />}
          />
        )}
        {!userId && (
          <Route
            path="/signin"
            element={<SignIn userId={userId} setUserId={setUserId} />}
          />
        )}
        {userId && <Route path="/profil/:id" element={<Profil />} />}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/*" element={<DefaultPage />} />
        <Route path="/tv/:id" element={<TvDetails />} />
      </Routes>
      <Footer userId={userId} />
    </main>
  );
}

export default App;
