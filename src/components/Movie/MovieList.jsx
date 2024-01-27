import MovieCard from "./MovieCard";
import { getAllMovies } from "../../data/MovieData";

export default function MovieList() {
  const moviesData = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
