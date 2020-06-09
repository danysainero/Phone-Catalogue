const phonesRoutes = require("express").Router();
const PhonesController = require("../resources/phones/phones-controller");


phonesRoutes.get("/phones", PhonesController.getAllPhones);
phonesRoutes.get("/phones/:id", PhonesController.getPhoneById); 

module.exports = phonesRoutes;
