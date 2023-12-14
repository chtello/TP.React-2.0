import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";

function MyCard() {
    const { pokemons, setpokemons, busqueda } = useContext(Contexto);

    const pokemonsFiltrados = pokemons.filter((pokemon) =>
        pokemon.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    function handleLike(id) {
        const updatedPokemons = pokemons.map((pokemon) => {
            if (pokemon.id === id) {
                return { ...pokemon, likes: (pokemon.likes || 0) + 1 };
            }
            return pokemon;
        });
        setpokemons(updatedPokemons);
    }

    function handleDelete(id) {
        const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
        setpokemons(updatedPokemons);
    }

    return (
        <div className="card-container">
            {pokemonsFiltrados.map((pokemon) => (
                <div key={pokemon.id} className="card">
                    <div className="card-content">
                        <img className="imgCard" src={pokemon.imagen} />
                        <h2>{pokemon.nombre}</h2>
                    </div>
                    <button className="btnLike" onClick={() => handleLike(pokemon.id)}>
                        like {pokemon.likes || 0} 
                    </button>
                    <button className="btnElim" onClick={() => handleDelete(pokemon.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MyCard;
