import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/Auth.context";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item, id }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  console.log(item);
  return (
    <div
      key={id}
      className="w-[170px] sm:w-[200px] md:w-[240px] lg:w-[250px] inline-block cursor-pointer p-1 relative"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <h1 className="text-red-600 text-xl lg:text-lg absolute top-1 left-2 font-bold">
        M
      </h1>
      <div className="flex justify-center items-center text-center">
        {item?.release_date > "2023-10-12" && (
          <h1 className="absolute bottom-1 w-[80px] bg-red-700 font-semibold text-xs py-0.3 rounded-t text-white">
            Just added
          </h1>
        )}
      </div>
      <div className="flex justify-center text-center">
        {item?.release_date > "2023-10-12" && item?.vote_count > 500 && (
          <h1 className="absolute top-1 w-[30px] right-1 bg-red-600 font-bold text-[10px] py-0.5 px 0.5 text-white">
            TOP
            <p>10</p>
          </h1>
        )}
      </div>
      <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {truncateString(item?.title, 30)}
          {truncateString(item?.name, 30)}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
