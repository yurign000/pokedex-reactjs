import LeftSide from "./left-side/LeftSide"
import RightSide from "./right-side/RIghtSide"
import Middle from "./middle/Middle"
import "./pokedex.css"
import { useState,useEffect } from 'react'

export default function Pokedex(){
    const [pokemon,setPokemon] = useState();

    // DEFINIR TAMANHO DA POKEDEX
    useEffect(()=>{
        let pokedexStyle = document.querySelector('.pokedex').style;
        pokedexStyle.height = window.innerHeight*0.83 + 'px';
        pokedexStyle.width = window.innerWidth*0.63 + 'px';
    },[])

    // ------------------------------------------------------------------
    return(
        <div className="pokedex">
            <LeftSide pokemon={pokemon}/>
            <Middle/>
            <RightSide pokemon={pokemon} setPokemon={setPokemon}/>
        </div>
    )
}