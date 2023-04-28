// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState();

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate&with_genres=${currentGenre}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    getMovie();
  }, [currentPage, currentGenre]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleGenreChange = (e) => {
    setCurrentGenre(e.target.value);
  };

  return (
    <div>
      <h1 className="pt-10 text-center text-white font-bold text-lg">
        CATALOGUE DES FILMS
      </h1>
      <form>
        <label className="ml-14" htmlFor="genre">
          Genre
        </label>
        <select
          className="w-24 ml-3 "
          name="genre"
          id="movieGenre "
          value={currentGenre}
          onChange={handleGenreChange}
        >
          <option value="27">Horreur</option>
          <option value="35">Comedie</option>
          <option value="10749">Romance</option>
          <option value="28">Action</option>
          <option value="18">Drame</option>
        </select>
      </form>

      <section className="sectionMovieList gap-4 flex flex-wrap justify-center m-3 ">
        {movieList.map((movie) =>
          movie.poster_path ? (
            <Movie {...movie} key={`movie-${movie.id}`} />
          ) : null
        )}
      </section>
      <div className="buttonPrevNext">
        <button
          className="buttonPrev"
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Page Précédente
        </button>
        <button
          className="buttonNext"
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Page Suivante
        </button>
      </div>
    </div>
  );
}

// MovieList.propTypes = {
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ),
// };
// MovieList.defaultProps = { movies: [] };
