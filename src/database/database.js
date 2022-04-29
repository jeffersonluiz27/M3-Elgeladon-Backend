const mongoose = require('mongoose');

//const dblocal = 'mongodb://localhost:27017/paletas-db';
const dbatlas = process.env.URI_DATABASE;

async function connectToDatabase() {
  await mongoose
    .connect(dbatlas, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongo DB Conectado');
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
