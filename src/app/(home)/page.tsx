//'use client'

import Link from "next/link";
import Loading from "./loading";

//import { useEffect, useState } from "react";


export const metadata = {
  title: "Home",
}

//const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  //console.log("im fetching");
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  /*const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []); */
  return (
    <div>
      {movies.map((movie:any) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}



