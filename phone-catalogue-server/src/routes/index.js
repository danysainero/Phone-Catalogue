const Router = require('express').Router();

Router.use('/V1', require('./phonesRoutes'));

module.exports = Router;