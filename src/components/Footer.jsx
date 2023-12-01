import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { moviesMenu } from "../menu";

const Footer = () => {
  return (
    <div className="max-w-[1040px] mx-auto mt-10 px-4 gap-8 text-white py-4">
      <div className="flex gap-6">
        <BsFacebook size={25} />
        <BsInstagram size={25} />
        <BsTwitter size={25} />
      </div>
      <div className="py-6">
        <ul className="flex flex-wrap lg:flex-cols-5 gap-4 text-xs text-gray-500">
          {moviesMenu.map((item, id) => (
            <li key={id} className="w-full lg:w-[20%]">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-3 md:col-span-3">
        <h1 className="text-xs text-gray-500">
          ©2023 Cari Film. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
