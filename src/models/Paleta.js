const mongooose = require('mongoose');

const PaletaSchema = new mongooose.Schema({
  titulo: { type: String, required: false },
  sabor: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
  recheio: { type: String, required: false },
});

const Paleta = mongooose.model('paletas', PaletaSchema);

module.exports = Paleta;
