import React from "react";
import { Link } from "react-router-dom";

const Day = ({ day }) => {
  return (
    <div>
      <Link to={`/day/${day.id}`}>
        <h1 className="text-2xl font-bold text-center border-2 border-green-400 bg-green-400 hover:bg-white hover:text-green-400 px-5 py-2 rounded-xl cursor-pointer text-white">
          {day.day}
        </h1>{" "}
      </Link>
    </div>
  );
};

export default Day;
