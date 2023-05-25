import { useState,useEffect } from 'react';
import onLamp from 'on-lamp.png';
import offLamp from 'off-lamp.png';
import './leftSide.css';

export default function LeftSide(props){
    const [sprite, setSprite] = useState();
    const [isShiny, setIsShiny] = useState(false);
    const [isMale, setIsMale] = useState(true);

    const spriteIndex = ()=>{
        if(!isShiny && isMale)  return 'front_default';
        if(isShiny  && isMale)  return 'front_shiny';
        if(!isShiny && !isMale) return 'front_female';
        else                    return 'front_shiny_female';
    }

    const setDisplayVisible = ()=>{
        return props?.pokemon ? {display:'flex'} : {display:'none'};
    };

    const handleIsShiny = ()=>{
        setIsShiny(!isShiny);
    }
    const handleIsMale = ()=>{
        setIsMale(!isMale);
    }

    useEffect(()=>{
        if(props.pokemon){
            if(props.pokemon.sprites[spriteIndex()] == null){
                setIsMale(true);
                console.log('sem versão feminina')
            }

            setSprite(props.pokemon.sprites[spriteIndex()]);
        }
    },[props.pokemon,isMale,isShiny])
        
    return(
        <section className="left-side">
            <div className='top-part'></div>

            <div className="out-of-screen">
                <div className='screen'>
                    <span className="top-detail">🔴 🔴</span>


                    <div className="pokemon-screen">
                        <div className='shiny-button' style={setDisplayVisible()}>
                            <button onClick={()=>handleIsShiny()} style={{backgroundImage:offLamp}}></button>
                        </div>
                        <div className='name'>
                            <p>{props?.pokemon?.name}</p>
                        </div>
                        <div className='img-screen'>
                            <img src={sprite} onClick={()=>handleIsMale()}></img>
                        </div>
                        <div className='gender-button' style={setDisplayVisible()}>
                            <button onClick={()=>handleIsShiny()}>♂</button>
                        </div>
                    </div>
                    
                    <div className="bottom-detail">
                        <span>☰</span>
                        <span>☰</span>
                    </div>
                </div>
            </div>        
        </section>
    )
}