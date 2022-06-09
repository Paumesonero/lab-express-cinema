const express = require('express');
//const async = require('hbs/lib/async');
const router = express.Router();
const Movies = require('../models/Movies')

router.get('/', async (req, res, next) => {
    try {
        const movies = await Movies.find({});
        res.render('movies', { movies })

    } catch (error) {

    }
})

router.get('/:showId', async (req, res, next) => {
    const { showId } = req.params;
    try {
        const movie = await Movies.findById(showId);
        res.render('detailedMovie', movie)

    } catch (error) {

    }
})


module.exports = router;
