const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paletas.route');
const { connect } = require('./src/routes/paletas.route');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/paletas', route);

app.listen(port, () => {
  console.log(`A magica acontece em http://localhost:${port}`);
});
