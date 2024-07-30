const express = require('express');
const router = express.Router();
const animeController = require('./controllers/anime-controller');

router.get('/animes', animeController.getAllAnimes);
router.get('/animes/:id', animeController.getAnimeById);
router.post('/animes', animeController.insetAnime)

module.exports = router;
