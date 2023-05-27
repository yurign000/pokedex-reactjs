//CONSUMIR POKEAPI
export default function fetchApi(search,setPokemon,setSearchHistory,searchHistory){
    fetch(
        'https://pokeapi.co/api/v2/pokemon/'+search.toLowerCase()
        )
        .then(async data =>{
            let pokemon = await data.json();     
            let newHistory = [...searchHistory]; //HISTÓRICO DE PESQUISA ATUALIZADO

            setPokemon(pokemon);
            newHistory.unshift(pokemon);

            //LIMITAR HISTÓRICO ATÉ 9 POKEMONS
            if(newHistory.length>10) newHistory.pop(); 

            setSearchHistory(newHistory);
        
        }).catch(() => {
            console.log('Pokemon não encontrado');  
        })
};