import React, { use } from "react";
import { useParams } from "react-router-dom";

const DayDetail = ({ workoutPromise }) => {
  const days = use(workoutPromise);
  const { id } = useParams();
  const dayId = parseInt(id);
  const day = days.find((d) => d.id === dayId);

  return (
    <div className="mx-10 my-20 border-2 border-green-400 rounded-xl p-10">
      <h1 className="text-3xl font-bold text-green-500 mb-5 text-center">
        {day.day}
      </h1>

      <ul className="list-disc list-inside text-lg mb-5">
        {day["body part"].map((muscle, index) => (
          <li key={index}>{muscle}</li>
        ))}
      </ul>

      <video
        src={day.video}
        controls
        className="mx-auto w-full max-w-xl rounded-lg"
      />
    </div>
  );
};

export default DayDetail;
