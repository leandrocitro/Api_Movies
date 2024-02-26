//const AppError = require("../utils/AppError");

const knex = require("../database/knex");

class MoviesController {
    async create(request, response) {
        const { title, description, rating, tag } = request.body;
        const { user_id } = request.params;

        const [movie_id] = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        });

        const [tags] = await knex("movie_tags").insert({
            name: tag,
            user_id: user_id,
            movie_id
        });

        response.json("Movie created with sucess");
    }

    async showMovies(request, response) {
        const movies = await knex("movie_notes");
        return response.json(movies);
    }

    async delete(request, response) {
        const {movie_id} = request.params;

        
    }

}

module.exports = MoviesController;