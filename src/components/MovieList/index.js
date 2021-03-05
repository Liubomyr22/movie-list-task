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
  { id: 2,
    title: "Focus",
    rating: "6.9",
    category: "Comedy",
    selected: false },
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
  { category: "Action", selected: false },
  { category: "Comedy", selected: false },
  { category: "Drama", selected: false },
  { category: "Thriller", selected: false },
];

const entryRating = [
  {rating: "1", selected: false},
  {rating: "2", selected: false},
  {rating: "3", selected: false},
  {rating: "4", selected: false},
  {rating: "5", selected: false},
  {rating: "6", selected: false},
  {rating: "7", selected: false},
  {rating: "8", selected: false},
  {rating: "9", selected: false},
  {rating: "10", selected: false},
]

const MovieList = () => {
  const [list, setList] = React.useState(entryData);
  const [categories, setCategories] = React.useState(entryCategories);
  const [rating,setRating] = React.useState(entryRating);

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
  const selectedRatings = rating.filter(({ selected }) => selected).map(({  rating }) => rating);
  console.log({ selectedRatings });

  return (
    <>
      <div className={s.wrapper}>
        <MovieListInput
          value={search}
          updateSearch={updateSearch}
          getSearch={getSearch}
        />
        <MovieListRating rating={rating} setRating={setRating} />
        <MovieListGenre list={categories} setList={setCategories} />
      </div>
      {x &&
        list
          .filter(
            (element) =>
              element.title.toLowerCase().includes(search) &&
              (!selectedRatings.length || selectedRatings.includes(element.rating)) &&
              (!selectedCategories.length || selectedCategories.includes(element.category)) 
              

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
