import Aside from "./Aside";
import MovieList from "./Movie/MovieList";

export default function Main() {
  return (
    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
      <Aside />
      <MovieList />
    </div>
  );
}
