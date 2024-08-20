import React from "react";

export default function about() {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text dark:text-white">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About{" "}
            <span className="text-indigo-800 dark:text-indigo-600">
              Movie Trailer
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-500">
            Movie trailer is Web-based platform that was found in 2023 by Sem
            Dori and it allows users to search, and find best movies trailer,
            providing a convenient and efficient way to choose your next movie
            to watch.
          </p>
        </div>
      </div>
    </div>
  );
}
