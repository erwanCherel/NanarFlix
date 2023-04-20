import PropTypes from "prop-types";
import Movie from "@components/Movie";

export default function MovieList({ movies }) {
  return (
    <section className="mx-auto gap-4 ">
      {movies.map((movie) => (
        <Movie {...movie} key={`movie-${movie.id}`} />
      ))}
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
MovieList.defaultProps = { movies: [] };
