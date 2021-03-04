import React from 'react';
import s from './MovieListInput.module.scss';

const MovieListInput = ({ value, updateSearch, getSearch }) => {
  return (
    <div className={s.movieInput}>
      <form onSubmit={getSearch}>
        <input type="text" value={value} onChange={updateSearch} placeholder="    Enter movie name" />
      </form>
    </div>
  );
};

export default MovieListInput;