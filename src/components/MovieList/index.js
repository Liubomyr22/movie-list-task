import React from 'react';
import InputResult from '../InputResult';
import MovieListGenre from '../MovieListGenre';
import MovieListInput from '../MovieListInput';
import MovieListRating from '../MovieListRating';
import RatingStars from '../RatingStars';
import s from './MovieList.module.scss'


// const MovieList = () => {
//     return <div className={s.wrapper}>
//         <MovieListInput />
//         <MovieListRating />
//         <MovieListGenre />
//     </div>
// }

// export default MovieList;


const MovieList = () => {
  const [list, setList] = React.useState([
    { id: 1,title: "The Matrix", rating: "7.5", category: "Action" },
    { id: 2,title: "Focus", rating: "6.9", category: "Comedy" },
    { id: 3,title: "The Lazarus Effect", rating: "6.4", category: "Thriller" },
    { id: 4,title: "Everly", rating: "5.0", category: "Action" },
    { id: 5,title: "Maps to the Stars", rating: "7.5", category: "Drama" }
  ]);
  const [x, setX] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState('');
  
  React.useEffect(() => {
  if(search.length > 0) {
    setX(true)
  } else if(search.length == 0) {
    setX(false)
  }
},[search])

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  console.log(search);

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  
  return (
    
    <>
    <div className={s.wrapper}>
      <MovieListInput
        value={search}
        updateSearch={updateSearch}
        getSearch={getSearch}
      />
      <MovieListRating list={list} setList={setList} />
      <MovieListGenre list={list} setList={setList} />
    </div>
    {x && list.filter((element) => element.title.includes(search)).map(element => {
      return <InputResult key={element.title} name={element.title} genre={element.category} rating={element.rating} list={list} />;
    })}
    </>
  );
};

export default MovieList;