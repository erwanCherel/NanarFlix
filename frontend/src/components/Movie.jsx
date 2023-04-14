import PropTypes from "prop-types";

export default function Movie({ title, image }) {
  return (
    <p>
      <img className="m-auto " src={image} alt={title} />
      <figcaption>
        <h2 className="text-black text-center">{title}</h2>
      </figcaption>
    </p>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
