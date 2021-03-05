import React from 'react';
import s from './SelectRating.module.scss'
import filledStarSvg from "../../assets/icons/filledStar.svg";
import starEmptySvg from "../../assets/icons/emptyStar.svg";
import halfFillStarSvg from "../../assets/icons/halfFillStar.svg";

const SelectRating = ({ rating, setRating }) => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return <div className={s.selectRatingSize}>
    <span><input type="checkbox" /> Any rating </span>
    {rating.map((elem, index) => { 
      return (
        <>
          <li>
            <input type="checkbox" checked={elem.selected} onChange={() => {
              setRating((rating) => {
                return rating.map((data) => data.rating === elem.rating ? { ...data, selected: !data.selected } : data)
              })
            }} />
            {arr.map(i => {
              let currentStar =
                Math.floor(index + 1) >= i ? filledStarSvg : starEmptySvg;
              if (
                Math.floor(index + 1) === i &&
                index + 1 !== Math.floor(index + 1)
              ) {
                currentStar = halfFillStarSvg;
              }
              return <img key={i} src={currentStar} alt="star" />;
            })}
          </li>
        </>
      );
    })}
  </div>
}

export default SelectRating;