import useDebounce from "../../hooks/useDebounce";

function Search({updateSearchTerm}){

    const debouncedCallback = useDebounce((e)=>updateSearchTerm(e.target.value),500);

    return(
        <>
        <input
            type = "text"
            placeholder="pokemon name ..."
            autocomplete="on"
            onChange={debouncedCallback}
            
        />
        </>
    )
}

export default Search;