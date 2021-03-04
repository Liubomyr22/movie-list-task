import React from "react";
import RatingStars from "../RatingStars";
import s from './InputResult.module.scss'

const InputResult = ({ name, rating, genre }) => {
  return (
    <div className={s.inputResultPosition}>
      <div className={s.nameAndRatingPosition}>
      <h4>{name}</h4>
      <RatingStars rating={rating}  />
      </div>
      <span>{genre}</span>
    </div>
  );
};

export default InputResult;