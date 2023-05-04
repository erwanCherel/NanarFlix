import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import badge from "../assets/badge-default.svg";
import profilePic from "../assets/icons/account-icon.svg";
import Movie from "./Movie";

export default function Profile() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const { id } = useParams();

  // get movies to fill "avis" and "suggestion" sections
  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${id}&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  // data to load a profile
  const getOneUser = () => {
    if (parseInt(id, 10) === parseInt(localStorage.getItem("id"), 10)) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
        .then((resp) => resp.json())
        .then((data) => setCurrentUser(data))
        .catch((err) => {
          console.error(err);
          navigate("/");
        });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getOneUser();
    getMovie();
  }, [id]);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <section className="md:mx-auto">
      <div className="profile-container">
        <img src={profilePic} alt="profile pic" className="profile-pic" />
        <h2 className="profile-name">
          {currentUser.firstname} {currentUser.lastname}
        </h2>

        <div className="profile-biography">
          <h4>Biographie</h4>
          <div>
            <p>{currentUser.biography}</p>
          </div>
        </div>

        <div className="profile-avis">
          <h4>Avis</h4>
          <div className="avis">
            {movieList.map((movie) =>
              movie.poster_path ? (
                <Movie {...movie} key={`movie-${movie.id}`} />
              ) : null
            )}
          </div>
        </div>

        <div className="profile-badges">
          <h4>Badges</h4>
          <div className="badges">
            <img src={badge} alt="badge" />
            <img src={badge} alt="badge" />
            <img src={badge} alt="badge" />
            <img src={badge} alt="badge" />
            <img src={badge} alt="badge" />
          </div>
        </div>

        <div className="profile-suggestions">
          <h4>Suggestions</h4>
          <div className="suggestions">
            {movieList.map((movie) =>
              movie.poster_path ? (
                <Movie {...movie} key={`movie-${movie.id}`} />
              ) : null
            )}
          </div>
        </div>

        <div className="profile-settings">
          <h4>Gérer mon compte</h4>
          <p>Gérer mon mot de passe</p>
          <p>Gérer mon pseudo</p>
          <p>Gérer mon adresse mail</p>
        </div>
      </div>
    </section>
  );
}

Profile.propTypes = {
  userId: PropTypes.number,
};

Profile.defaultProps = { userId: undefined };
