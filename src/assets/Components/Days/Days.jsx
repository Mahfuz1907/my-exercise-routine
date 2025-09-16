import React, { use } from "react";
import Day from "./Day";

const Days = ({ workoutPromise }) => {
  const days = use(workoutPromise);
  return (
    <div className="mx-10 my-20 border-2 border-green-400 rounded-xl p-10 grid grid-cols-1 gap-10">
      {days.map((day) => (
        <Day key={day.id} day={day} />
      ))}
    </div>
  );
};

export default Days;
