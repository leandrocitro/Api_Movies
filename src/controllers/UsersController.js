const { hash, compare} = require("bcryptjs");

const AppError = require("../utils/AppError");

const knex = require("../database/knex");

class UsersController {
    async create (request, response) {
       const { name, email, password, isAdmin} = request.body;

           // const checkUsersExists = await knex("users").select('email').where({email});
        
        await knex("users").insert({name, email, password, isAdmin})
       response.json(`User created sucessfully!`);
    }

}

module.exports = UsersController;
