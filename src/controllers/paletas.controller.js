const { default: mongoose } = require('mongoose');
const paletasService = require('../services/paletas.service');

const findPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findPaletasService();

  if (allPaletas.length == 0) {
    return res.status(404).send({ message: 'Não exitem paletas!' });
  }

  res.send(allPaletas);
};

const findPaletaByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPaleta = await paletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletasService.createPaletaService(paleta);

  res.status(201).send({ newPaleta, message: 'Cadastrado com sucesso!' });
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const paletaEdit = req.body;

  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    paletaEdit,
  );
  res.send({ updatedPaleta, message: '' });
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
