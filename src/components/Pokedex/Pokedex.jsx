import { useState } from "react";
import PokedexList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedex.css';
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex(){

    const [searchTerm,setSearchTerm] = useState('');

    return(
        <div className="pokedex-wrapper">
        <div className="upper">
            <Search updateSearchTerm={setSearchTerm}/>
            {searchTerm}
        </div>

        {/* here key prop is given on pokemonDetails , means when search term changes re-render will occur */}
        {(!searchTerm)?<PokedexList />:<><PokemonDetails key={searchTerm} pokemonName={searchTerm} /></>}
        </div>
    )
}

export default Pokedex;