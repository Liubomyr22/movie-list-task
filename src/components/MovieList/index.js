import React from "react";
import InputResult from "../InputResult";
import MovieListGenre from "../MovieListGenre";
import MovieListInput from "../MovieListInput";
import MovieListRating from "../MovieListRating";
import s from "./MovieList.module.scss";
const entryData = [
  {
    id: 1,
    title: "The Matrix",
    rating: "7.5",
    category: "Action",
    selected: false,
  },
  { id: 2, title: "Focus", rating: "6.9", category: "Comedy", selected: false },
  {
    id: 3,
    title: "The Lazarus Effect",
    rating: "6.4",
    category: "Thriller",
    selected: false,
  },
  {
    id: 4,
    title: "Everly",
    rating: "5.0",
    category: "Action",
    selected: false,
  },
  {
    id: 5,
    title: "Maps to the Stars",
    rating: "7.5",
    category: "Drama",
    selected: false,
  },
];

const entryCategories = [
  { category: "Drama", selected: false },
  { category: "Everly", selected: false },
  { category: "Thriller", selected: false },
];

const MovieList = () => {
  const [list, setList] = React.useState(entryData);
  const [categories, setCategories] = React.useState(entryCategories);

  const [x, setX] = React.useState(false);
  const [search, setSearch] = React.useState("");
  // const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    if (search.length > 0) {
      setX(true);
    } else if (search.length === 0) {
      setX(false);
    }
  }, [search]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  const getSearch = (e) => {
    e.preventDefault();
    // setQuery(search);
  };

  const selectedCategories = categories.filter(({ selected }) => selected).map(({  category }) => category);
   
  console.log({ selectedCategories });

  return (
    <>
      <div className={s.wrapper}>
        <MovieListInput
          value={search}
          updateSearch={updateSearch}
          getSearch={getSearch}
        />
        <MovieListRating list={list} setList={setList} />
        <MovieListGenre list={categories} setList={setCategories} />
      </div>
      {x &&
        list
          .filter(
            (element) =>
              element.title.includes(search) &&
              (!selectedCategories.length || selectedCategories.includes( element.category))
          )
          .map((element) => {
            return (
              <InputResult
                key={element.id}
                name={element.title}
                genre={element.category}
                rating={element.rating}
                list={list}
              />
            );
          })}
    </>
  );
};

export default MovieList;
