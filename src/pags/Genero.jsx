function Genero() {
  return (
    <div className="Generos_container">
      <h1>Gêneros</h1>
      <section className="Generos">
        <div className="item_genero">
          <img src="./Imgs/pistola.png" alt="" />
          <h3>Ação</h3>
        </div>
        <div className="item_genero">
          <img src="./Imgs/fisica.png" alt="" />
          <h3>Ficção </h3>
        </div>
        <div className="item_genero">
          <img src="./Imgs/mascarar.png" alt="" />
          <h3>Terror</h3>
        </div>
        <div className="item_genero">
          <img src="./Imgs/mascaras-de-teatro.png" alt="" />
          <h3>Comédia</h3>
        </div>
        <div className="item_genero">
          <img src="./Imgs/quebra-cabeca.png" alt="" />
          <h3>Infantil</h3>
        </div>
      </section>
    </div>
  );
}

export default Genero;
