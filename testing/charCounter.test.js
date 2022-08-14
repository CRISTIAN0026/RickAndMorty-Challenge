const { CharCounterCharacters, CharCounterEpisode, CharCounterLocation, RickAndMorty } = require('../controllers/CharCounter');

describe('Char counter test de cada peticion',() => {
    it('Se espera que al hacer la solicitud de el numero de letras "l" que hay en cada nombre de los characters de vuelva (494) ', async () => {
        let response = await CharCounterCharacters()
        expect(response).toBe(494)
    })

    it('Se espera que al hacer la solicitud de el numero de letras "e" que hay en cada nombre de los episode de vuelva (88)', async () => {
        let response = await CharCounterEpisode()
        expect(response).toBe(88)
    })

    it('Se espera que al hacer la solicitud de el numero de letras "e" que hay en cada nobre de los location de vuelva (82)', async () => {
        let response = await CharCounterLocation()
        expect(response).toBe(82)
    })

    describe("Ejecio de Char counter",() => {
        it("Char counter", async() => {
            let response = await RickAndMorty()
            expect(response).toEqual(response) 
        })
    })
})

jest.setTimeout(20000)