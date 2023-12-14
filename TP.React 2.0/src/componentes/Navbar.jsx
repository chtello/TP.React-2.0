import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";

function Navbar() {
  const { setBusqueda } = useContext(Contexto);

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <h1 className="navbar-title">!Bienvenido aventurero¡</h1>
      <img src='../src/imagen/log2.png'  alt="Logo" className="logo" />
      
      <h1 className="navbar-title">!Listo para nuevas aventuras¡</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Busca tus pokemons..."
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
