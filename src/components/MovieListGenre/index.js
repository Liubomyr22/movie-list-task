import React from "react";
import arrow from '../../assets/icons/arrow.svg'
import s from './MovieListGenre.module.scss'

const MovieListGenre = ({ list, setList }) => {
  const [open, setOpen] = React.useState(false);
  // const [filterRating, setFilterRating] = React.useState(false)
  const setListCallBack = React.useCallBack(() => {

  },[])
  console.log(list)
  
  React.useEffect(() => {
    setList(list.map(data => {
      return { key:Date.now(), selected: false, title: data.title, rating: data.rating, category: data.category }
    }))
  }, [])

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
          <img src={arrow} alt="arrow" />
        </div>
        <>
          {open && <div className={s.selectGenreSize}>
            <div><input type="checkbox" />Any Genre</div>
            {list.map(elem => {
              return (
                <div>
                  <input key={Date.now()} type="checkbox" checked={elem.selected} onChange={(e) => {
                    let checked = e.target.checked;
                    elem.selected = checked;
                    if (elem.selected) {
                      setList(list.filter(item => item.category.includes(elem.category)))
                    } else {
                       
                    }
                  }
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
