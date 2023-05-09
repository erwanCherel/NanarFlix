import { parse } from "postcss";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [biography, setBiography] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.info(e);
  };

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleBiography = (e) => {
    setBiography(e.target.value);
  };

  const charRemaining = 1000 - biography.length;

  return (
    <section className="flex  flex-col justify-center items-center text-white gap-5 my-20">
      <h2 className="text-3xl">Inscription</h2>
      <form
        onSubmit={login}
        className="flex flex-col justify-center items-center text-xl gap-5"
      >
        <label
          htmlFor="firstname"
          className="flex flex-col justify-center items-center"
        >
          Prénom :
          <input
            type="text"
            id="firstname"
            className="text-black w-60"
            onChange={handleFirstname}
          />
        </label>

        <label
          htmlFor="lastname"
          className="flex flex-col justify-center items-center"
        >
          Nom :
          <input
            type="text"
            id="lastname"
            className="text-black w-60"
            onChange={handleLastname}
          />
        </label>

        <label
          htmlFor="email"
          className="flex flex-col justify-center items-center"
        >
          Adresse mail :
          <input
            type="email"
            id="email"
            className="text-black w-60"
            onChange={handleEmail}
          />
        </label>

        <label
          htmlFor="password"
          className="flex flex-col justify-center items-center"
        >
          Mot de passe :
          <input
            type="password"
            id="password"
            className="text-black w-60"
            onChange={handlePassword}
          />
        </label>

        <label
          htmlFor="biography"
          className="flex flex-col justify-center items-center"
        >
          à propos de vous ({charRemaining} caractères restants) :
          <input
            type="text"
            id="biography"
            // value={biography}
            className="text-black w-60"
            onChange={handleBiography}
          />
        </label>

        <button
          type="submit"
          className="bg-white text-black rounded-xl w-auto p-2 active:scale-95"
        >
          S'inscrire
        </button>
      </form>
    </section>
  );
}

// `id` int NOT NULL AUTO_INCREMENT,
// `firstname` varchar(100) NOT NULL,
// `lastname` varchar(100) NOT NULL,
// `email` varchar(255) NOT NULL,
// `password` varchar(60) NOT NULL,
// `biography` varchar(500) DEFAULT NULL,
