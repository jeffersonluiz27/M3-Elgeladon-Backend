const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paletas.route');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/paletas', route);

app.listen(port, () => {
  console.log(`A magica acontece em http://localhost:${port}`);
});
