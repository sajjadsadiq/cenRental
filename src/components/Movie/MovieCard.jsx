import MovieStar from "./MovieStar";
import { getImgUrl } from "../../utils/move-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function MovieCard({ movie }) {
  const [showModel, setShowModel] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModel(false);
  }

  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModel(true);
  }
  // eslint-disable-next-line react/prop-types
  const { cover, title, genre, rating, price } = movie;
  return (
    <>
      {showModel && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(cover)}
            alt={title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              {/* Movie Star */}
              <MovieStar rating={rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
