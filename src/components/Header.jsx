import React from "react";
import Wrapper from "./Wrapper";
import { getMovieList, searchMovie } from "../api";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopular(result);
    });
  }, []);

  
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopular(query.results);
    } else if (q.length === 0) {
      getMovieList().then((result) => {
        setPopular(result);
      });
    }
  };

  return (
    <header className="w-full flex flex-col items-center gap-y-3 ">
      <h1 className="text-2xl font-semibold text-center text-white">
        AHMAD THE MOVIE
      </h1>
      <input
        type="text"
        placeholder="cari film mu..."
        className="bg-white p-2 rounded w-1/2"
        onChange={({ target }) => search(target.value)}
      />
      <div className="w-full flex justify-center gap-5 items-center flex-wrap">
        <Wrapper popular={popular}/>
      </div>
    </header>
  );
};

export default Header;
