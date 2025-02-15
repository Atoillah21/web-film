import React from "react";
import Wrapper from "./Wrapper";
import { searchMovie } from "../api";

const Header = () => {

  const search = async(q) => {
    const query = await searchMovie(q)
    console.log(query)
}
    
  return (
    <header className="w-full flex flex-col items-center gap-y-3 ">
      <h1 className="text-2xl font-semibold text-center text-white">
        AHMAD THE MOVIE
      </h1>
      <input
        type="text"
        placeholder="cari film mu..."
        className="bg-white p-2 rounded w-1/2"
        onChange={(target) => search(target.value)}
      />
      <div className="w-full flex justify-center gap-5 items-center flex-wrap">
        <Wrapper />
        <Wrapper />
      </div>
    </header>
  );
};

export default Header;
