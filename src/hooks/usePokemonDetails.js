import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id,pokemonName){

    const [pokemonDetail,setPokemonDetail] = useState({});

    const {pokemonListState,setpokemonListState} = usePokemonList();

    async function downloadCurrentPokemonDetails(){
        try {
                let response = '';

            if(pokemonName){
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            }
            else{
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }
            console.log(response)
            console.log('res',response.data);
            const pokemonOfSameType = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types?response.data.types[0].type.name:''}`);

            console.log('data is',pokemonOfSameType.data.pokemon)

            setPokemonDetail({
                name:response.data.name,
                image:response.data.sprites.other.dream_world.front_default,
                weight:response.data.weight,
                height:response.data.height,
                types:response.data.types.map((t)=>t.type.name),
                similarTypePokemons:pokemonOfSameType.data.pokemon.slice(0,5),
            });

            console.log(pokemonDetail.similarTypePokemons);

            // console.log(pokemonListState.type)
            setpokemonListState({...pokemonListState,type:response.data.types?response.data.types[0].type.name:''})
            console.log('list is : ',pokemonListState.name);
        } catch (error) {
            console.log('something went wrong!');
        }
    }


    useEffect(()=>{
        downloadCurrentPokemonDetails();
    }
    ,[])

    return {pokemonDetail};

}



export default usePokemonDetails;