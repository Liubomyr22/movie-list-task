import React from "react";
import s from './RatingStars.module.scss'
import filledStarSvg from "../../assets/icons/filledStar.svg";
import starEmptySvg from "../../assets/icons/emptyStar.svg";
import halfFillStarSvg from "../../assets/icons/halfFillStar.svg";

const RatingStars = ({ rating }) => {
  const starsDefaultArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
        <div className={s.starsToOneLine}>
          <>
            {/* <input type="checkbox" /> */}
            {starsDefaultArray.map(i => {
              let currentStar =
                Math.floor(rating) > i ? filledStarSvg : starEmptySvg;
              if (
                Math.floor(rating) === i &&
                +rating !== Math.floor(rating)
              ) {
                currentStar = halfFillStarSvg;
              }
              return <img key={i} src={currentStar} slt="" />;
            })}
          </>
        </div>
    </>
  );
};

export default RatingStars;