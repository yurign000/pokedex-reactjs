import { useState,useEffect } from 'react';
import './leftSide.css';

export default function LeftSide(props){
    const [sprite, setSprite] = useState();
    const [isShiny, setIsShiny] = useState(false);
    const [isMale, setIsMale] = useState(true);

    // ATUALIZAR SPRITES E ICONES DOS BOTÕES
    useEffect(()=>{
        if(props.pokemon){
            // OBTER BOTÃO SHINY
            let sStyle = document.querySelector('.shiny-button div').style;

           // ADICIONAR BOTÃO DE GÊNERO CASO HAJA POKEMON FÊMEA
            defineFemaleSpriteButton()
            
            // APLICAR STYLE FILTER NO BOTÃO SHINY
            isShiny ? sStyle.filter = 'drop-shadow(1px 1px 1px #222)' : sStyle.filter = '';

            // DEFINIR NOVA SPRITE
            setSprite(props.pokemon.sprites[spriteIndex()]);
        }
    },[props.pokemon,isMale,isShiny])

    // OBTER O INDEX DA SPRITE ATUAL
    const spriteIndex = ()=>{
        if(!isShiny && isMale)  return 'front_default';
        if(isShiny  && isMale)  return 'front_shiny';
        if(!isShiny && !isMale) return 'front_female';
        else                    return 'front_shiny_female';
    }

    // ADICIONAR BOTÃO DE GÊNERO
    const defineFemaleSpriteButton = ()=>{
        
        // OBTER BOTÃO GÊNERO
        let btGender = document.querySelector('.gender-button div');
        let gClass = btGender.classList;
        let gStyle = btGender.style;

        // VERIFICA SE O POKEMON POSSUI SPRITE FÊMEA
        if(props.pokemon.sprites.front_female)
        {

            // MOSTRAR BOTÃO GÊNERO CASO O POKEMON POSSUA SPRITE FÊMEA
            // APLICAR style.filter NO BOTÃO GÊNERO
            gClass.add('female-exist');
          
            if(!isMale) gStyle.filter = 'hue-rotate(50deg) brightness(200%) drop-shadow(-1px 1px 0px)'
            else        gStyle.filter = 'drop-shadow(1px 1px 1px #fff)';

            return true;   
        }
        // CASO CONTRÁRIO
        gClass.remove('female-exist')
        setIsMale(true);
        return false;
    }

    // MOSTRAR BOTÕES APENAS SE HOUVER UM POKEMON NA TELA
    // ATIVAR DISPLAY CASO HAJA
    const setDisplayVisible = ()=>{
        return props?.pokemon ? {display:'flex'} : {display:'none'};
    };

    // INVERTER BOLEANO DE isShiny e isMale
    const handleIsShiny = ()=>{
        setIsShiny(!isShiny);
    }
    const handleIsMale = ()=>{
        setIsMale(!isMale);
    }
        
    // ------------------------------------------------------------------
    return(
        <section className="left-side">
            {/* PARTE SUPERIOR, APENAS DETALHE */}
            <div className='top-part'></div>

            {/* MOLDURA DA POKEDEX */}
            <div className="frame">
                {/* PARTE BRANCA AO REDOR DA TELA */}
                <div className='screen-frame'>
                    {/* APENAS DETALHES */}
                    <span className="top-detail">🔴 🔴</span>

                    {/* TELA DA POKEDEX */}
                    <div className="pokemon-screen">
                        {/* BOTÃO DE SHINY */}
                        <div className='shiny-button' style={setDisplayVisible()}>
                            <div onClick={()=>handleIsShiny()}></div>
                        </div>
                        {/* NOME DO POKEMON */}
                        <div className='name'>
                            <p>{props?.pokemon?.name}</p>
                        </div>
                        {/* IMAGEM DO POKEMON */}
                        <div className='img-screen'>
                            <img src={sprite}></img>
                        </div>
                        {/* BOTÃO DE GÊNERO */}
                        <div className='gender-button' style={setDisplayVisible()}>
                            <div onClick={()=>handleIsMale()}></div>
                        </div>
                    </div>
                    {/* APENAS DETALHES */}
                    <div className="bottom-detail">
                        <span>☰</span>
                        <span>☰</span>
                    </div>
                </div>
            </div>        
        </section>
    )
}