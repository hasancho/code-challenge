const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/index');

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
