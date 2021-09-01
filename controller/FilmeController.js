const axios = require('axios')
const Filme = require('../Model/Filme')

module.exports = {
    async create (request, response){
        let { title, director, release_date, rt_score, people, description,  species, image } = request.body

            filme = await Filme.create({
                title,
                director,
                release_date,
                rt_score,
                people,
                description,
                species,
                image 
            })
            console.log('POST /filme Filme.create', request.body)
        return response.json(filme)
    },

    async show (request, response){
        Filme.findById(request.params._id)
        .then(idFound => {
            if(!idFound){ return response.res.status(404).end(); }
            return response.status(200).json(idFound);
        })
        .catch(err => next(err)); 
        console.log('GET /filme/:id Filme.show', request.params)
    },

    async index (request,  response){
        const filme = await Filme.find();
        console.log('GET /filme Filme.index')
        return response.json(filme);
    },

    async update (req, response){
        var _id = req.body._id
        console.log('entrou aqui', _id)


        Filme.findById(_id, function(err, doc) {
            if (err){
                console.error('error, no entry found');  
            }
            doc.title = req.body.title,
            doc.director = req.body.director,
            doc.release_date = req.body.release_date,
            doc.description = req.body.description,
            doc.rt_score = req.body.rt_score,
            doc.people = req.body.people,
            doc.species = req.body.species,
            doc.image = req.body.image,
            doc.save();
        })
        console.log('PUT /filme Filme.update', req.body)
        return response.json(req.body)
    },

    async updatePatch (request, response){
        console.log('Ta entrando aqui?')

        var id = request.params.id

        Filme.findByIdAndUpdate(id, function(err, doc) {
            if (err){
                console.error('error, no entry found');  
                return response.status(500).send('error, no entry found!');
            }

            const title = request.body.title || doc.title
            const director = request.body.director || doc.director
            const release_date = request.body.release_date || doc.release_date
            const rt_score = request.body.rt_score || doc.rt_score
            const description = request.body.description || doc.description
            const people = request.body.people || doc.people
            const species = request.body.species || doc.species
            const image = request.body.image || doc.image

            doc.title = title,
            doc.director = director,
            doc.release_date = release_date,
            doc.rt_score = rt_score,
            doc.description = description,
            doc.people = people,
            doc.species = species,
            doc.image = image,
            console.log(doc)
            doc.save();
        })
        console.log('PUT /filme Filme.update', request.body)
        return response.json(request.body)
    },

    async destroy (request, response){
        const params = request.params
        await Filme.findByIdAndDelete(params._id)
        console.log('DELETE /filme Filme.destroy')
        return response.send('Destroy')
    }
}