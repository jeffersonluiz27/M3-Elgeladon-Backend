const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const route = require('express').Router();
const controllerPaletas = require('../controllers/paletas.controller');
const controllerCarinho = require('../controllers/carrinho.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all-paletas', controllerPaletas.findPaletasController);
route.get(
  '/one-paleta/:id',
  validId,
  controllerPaletas.findPaletaByIdController,
);
route.post(
  '/create-paleta',
  validObjectBody,
  controllerPaletas.createPaletaController,
);
route.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  controllerPaletas.updatePaletaController,
);
route.delete(
  '/delete-paleta/:id',
  validId,
  controllerPaletas.deletePaletaController,
);

route.get('/all-carrinho', controllerCarinho.findAllCarrinhoController);
route.post(
  '/create-carrinho',
  controllerCarinho.createManyItemsCarrinhoController,
);
route.delete(
  '/finish-carrinho',
  controllerCarinho.deleteAllItemsCarrinhoController,
);

module.exports = route;
