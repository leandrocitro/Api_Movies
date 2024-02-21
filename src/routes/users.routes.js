const { Router } = require ("express");

const UsersController = require("../controllers/UsersController");

//UserController

const usersRoutes = Router();

//Middleware

usersController = new UsersController;

usersRoutes.post("/", usersController.create);


module.exports = usersRoutes;