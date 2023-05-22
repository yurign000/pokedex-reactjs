//CONSUMIR POKEAPI
export default function fetchApi(search,setPokemon,setSearchHistory,searchHistory){
    fetch(
        'https://pokeapi.co/api/v2/pokemon/'+search
        )
        .then(async data =>{
            let pokemon = await data.json();     
            let newHistory = [...searchHistory]; //HISTÓRICO DE PESQUISA ATUALIZADO

            setPokemon(pokemon);
            newHistory.push(pokemon);

            //LIMITAR HISTÓRICO ATÉ 9 POKEMONS
            if(newHistory.length>9) newHistory.shift(); 

            setSearchHistory(newHistory);
    });
};