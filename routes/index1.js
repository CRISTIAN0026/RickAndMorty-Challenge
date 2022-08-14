const { Router } = require('express');
const router = Router();
const allEpisodes = require('./allEpisodes');


router.use('/', allEpisodes)

module.exports = router;

































