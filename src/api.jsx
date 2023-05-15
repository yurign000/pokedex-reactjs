export default function fetchApi(search,setPokemon,setSearchHistory,searchHistory){
    fetch('https://pokeapi.co/api/v2/pokemon/'+search).then(async data =>{
        let pokemon = await data.json();
        setPokemon(pokemon);
        let newHistory = [...searchHistory];
        newHistory.push(pokemon.name);
        if(newHistory.length>9) newHistory.shift();
        setSearchHistory(newHistory);
    });
};