import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path); //
  }

  return (
  <header className="bg-main1-1 h-20 flex flex-row fixed top-0 left-0 w-full z-50">
    <div className="justify-center items-center basis-1/6 flex flex-row">
      <img src="/ICE.png" alt="logo_ice" className="h-[30px]"/>
    </div>

    <div className="justify-center items-center grow flex">
      <ul className="flex flex-row justify-around w-full">
          <Link className=" transition ease-in-out duration-100 font-sans text-white text-base hover:text-lg text-semibold" to={"/programs"}>Programs</Link>
          <Link className=" transition ease-in-out duration-100 font-sans text-white text-base hover:text-lg text-semibold" to={"/leaderboard"}>Leaderboards</Link>
          <Link className=" transition ease-in-out duration-100 font-sans text-white text-base hover:text-lg text-semibold" to={"/about-us"}>About us</Link>
          <Link className=" transition ease-in-out duration-100 font-sans text-white text-base hover:text-lg text-semibold" to={"/partner"}>Partner</Link>
      </ul>
    </div>

    <div className="justify-center items-center basis-1/3 flex flex-row">
      <button onClick={() => handleNavigate("/login")} className="transition ease-in-out duration-100 hover:scale-110 text-white bg-main1-1 text-base font-semibold py-[10px] px-[20px] mx-1 rounded-md">Login</button>
      <button onClick={() => handleNavigate("/register")} className="transition ease-in-out duration-100 text-main1-1 bg-main2-1 hover:bg-main2-2 hover:scale-110 text-base font-semibold py-[10px] px-[20px] mx-1 rounded-md">Register</button>
    </div>
  </header>
  );
};

export default Header;