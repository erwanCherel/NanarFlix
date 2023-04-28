import React, { useState } from "react";

export default function Recherche() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);

  const getMoviebySearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${movieSearch}`
    )
      .then((res) => res.json())
      .then((data) => setMovieSearch(data));
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    getMoviebySearch();
  };

  return (
    <label
      htmlFor=""
      className="header-search"
      style={{ visibility: "hidden" }}
      onSubmit={handleSearchSubmit}
    >
      <div className="search-container ">
        <input
          placeholder="Recherche..."
          type="text"
          className="inputSearch"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="buttonSearch" type="button">
          Rechercher
        </button>
        <div>
          <img
            src={`https://www.themoviedb.org/t/p/w1280${movieSearch.poster_path}`}
            alt=""
          />
        </div>
      </div>
    </label>
  );
}
