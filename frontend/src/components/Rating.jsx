import { useState } from "react";
import turnipColor from "../assets/icons/turnip-color.svg";
import turnipNoColor from "../assets/icons/turnip-nocolor.svg";

function Rating() {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          className="w-10 flex-shrink-0"
          key={setRating}
          src={index < rating ? turnipColor : turnipNoColor}
          alt="Rating icon"
          onClick={() => handleRatingClick(index)}
        />
      ))}
    </div>
  );
}

export default Rating;
