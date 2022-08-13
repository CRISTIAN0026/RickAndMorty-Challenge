const axios = require('axios');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const RickAndMorty = async() =>{
    let countLocation = 0
    for (let i = 1; i <= 7; i++) {
        let response = (await axios(`https://rickandmortyapi.com/api/location?page=1`)).data.results
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

const EpisodeLocations = async() =>{
   
        for (let i = 1; i <= 3; i++) {
            var response = (await axios(`https://rickandmortyapi.com/api/episode?page=${i}`)).data.results
            
            var res = response.map(a => {
                return {
                    episode: a.episode,
                    name :a.name,
                    location: a.characters
            }})
        res
        }
}
console.log(EpisodeLocations().then(res => res))