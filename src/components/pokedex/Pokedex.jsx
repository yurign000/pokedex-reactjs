import LeftSide from "./left-side/LeftSide"
import RightSide from "./right-side/RIghtSide"
import Middle from "./middle/Middle"
import "./pokedex.css"
import { useState } from 'react'

export default function Pokedex(){
    const [pokemon,setPokemon] = useState();

    return(
        <div className="pokedex">
            <LeftSide pokemon={pokemon}/>
            <Middle/>
            <RightSide pokemon={pokemon} setPokemon={setPokemon}/>
        </div>
    )
}