import { useEffect, useState, useRef } from "react";

import Galery from "./components/Galery";

function App() {
  const key = "";
  const [query, setQuery] = useState("cat");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pictures, setPictures] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${key}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let data = await response.json();
        let results = await data.results;
        setPictures(results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPictures(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="flex flex-col items-center flex-1 h-full py-8 gap-10">
      <h1 className="font-bold text-5xl text-blue-700"> SnapShot</h1>
      <div className="flex gap-1">
        <input
          ref={inputRef}
          className=" border-solid border-2 border-blue-200 py-1 
          px-2 w-full border-blue-700 focus:ring--blue-500 focus:border-blue-500
          text-blue-600 outline-none
          
        "
          placeholder="Search..."
        ></input>

        <button
          className="text-white md:w-1/6 bg-blue-700 p-2 rounded"
          onClick={() => {
            setQuery(inputRef.current.value);
          }}
        >
          <svg
            className="text-white md:w-1/6"
            aria-hidden="true"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <section className="flex flex-col w-full gap-3 items-center md:flex-row md:w-full justify-center">
        <button
          onClick={(e) => {
            setQuery(e.target.textContent);
          }}
          className="w-2/3 bg-blue-500 text-white md:w-1/12"
        >
          Cat
        </button>
        <button
          onClick={(e) => {
            setQuery(e.target.textContent);
          }}
          className="w-2/3 bg-blue-500 text-white md:w-1/12"
        >
          Dog
        </button>
        <button
          onClick={(e) => {
            setQuery(e.target.textContent);
          }}
          className="w-2/3 bg-blue-500 text-white md:w-1/12"
        >
          Birds
        </button>
        <button
          onClick={(e) => {
            setQuery(e.target.textContent);
          }}
          className="w-2/3 bg-blue-500 text-white md:w-1/12"
        >
          Summer
        </button>
      </section>
      <h2 className="text-blue-700 font-bold 2/3 text-2xl tracking-wider">
        {query.toUpperCase()} pictures
      </h2>
      <main className="flex items-center justify-center">
        {isLoading ? (
          <div className="grid"> Wait a sec...</div>
        ) : (
          <Galery pictures={pictures} />
        )}
      </main>
    </div>
  );
}
export default App;
