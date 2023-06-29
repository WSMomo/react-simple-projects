export function Image({ images, currentPic }) {
  return (
    <a href={images[currentPic]}>
      <img
        src={images[currentPic]}
        className="carousel-image"
        alt="Efrem Efre pic"
      />
    </a>
  );
}
