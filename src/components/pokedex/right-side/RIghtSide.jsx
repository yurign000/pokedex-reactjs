import "./rightSide.css"
import { useState } from "react"
import fetchApi from "../../../api"

export default function LeftSide(props){
    const [inputValue, setInputValue] = useState();
    const [searchHistory, setSearchHistory] = useState([]);

    //OBTER POKEMON PESQUISADO
    const handlePokemon = ()=>{
        fetchApi(inputValue,props.setPokemon,setSearchHistory,searchHistory);
    };

    //RETORNAR COMPONENTE CONTENDO O HISTORICO
    const historyComponent = ()=>{
        const historyMap = searchHistory.map((search,i)=>
            <div key={i} onClick={()=>props.setPokemon(search)}>
                <p>{search.name}</p>
                <img className="img-history" src={search.sprites.front_default}/>
            </div>
        )
        return historyMap;
    }

    return(
        <section className="right-side">
            <div className="inner-part">
                <div className="menu-search">
                    <input placeholder="Pesquisar" type="text" onChange={(e)=>setInputValue(e.target.value)}/>
                    <div className="button" onClick={()=>handlePokemon()}></div>
                </div>
                <div className="menu-history">
                    <div className="history-screen">
                        {historyComponent()}
                    </div>
                </div>

            </div>
        </section>
    )
}