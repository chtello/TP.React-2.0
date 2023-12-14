import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [pokemons, setpokemons] = useState([
        {
            id: 1,
            nombre: "Lucario",
            imagen: "../src/imagen/p1.png",
            
        },
        {
            id: 2,
            nombre: "Greninja",
            imagen: "../src/imagen/p2.png",
            
        },
        {
            id: 3,
            nombre: "Pikachu",
            imagen: "../src/imagen/p3.png",
            
        },
        {
            id: 4,
            nombre: "charizard",
            imagen: "../src/imagen/p4.png",
            
        },
        {
            id: 5,
            nombre: "Blastoise",
            imagen: "../src/imagen/p5.png",
           
        },
        {
            id: 6,
            nombre: "Lunala",
            imagen: "../src/imagen/p6.png",
           
        },
        {
            id: 7,
            nombre: "Dusknoir",
            imagen: "../src/imagen/p7.png",
           
        },
        {
            id: 8,
            nombre: "Garchomp",
            imagen: "../src/imagen/p8.png",
           
        },
        {
            id: 9,
            nombre: "Rayquaza",
            imagen: "../src/imagen/p9.png",
           
        },
        {
            id: 10,
            nombre: "Guzzlord",
            imagen: "../src/imagen/p10.png",
           
        },
    ])
    
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ pokemons, setpokemons, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}