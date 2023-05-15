import "./rightSide.css"
import { useState } from "react"
import fetchApi from "../../../api"

export default function LeftSide(){
    const [inputValue, setInputValue] = useState();
    const [pokemon, setPokemon] = useState();
    const [searchHistory, setSearchHistory] = useState([]);

    const handlePokemon = ()=>{
        fetchApi(inputValue,setPokemon,setSearchHistory,searchHistory);
    };
    const historyComponent = ()=>{
        const historyMap = searchHistory.map((search,i)=>
            <>
                <p key={search+i}>{search}</p>
            </>
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