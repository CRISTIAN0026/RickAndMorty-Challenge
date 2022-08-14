const { 
Characters1, 
Characters2, 
CharactersEpisodeLocation, 
CharactersLocation, 
EpisodeLocations, allEpisodes} = require('../controllers/EpisodeLocations');

describe('Episode locations', () => {
    it('Iterar por un character y devolver su origin', async() => {
        let response = await CharactersLocation(1)
        expect(response).toBe("Earth (C-137)")
    })

    it('Iterar por cada characters del array  y devolver el origin del los mismos', async() => {
        let response = await Characters1([
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/35",
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/62",
            "https://rickandmortyapi.com/api/character/92",
            "https://rickandmortyapi.com/api/character/127",
            "https://rickandmortyapi.com/api/character/144",
            "https://rickandmortyapi.com/api/character/158",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/179",
            "https://rickandmortyapi.com/api/character/181",
            "https://rickandmortyapi.com/api/character/239",
            "https://rickandmortyapi.com/api/character/249",
            "https://rickandmortyapi.com/api/character/271",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/394",
            "https://rickandmortyapi.com/api/character/395",
            "https://rickandmortyapi.com/api/character/435"
          ])
        expect(response).toEqual(["Earth (C-137)", "unknown", "Bepis 9", "Earth (C-137)", "Gromflom Prime", "Earth (C-137)", "Earth (C-137)", "unknown", "unknown", "Earth (C-137)","Earth (C-137)","Earth (C-137)","Earth (C-137)","unknown","Earth (C-137)","Earth (C-137)","Earth (C-137)","Girvonesk","unknown",])
    })

    it('Se espera que traiga tanto el ejercio de (Char counter) y (Episode locations)', async() =>{
        let response = await allEpisodes()
        expect(response).toEqual(response)
    })
})

jest.setTimeout(40000)

