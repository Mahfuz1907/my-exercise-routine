import React from "react";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <div className="mx-20 my-20 flex flex-col justify-center gap-5">
      <Link to="/days">
        <img
          src="/logo.png"
          alt=""
          className="rounded-2xl h-60 w-60 cursor-pointer"
        />
      </Link>
      <h1 className="text-center text-2xl text-white bg-green-400 rounded-2xl px-3 py-3">
        Touch The Logo
      </h1>
    </div>
  );
};

export default Cover;
