import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(){
    // const [pokemonList,setPokemonList] = useState([]);
    // const [isLoading,setisLoading] = useState(true);

    // const [pokemon_url,setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    // const [nextUrl,setNextUrl] = useState('');
    // const [prevUrl,setPrevUrl] = useState('');

    const [pokemonListState,setpokemonListState] = useState({
        pokemonList :[],
        isLoading :true,
        pokemon_url :'https://pokeapi.co/api/v2/pokemon',
        nextUrl :'',
        prevUrl :'',
        type:''
    });

    async function downloadList(){

        // setisLoading(true);
        setpokemonListState((state)=>({...state,
            isLoading:true,
        }));

        const response = await axios.get(pokemonListState.pokemon_url);
        console.log(response);

        // array of pokemons
        const pokemonResults = response.data.results;
        console.log(pokemonResults);

        // array of pokemon urls
        const PokemonResultUrlsPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const pokemonData = await axios.all(PokemonResultUrlsPromise);
        console.log(pokemonData);

        const finalRes = pokemonData.map((eachPokemon)=>{
            const PokemonDetails = {
                id:eachPokemon.data.id,
                name:eachPokemon.data.name,
                image:eachPokemon.data.sprites.other.dream_world.front_default,
                types:eachPokemon.data.types
            }
            // each will insert in finalRes array
            return PokemonDetails;
        })

        console.log(finalRes);
        // setPokemonList(finalRes);
        // setisLoading(false);
        setpokemonListState((state)=>({...state,
            pokemonList:finalRes,
            isLoading :false,
        }));

        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        setpokemonListState((state)=>({...state,
            nextUrl:response.data.next,
            prevUrl:response.data.previous
        }));
    }

    useEffect(()=>{
        downloadList();
    },[pokemonListState.pokemon_url]);

    console.log(pokemonListState.isLoading);

    return {pokemonListState,setpokemonListState};
}

export default usePokemonList;