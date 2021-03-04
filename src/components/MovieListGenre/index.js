import React from "react";
import arrow from "../../assets/icons/arrow.svg";
import s from "./MovieListGenre.module.scss";

const MovieListGenre = ({ list, setList }) => {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => {
    setOpen((bool) => !bool);
  };

  return (
    <>
      <div className={s.selectGenre}>
        <div className={s.titleAndArrow} onClick={toggleOpen}>
          Genre <img src={arrow} alt="arrow" />
        </div>
        <>
          {open && <div onClick={toggleOpen} className={s.closingArea} />}
          {open && (
            <div className={s.selectGenreSize}>
              <div>
                <input type="checkbox" />
                Any Genre
              </div>
              {list.map((elem, i) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      checked={elem.selected}
                      onChange={() => {
                        setList((list) =>
                          list.map((data, index) =>
                            index === i
                              ? { ...data, selected: !data.selected }
                              : data
                          )
                        );
                      }}
                    />
                    {elem.category}
                  </div>
                );
              })}{" "}
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default MovieListGenre;
