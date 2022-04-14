const paletasService = require('../services/paletas.service');

const findPaletasController = (req, res) => {
  const allPaletas = paletasService.findPaletasService();
  res.send(allPaletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletasService.findPaletaByIdService(idParam);
  res.send(chosenPaleta);
};

module.exports = {
  findPaletasController,
  findPaletaByIdController,
};
