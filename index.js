const axios = require('axios');

const RickAndMorty = async() =>{
    let countLocation = 0
    for (let i = 1; i <= 7; i++) {
        let response = (await axios(`https://rickandmortyapi.com/api/location?page=${i}`)).data.results
        for (let j = 0; j < response.length; j++) {
            for (let h = 0; h < response[j].name.length; h++) {
                if(response[j].name[h].toLowerCase() === "l"){
                    countLocation++
                }
            }
        }
    }
    
    countLocation

    let countEpisode = 0
    for (let i = 1; i <= 3; i++) {
        let response = (await axios(`https://rickandmortyapi.com/api/episode?page=${i}`)).data.results
        for (let j = 0; j < response.length; j++) {
            for (let h = 0; h < response[j].name.length; h++) {
                if(response[j].name[h].toLowerCase() === "e"){
                    countEpisode++
                }
            }
        }
    }

    countEpisode

    let countCharacter = 0
    for (let i = 1; i <= 42; i++) {
        let response = (await axios(`https://rickandmortyapi.com/api/character?page=${i}`)).data.results
        for (let j = 0; j < response.length; j++) {
            for (let h = 0; h < response[j].name.length; h++) {
                if(response[j].name[h].toLowerCase() === "c"){
                    countCharacter++
                }
            }
        }
    }
    countCharacter
}

RickAndMorty()

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
































