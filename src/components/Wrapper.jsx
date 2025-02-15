import React from "react";
import { useEffect } from "react";
import { getMovieList, searchMovie } from "../api";
import { useState } from "react";

const Wrapper = () => {
  const imgUrl = import.meta.env.VITE_BASEIMGURL;

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopular(result);
    });
  }, []);

  // const popularMovieList = () => {
  //   return popular.map((movie, i) => {
  //     return (
  //       <div key={i}>
  //         <div>{movie.title}</div>
  //         <div>{movie.poster_path}</div>
  //         <div>{movie.release_date}</div>
  //         <div>{movie.vote_average}</div>
  //       </div>
  //     );
  //   });
  // };



  return (
    <>
      {popular.map((movie, i) => {
        return (
          <div
            key={i}
            className="w-52 bg-amber-100 justify-center flex flex-col items-center rounded"
          >
            <div className="font-semibold">{movie.title}</div>
            <img src={`${imgUrl}/${movie.poster_path}`} className="" />
            <div className="date font-light">{movie.release_date}</div>
            <div className="rate text-red-600 underline">{movie.vote_average}</div>
          </div>
        );
      })}
    </>
  );
};

export default Wrapper;
