const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]



})

const movieSHow = mongoose.model('Movies', movieSchema);
module.exports = movieSHow;