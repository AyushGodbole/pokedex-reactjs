import Pokemon from '../Pokemon/Pokemon';
import './PokemonList.css';
import usePokemonList from '../../hooks/usePokemonList';

function PokedexList(){

    const {pokemonListState,setpokemonListState} = usePokemonList();

    return (
        <div className='pokemon-list-wrapper'>
            <div className='pokemonListDetails'>
                {(pokemonListState.isLoading)?<h2 style={{textAlign:"center"}}>Loading Data</h2>:
                    pokemonListState.pokemonList.map((pokemon)=><Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.id} id={pokemon.id}/>)
                }
            </div>
            
            <div className="btns">
                <button id="prev" disabled={pokemonListState.prevUrl==null} onClick={()=>{
                    const urlToSet = pokemonListState.prevUrl;
                    setpokemonListState((state)=>({...state,
                        pokemon_url:urlToSet
                    }));}
                }>Previous</button>
                <button id="next" disabled={pokemonListState.nextUrl==null} onClick={()=>{
                    const urlToSet = pokemonListState.nextUrl;
                    setpokemonListState((state)=>({...state,
                        pokemon_url:urlToSet
                    }));}
                }>Next</button>
            </div>
        </div>
    )
}

export default PokedexList;