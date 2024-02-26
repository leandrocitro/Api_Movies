const { Router } = require ("express");

const MoviesController = require("../controllers/MoviesController");


const moviesRoutes = Router();

//Middleware
function MiddlewareValidationEmail(request, response, next) {
    console.log("Você passou pelo Middleware");

    next();
}

const moviesController = new MoviesController;


moviesRoutes.post("/:user_id", MiddlewareValidationEmail, moviesController.create);
moviesRoutes.get("/:id", moviesController.show);
moviesRoutes.get("/", moviesController.showMovies);
moviesRoutes.delete("/:movie_id", moviesController.delete);


module.exports = moviesRoutes;