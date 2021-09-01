const mongoose = require('mongoose')

const FilmeSchema = mongoose.Schema({
    title:  String,
    director: String,
    release_date: Number,
    rt_score: Number,
    description: String,
    people: [String],
    species: [String],
    image: String,

    // size: [{type: mongoose.Types.Decimal128}],
})

module.exports = mongoose.model('Filme', FilmeSchema)