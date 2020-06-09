const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan(':method  :status :url'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', require('./src/routes/index'));

(async function main() {
  app.listen(process.env._PORT, () => {
    console.log(`example listening ports ${process.env._PORT}`)
});
})();

module.exports = app;
