const axios = require('axios');
const { RickAndMorty } = require('./CharCounter.js');
const start = process.hrtime()

const CharactersLocation = async(j) => {
    let url = (await axios(`https://rickandmortyapi.com/api/character/${j}`)).data
    let res = url.origin.name
    return res
}

const Characters1 = async (array) => {
    let response = await Promise.all(array.map(async g => 
        {const characterOrigin = await CharactersLocation(g.slice(42)); return characterOrigin}))    
    return response
}
const Characters2 = async (array) => {
    let response = await Promise.all(array.map(async c =>{  
        {let results = await Characters1(c.characters);
        return {
                name: c.name, 
                episode: c.episode,
                amount: c.characters.length,    
                location: results.filter((item,index)=>{
                return results.indexOf(item) === index;
                }),
        }}}))
    return response
}

const CharactersEpisodeLocation = async (array) => {
        let response = Characters2(array)
        return response
} 

const EpisodeLocations = async(i) =>{
    let url = (await axios(`https://rickandmortyapi.com/api/episode?page=${i}`)).data
    return await CharactersEpisodeLocation(url.results)
}

const allEpisodes = async () => {
    let count = await RickAndMorty()
    let array = []
    for (let i = 1; i <= 3; i++) {
    let rat = await EpisodeLocations(i)
    array.push(rat)
    }
    return {
        response: count,
        exercise_name: "Episode locations",
        time: `${process.hrtime(start)[0]}s ${process.hrtime(start)[1]/1000000} ms`,
        in_time: process.hrtime(start)[0] > 3 ? false : true,
        results: array
    }
} 



module.exports = {
    allEpisodes,
    CharactersLocation,
    Characters1,
    Characters2,
    CharactersEpisodeLocation,
    EpisodeLocations
}
