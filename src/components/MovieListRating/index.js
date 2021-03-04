import React from 'react';
import arrow from '../../assets/icons/arrow.svg'
import SelectRating from '../SelectRating';
import s from './MovieListRating.module.scss'


const MovieListRating = ({ list }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={s.selectRating} >
      <div
        className={s.titleAndArrow}
        onClick={() => {
          setOpen(bool => !bool);
        }}
      >
        Rating <img src={arrow} />
      </div>
      <>{open && <SelectRating />}</>
    </div>
  );
};

export default MovieListRating;