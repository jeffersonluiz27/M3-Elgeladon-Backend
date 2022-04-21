const paletasService = require('../services/paletas.service');

const findPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findPaletasService();

  if (allPaletas.length == 0) {
    return res.status(404).send({ message: 'Não exitem paletas!' });
  }

  res.send(allPaletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  const chosenPaleta = paletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = (req, res) => {
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
  const newPaleta = paletasService.createPaletaService(paleta);
  res.status(201).send({ newPaleta, message: 'Cadastrado com sucesso!' });
};

const updatePaletaController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  const paletaEdit = req.body;

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res.status(400).send({ message: 'Preenha todos os Campos' });
  }

  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send({ updatedPaleta, message: 'Editado com sucesso!' });
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  console.log(idParam);

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido!' });
  }

  const chosenPaleta = paletasService.deletePaletaService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada' });
  }

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
