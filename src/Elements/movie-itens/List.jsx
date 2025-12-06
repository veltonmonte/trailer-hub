import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import MovieItem from "./movieItem";
import ButtonRight from "../Fragments/ButtonRight";
import ButtonLeft from "../Fragments/ButtonLeft";

function List({ titleCategory, index }) {
  const [videos, setVideos] = useState([]);
  const [filmesAleatorios, setFilmesAleatorios] = useState([]);

  const uniqueListClass = `movie-list-${index}`;

  // 🔹 Buscar vídeos no Supabase (somente 1 vez)
  useEffect(() => {
    async function loadVideos() {
      const { data, error } = await supabase.from("trailers").select("*");
      if (error) {
        console.error("Erro ao buscar vídeos:", error);
      } else {
        setVideos(data);
      }
    }
    loadVideos();
  }, []);

  // 🔹 Resetar scroll do carrossel ao montar o componente
  useEffect(() => {
    const element = document.getElementsByClassName(uniqueListClass)[0];
    if (element) {
      element.scrollLeft = 0;
    }
  }, []);

  // 🔹 Criar lista de filmes embaralhada apenas quando "videos" mudar
  useEffect(() => {
    if (videos.length > 0) {
      const filtrados = videos.filter((movie) =>
        movie.categoria?.includes(titleCategory)
      );

      const embaralhados = [...filtrados].sort(() => Math.random() - 0.5);

      setFilmesAleatorios(embaralhados.slice(0, 10));
    }
  }, [videos, titleCategory]);

  // 🔹 Controle do scroll
  const moveScroll = (direction) => {
    const element = document.getElementsByClassName(uniqueListClass)[0];
    if (!element) return;

    const scrollAmount = element.clientWidth * 0.8;

    if (direction === 1) {
      element.scrollLeft += scrollAmount;
    } else if (direction === 2) {
      element.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div className="movie-category">
      <section className="list-container">
        <h2>{titleCategory}</h2>

        <ButtonLeft onClick={() => moveScroll(2)} />

        <div className={`movie-list ${uniqueListClass}`}>
          {filmesAleatorios.map((movie) => (
            <MovieItem
              key={movie.id}
              img={movie.img}
              titulo={movie.titulo}
            />
          ))}
        </div>

        <ButtonRight onClick={() => moveScroll(1)} />
      </section>
    </div>
  );
}

export default List;

