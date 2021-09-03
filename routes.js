const { Router } = require('express')
const routes = Router();
const FilmeController = require('./controller/FilmeController')

 routes.put('/filme', FilmeController.update);
 routes.get('/filme/:_id', FilmeController.show);
 routes.patch('/filme/update/:id', FilmeController.updatePatch)
 routes.delete('/filme/:_id', FilmeController.destroy);


 module.exports = routes