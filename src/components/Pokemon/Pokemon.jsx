import { Link } from 'react-router-dom';
import './pokemon.css';

function Pokemon({name,image,id}){
    return(
        <>
            <Link to={`/pokemon/${id}`}>
                <div className='poke'>
                    <p>{name}</p>
                    <img src={image}/>
                </div>
            </Link>
        </>
    )
}

export default Pokemon;