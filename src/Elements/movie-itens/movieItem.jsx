function MovieItem({ img, titulo }) {
  return (
    <div className="movie-item">
      <a href={`player.html?id=${titulo}`}>
        <img src={img} alt={titulo} />
      </a>
    </div>
  );
}
export default MovieItem;
