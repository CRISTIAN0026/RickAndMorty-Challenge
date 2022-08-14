const {allEpisodes } = require('../controllers/EpisodeLocations')
const { Router } = require('express');
const router = Router();


router.get('/', async(req, res) => {
    try {
        let response = await allEpisodes()
        res.status(200).send(response)
    } catch (error) {
        res.status(404).send({error})
    }
})


module.exports = router
