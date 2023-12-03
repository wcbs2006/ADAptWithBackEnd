const express = require("express");
const router = express.Router();

// Importar o arquivo do AuthController.
const AuthController = require("../controllers/AuthController");

//Criando as rotas
router.post("/register", AuthController.registerPost);
router.post("/login", AuthController.loginPost);
router.get("/contato", AuthController.contato);
router.get("/home", AuthController.home);
router.get("/sobre", AuthController.sobre);

module.exports = router;
