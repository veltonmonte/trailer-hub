import { Link } from "react-router-dom";
import User from "./Fragments/User";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <div className="header_logo">
            <img src="Imgs/logotrailerhub.png" alt="logo" />
          </div>
        </Link>

        <nav>
          <ul className="menu">
            <li>
              <Link className="Header_link" to="/Genero">
                Gêneros
              </Link>
            </li>
            <li>
              <Link className="Header_link" to="/Contatos">
                Contatos
              </Link>
            </li>
            <li>
              <Link className="Header_link" to="/Pesquisar">
                Pesquisar
              </Link>
            </li>
          </ul>
        </nav>
          <User />
      </header>
    </>
  );
}

export default Header;
