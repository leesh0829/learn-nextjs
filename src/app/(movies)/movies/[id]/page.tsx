/*export default function MovieDetail({params: {id}} : {params: {id: string}}) {
  return <h1>Movie{id}</h1>;
}*/

import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import MovieVideos from "../../../../../components/movie-videos";

export default async function MovieDetail({
   params: { id } }:
  { params: { id: string } }) 
  {
    // console.log("=========");
    // console.log("Start fetching");
    // const [movie, setMovie] = await Promise.all([getMovie(id), getVideos(id)]);
    // console.log("Finished fetching");
    //return <h1>{movie.title}</h1>

    return (
      <div>
        <h3>Movie detail page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    );
}