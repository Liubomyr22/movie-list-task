import React from 'react';
import s from './SelectRating.module.scss'
import filledStarSvg from "../../assets/icons/filledStar.svg";
import starEmptySvg from "../../assets/icons/emptyStar.svg";
import halfFillStarSvg from "../../assets/icons/halfFillStar.svg";

const SelectRating = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
  return <div className={s.selectRatingSize}>
       <span><input type="checkbox" /> Any rating </span>
       {arr.map(elem => {
            return (
              <>
              <li>
                <input type="checkbox" />
                {arr.map(i => {
                  let currentStar =
                    Math.floor(elem) >= i ? filledStarSvg : starEmptySvg;
                  if (
                    Math.floor(elem) === i &&
                    +elem !== Math.floor(elem)
                  ) {
                    currentStar = halfFillStarSvg;
                  }
                  return<img key={i} src={currentStar} slt="" />;
                })}
                </li>
              </>
            );
          })}
  </div>
}

export default SelectRating;