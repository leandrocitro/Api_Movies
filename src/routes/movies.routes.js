const { Router } = require ("express");

const MoviesController = require("../controllers/MoviesController");


const moviesRoutes = Router();

//Middleware

const moviesController = new MoviesController;


moviesRoutes.post("/:user_id", moviesController.create);
moviesRoutes.get("/", moviesController.showMovies);
moviesRoutes.delete("/:movie_id", moviesController.delete);


module.exports = moviesRoutes;