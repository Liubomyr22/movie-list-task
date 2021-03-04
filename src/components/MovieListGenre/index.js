import React from "react";
import arrow from '../../assets/icons/arrow.svg'
import s from './MovieListGenre.module.scss'

const MovieListGenre = ({ list, setList }) => {
  const [open, setOpen] = React.useState(false);
  const [filterRating, setFilterRating] = React.useState(false)
console.log(list)
  React.useEffect(() => {
    list.map(data => {
      return {selected:false,title:data.title,rating:data.rating,category:data.category}
    })
      setList(list)
  },[])

  let handleChange = (e) => {
    
      if(e.selected) {
        setList(list.filter(item => item.category.includes('z')))
      }

       
       
  }

  return (
    <>
    <div className={s.selectGenre} >
      <div
        className={s.titleAndArrow}
        onClick={() => {
          setOpen(bool => !bool) 
        }}
      >
        Genre{" "}
        <img src={arrow} at="arrow" />
      </div>
      <>
      
        {open && <div className={s.selectGenreSize}>
          <div><input type="checkbox" />Any Genre</div>
         { list.map(elem => {
            return (
              <div>
                <input key={Date.now()} value={list} type="checkbox" checked={elem.selected} onChange={(e) => {
                setList(list.filter(item => item.category.includes(e.target.value)))}
                 } />
                {elem.category}
              </div>
            );
          })} </div>}
          
      </>
      </div>
    </>
  );
};

export default MovieListGenre;
