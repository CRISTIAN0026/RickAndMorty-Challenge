const { Router } = require('express');
const router = Router();
const EpisodeLocation = require('./controllers/EpisodeLocations');


router.use('/', EpisodeLocation)

module.exports = router;

































