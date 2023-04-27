import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [currentMovie, setCurrentMovie] = useState();

  const { id } = useParams();

  const getOneMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => setCurrentMovie(data));
  };

  useEffect(() => {
    getOneMovie();
  }, [id]);

  if (!currentMovie) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <figure className="image-container shadow-xl">
        <img
          className="m-auto shadow-xl "
          src={`https://www.themoviedb.org/t/p/w1280${currentMovie.poster_path}`}
          alt={currentMovie.title}
        />
        <div className="text-overlay">{currentMovie.title}</div>
      </figure>
    </div>
  );
}
