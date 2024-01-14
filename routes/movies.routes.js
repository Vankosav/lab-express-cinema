const router = require('express').Router();
const Movie = require("../models/Movie.model.js");


router.get("/", (req, res) => {
    Movie.find()
      .then((moviesFromDB) => {
        console.log('Retrieved books from DB:', moviesFromDB);

        res.render("movies.hbs", { movies: moviesFromDB });
      })
      .catch((err) => console.log(err));
  });

router.get("/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((moviesFromDB) => {
        res.render("movie-details", { movies: moviesFromDB });
      })
      .catch((err) => console.log(err));
  });

  module.exports = router;