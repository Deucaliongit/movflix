import React, { useEffect, useState } from "react";
import requests from "../Request.js";
import axios from "axios";
import { IoIosPlay } from "react-icons/io";

const Homepages = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  // console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] lg:h-[720px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[720px] bg-gradient-to-r from-black"></div>
        {movie && movie.backdrop_path && (
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        )}
        <div className="pl-6 md:pl-6 lg:pl-24 absolute top-[20%] lg:top-[30%] p-4 md-p-8">
          <h1 className="text-3xl md:text-4xl font-bold">{movie?.title}</h1>
          <div className="my-4 flex">
            <button className="border bg-white text-black border-gray-300 font-semibold rounded py-2 p-5 flex items-center">
              <span>
                <IoIosPlay />
              </span>
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 p-5 ml-4 rounded">
              Watch Later
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Release : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepages;
