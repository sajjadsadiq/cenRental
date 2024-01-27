import Star from "./../../assets/star.svg";

// eslint-disable-next-line react/prop-types
export default function MovieStar({ rating }) {
  const stars = Array(rating).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="" />
      ))}
    </>
  );
}
