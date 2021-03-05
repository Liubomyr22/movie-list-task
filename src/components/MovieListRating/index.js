import React from 'react';
import arrow from '../../assets/icons/arrow.svg'
import SelectRating from '../SelectRating';
import s from './MovieListRating.module.scss'


const MovieListRating = ({ rating,setRating}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={s.selectRating} >
      <div
        className={s.titleAndArrow}
        onClick={() => {
          setOpen(bool => !bool);
        }}
      >
        Rating <img src={arrow} alt="arrow"/>
      </div>
      <>
      {open && <div onClick={() => setOpen(bool=> !bool)} className={s.closingArea} />}
     {open && <SelectRating rating={rating} setRating={setRating}/>}
     </>
    </div>
  );
};

export default MovieListRating;