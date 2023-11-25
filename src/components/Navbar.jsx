import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  let links = [
    { name: "Home", link: "/" },
    { name: "Movie", link: "/" },
    { name: "TV", link: "/" },
    { name: "Serial", link: "/" },
  ];
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full flex items-center justify-between p-6 z-[100] absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer lg:pl-16">
        MOVFLIX
      </h1>
      <div className="flex items-center lg:pr-24">
        <button className="text-white pr-4 font-semibold">Sign</button>
        <button className="bg-red-600 py-2 text-white cursor-pointer rounded-sm px-6 font-semibold">
          Sign Up
        </button>
      </div>

      {/* {nav ? (
        <div className="flex flex-col-2 px-4 justify-between items-center">
          <div className="absolute w-full h-screen bg-slate-950 flex flex-col justify-center items-center top-0 left-0 z-[0]">
            <ul className="md:flex md:items-center">
              {links.map((links) => (
                <li
                  key={links.name}
                  className="w-[75%] text-white flex justify-center items-center rounded-full m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 font-semibold text-lg"
                >
                  <a onClick={handleNav} href={links.link}>
                    {links.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-full p-2 cursor-pointer font-semibold hover:bg-gray-300">
              <AiOutlineClose onClick={handleNav} size={20} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="lg:hidden text-white px-2 text-2xl">
        <BiMenu onClick={handleNav} />
      </div> */}
    </nav>
  );
};

export default Navbar;
