const axios = require('axios');
const star = process.hrtime()

const CharCounterLocation = async () => {
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
    return countLocation
}

const CharCounterEpisode = async () => {
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
    return countEpisode
}

const CharCounterCharacters = async() => {
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
    return countCharacter
} 


const RickAndMorty = async() => { 
    return {
        exercise_name: "Char counter",
        time: `${process.hrtime(star)[0]}s ${process.hrtime(star)[1]/1000000} ms`,
        in_time: process.hrtime(star)[0] > 3 ? false : true,
        results: [
            {
                char: "l",
                count: await CharCounterLocation(),
                resource: "location"
            },
            {
                char: "e",
                count: await CharCounterEpisode(),
                resource: "episode"
            },
            {
                char: "c",
                count: await CharCounterCharacters(),
                resource: "character"
            }
        ]
    }
}

module.exports = {
    RickAndMorty,
    CharCounterCharacters,
    CharCounterEpisode,
    CharCounterLocation
}
