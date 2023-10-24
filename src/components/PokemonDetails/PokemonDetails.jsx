import { useParams } from "react-router-dom";
import './pokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName}){
    const {id} = useParams();

    const {pokemonDetail} = usePokemonDetails(id,pokemonName);
    
    return(
        <div className="pokemon-container">
            <div className="pokemonDetail">
                <img src={pokemonDetail.image} />
                <div className="info">
                    <p>Name: <span>{pokemonDetail.name}</span></p>
                    <p>Weight: <span>{pokemonDetail.weight}</span></p>
                    <p>Height: <span>{pokemonDetail.height}</span></p>
                    <p>Type: <span>{pokemonDetail.types}</span></p>
                </div>
            </div>

            {
                    pokemonDetail.types && pokemonDetail.similarTypePokemons && 
                    <div className="similarPokemonTypeList">
                        <h2>More {pokemonDetail.types[0]} type Pokemons</h2>
                        <ul>
                            {pokemonDetail.similarTypePokemons.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                        </ul>
                    </div>
                }

        </div>
    )
}

export default PokemonDetails;