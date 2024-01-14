const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js");
const db = require("../db/index.js");

/* GET home page */
router.get('/', (req, res) => res.render('index'));



module.exports = router;
