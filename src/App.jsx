import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Cover from "./assets/Components/Cover Page/Cover";
import Days from "./assets/Components/Days/Days";
import { Suspense } from "react";
import DayDetail from "./assets/Components/Days/DayDetail";

function App() {
  const workoutPromise = fetch("/json/days.json").then((res) => res.json());

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center p-20">
              <span className="loading loading-spinner loading-xl text-green-400"></span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route
              path="/days"
              element={<Days workoutPromise={workoutPromise} />}
            />
            <Route
              path="/day/:id"
              element={<DayDetail workoutPromise={workoutPromise} />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
