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
    showTimes: {
        type: String,
        enum: ['13:00', '15:30', '18:00', '20:10', '22:40']
    }



})

const movieSHow = mongoose.model('Movies', movieSchema);
module.exports = movieSHow;