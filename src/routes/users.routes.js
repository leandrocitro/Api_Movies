const { Router } = require ("express");

const UsersController = require("../controllers/UsersController");


const usersRoutes = Router();

//Middleware

const usersController = new UsersController;

usersRoutes.post("/", usersController.create);

usersRoutes.get("/", usersController.showUsers);

usersRoutes.delete("/:id", usersController.deleteUser);


module.exports = usersRoutes;