import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Auth.context";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  // let links = [
  //   { name: "Home", link: "/" },
  //   { name: "Movie", link: "/" },
  //   { name: "TV", link: "/" },
  //   { name: "Serial", link: "/" },
  // ];
  // const handleNav = () => {
  //   setNav(!nav);
  // };

  return (
    <nav className="w-full flex items-center justify-between px-4 p-4 lg:p-6 z-[100] absolute">
      <Link to="/">
        <h1 className="text-red-600 text-xl md:text-4xl font-bold cursor-pointer lg:pl-10">
          MOVFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex items-center lg:pr-24">
          <Link to="/account">
            <button className="text-sm text-white pr-4 font-semibold">
              Account
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 py-1 lg:py-2 text-sm text-white cursor-pointer rounded-sm px-2 lg:px-6 font-semibold"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center lg:pr-24">
          <Link to="/login">
            <button className="text-sm text-white pr-4 font-semibold">
              Sign
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 py-1 lg:py-2 text-sm text-white cursor-pointer rounded-sm px-2 lg:px-6 font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      )}

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
