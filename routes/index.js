const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js");
const db = require("../db/index.js");

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie.find()
      .then((moviesFromDB) => {
        res.render("movies", { movies: moviesFromDB });
      })
      .catch((err) => console.log(err));
  });

router.get("/movies/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((moviesFromDB) => {
        res.render("movie-details", { movies: moviesFromDB });
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
