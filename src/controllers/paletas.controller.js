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

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id invalido!' });
    return;
  }

  const chosenPaleta = await paletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res.status(400).send({ message: 'Preenha todos os Campos' });
  }
  const newPaleta = await paletasService.createPaletaService(paleta);

  res.status(201).send({ newPaleta, message: 'Cadastrado com sucesso!' });
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const paletaEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id invalido!' });
    return;
  }

  const chosenPaleta = await paletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res.status(400).send({ message: 'Preenha todos os Campos' });
  }

  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    paletaEdit,
  );
  res.send({ updatedPaleta, message: 'Editado com sucesso!' });
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id invalido!' });
    return;
  }

  const chosenPaleta = await paletasService.deletePaletaService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada' });
  }

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
