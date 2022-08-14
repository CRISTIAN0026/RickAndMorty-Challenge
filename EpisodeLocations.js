const axios = require('axios');

const CharactersLocation = async(j) => {
    let url = (await axios(`https://rickandmortyapi.com/api/character/${j}`)).data
    let res = url.origin.name
    return res
}

const EpisodeLocations = async(i) =>{
    let url = (await axios(`https://rickandmortyapi.com/api/episode?page=${i}`)).data
    let response = url.results.map(async c =>{  
    {let results = await Promise.all(
    c.characters.map(async g => 
    {const characterOrigin = await CharactersLocation(g.slice(42)); return characterOrigin})); 
    return {
        name: c.name, 
        episode: c.episode,
        amount: c.characters.length,    
        location: results.filter((item,index)=>{
                return results.indexOf(item) === index;
            }),
        }}})
    const results = await Promise.all(response)
    return results
}

const allEpisodes = async () => {
    let array = []
    for (let i = 1; i <= 3; i++) {
    let rat = await EpisodeLocations(i)
    array.push(rat)
    }
    return array
} 

allEpisodes().then(val => console.log(val))