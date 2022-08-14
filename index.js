const axios = require('axios');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// const RickAndMorty = async() =>{
//     let countLocation = 0
//     for (let i = 1; i <= 7; i++) {
//         let response = (await axios(`https://rickandmortyapi.com/api/location?page=1`)).data.results
//         for (let j = 0; j < response.length; j++) {
//             for (let h = 0; h < response[j].name.length; h++) {
//                 if(response[j].name[h].toLowerCase() === "l"){
//                     countLocation++
//                 }
//             }
//         }
//     }
    
//     countLocation

//     let countEpisode = 0
//     for (let i = 1; i <= 3; i++) {
//         let response = (await axios(`https://rickandmortyapi.com/api/episode?page=${i}`)).data.results
//         for (let j = 0; j < response.length; j++) {
//             for (let h = 0; h < response[j].name.length; h++) {
//                 if(response[j].name[h].toLowerCase() === "e"){
//                     countEpisode++
//                 }
//             }
//         }
//     }

//     countEpisode

//     let countCharacter = 0
//     for (let i = 1; i <= 42; i++) {
//         let response = (await axios(`https://rickandmortyapi.com/api/character?page=${i}`)).data.results
//         for (let j = 0; j < response.length; j++) {
//             for (let h = 0; h < response[j].name.length; h++) {
//                 if(response[j].name[h].toLowerCase() === "c"){
//                     countCharacter++
//                 }
//             }
//         }
//     }
//     countCharacter
// }

// RickAndMorty()

const CharactersLocation = async(j) => {
    
    let url = (await axios(`https://rickandmortyapi.com/api/character/${j}`)).data
    let res = url.origin.name
    return res
}


const EpisodeLocations = async(i) =>{
    let url = (await axios(`https://rickandmortyapi.com/api/episode?page=${i}`)).data
    let results = url.results.map(async c =>{  
    {let results = await Promise.all(
    c.characters.map(async g => {const yi = await CharactersLocation(g.slice(42)); return yi})); 
    return {    location: new Set(results),
                name: c.name, 
                episode: c.episode,
                amount: c.characters.length}}})
    const res = await Promise.all(results)
    return res
}

EpisodeLocations(1).then(val => console.log(val))


// const promises = files.map(async filename => { const pdf = await getPdfToPrint(`output\\${outputDirectory}\\` , filename.replace("/", "")); return {status: pdf, filename}; }); 
// const res = await Promise.all(promises);





// const allEpisodes = async () => {
//     for (let i = 1; i < 3; i++) {
//     let rat = await EpisodeLocations(i)
//     var res = rat.map(element => {
//         element
//     });
//     res
//     }
// } 

// allEpisodes()




































// const fetch = require('node-fetch');
// var respuesta;

// var nombre = async function (username){
//     const url = `https://api.github.com/users/${username}`
//     var respuesta = await fetch (url)
//     var response = await respuesta.json();
//     return response.login;        
// }

// nombre('zac3599').then(val => console.log(val))


// let url = `https://rickandmortyapi.com/api/episode?page=${i}`
            // var response = await fetch(url);
            // var res = await response.json()
            // return res.results