import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Auth.context";
import Loading from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, logIn } = UserAuth();

  const handleSbumbit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true); // Set loading state saat formulir dikirim

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Username atau Password Salah");
    } finally {
      setIsLoading(false); // Reset loading state setelah formulir selesai dikirim
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full h-full absolute object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/6ff519a5-de2c-4578-a44b-aa7106f6f141/ID-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24">
          <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? (
                <p className="bg-red-500 mt-4 rounded text-center px-2 py-2">
                  {error}
                </p>
              ) : null}
              <form
                onSubmit={handleSbumbit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-800 rounded focus:outline-none"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  required
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-800 rounded focus:outline-none"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-red-600 p-2 my-6 rounded font-bold"
                >
                  {isLoading ? <Loading /> : "Sign In"}
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600 mr-2">Register to Movlix</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
