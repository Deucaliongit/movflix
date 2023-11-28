import React from "react";
import SavedShow from "../components/SavedShow";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/6ff519a5-de2c-4578-a44b-aa7106f6f141/ID-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold pl-4 md:pl-0 lg:pl-14">
            My Shows
          </h1>
        </div>
      </div>
      <SavedShow />
    </>
  );
};

export default Account;
