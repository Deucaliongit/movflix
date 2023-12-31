import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="px-4 lg:px-10 lg:py-2">
        <h2 className="text-white font-bold text-sm md:text-xl pt-2 p-1 lg:p-4">
          {title}
        </h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white left-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={30}
          />
          <div
            id={"slider" + rowId}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative"
          >
            {movies &&
              movies.map((item, id) => <Movie key={id} id={id} item={item} />)}
          </div>
          <MdChevronRight
            onClick={slideRight}
            className="bg-white right-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={30}
          />
        </div>
      </div>
    </>
  );
};

export default Row;
