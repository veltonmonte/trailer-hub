import "./App.css";
import Header from "./Elements/Header";
import HeaderVideo from "./Elements/headerVideo";
import List from "./Elements/movie-itens/List";
import categorias from "./categorias.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genero from "./pags/Genero";
import { useEffect, useState } from "react";



function App() {
  function getCategoria() {
    const randomlist = new Set();
    const lista = categorias.list;
    while (randomlist.size < 5) {
      const randomIndex = Math.floor(Math.random() * lista.length);
      randomlist.add(randomIndex);
    }
    return [...randomlist].map((index) => lista[index]);
  }

  const [categoriaEscolhida, setCategoriaEscolhida] = useState([]);

  useEffect(() => {
    setCategoriaEscolhida(getCategoria());
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <><Header /><HeaderVideo /><main>
              {categoriaEscolhida.length === 5 && (
                <>
                  <List titleCategory="Populares" index={0} />
                  <List titleCategory={categoriaEscolhida[0]} index={1} />
                  <List titleCategory={categoriaEscolhida[1]} index={2} />
                  <List titleCategory={categoriaEscolhida[2]} index={3} />
                  <List titleCategory={categoriaEscolhida[3]} index={4} />
                  <List titleCategory={categoriaEscolhida[4]} index={5} />
                </>
              )}
            </main></>
          } />
          <Route path="/Genero" element={<Genero />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;