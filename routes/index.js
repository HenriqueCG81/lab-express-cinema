const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
  const moviesFromDB = await Movie.find();
  res.render('movies', { movies: moviesFromDB });
});
router.get('/movies/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('movie-details.hbs', movie);
});
module.exports = router;
