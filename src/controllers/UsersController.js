const { hash, compare } = require("bcryptjs");

const AppError = require("../utils/AppError");

const express = require("express");

const knex = require("../database/knex");
const { EMPTY } = require("sqlite3");


class UsersController {

    async create(request, response) {

        //console.log(request.body);

        const { name, email, password, isAdmin } = request.body;

        const checkUsersExists = await knex("users").select('email').where({ email });

        //console.log(checkUsersExists.length);

       if (checkUsersExists.length > 0) {
            throw new AppError("Este e-mail já está cadastrado.");

        }

        const hashedPassord = await hash(password, 8);

        await knex("users").insert({
            name,
            email,
            password: hashedPassord,
            isAdmin
        }) 


        return response.status(201).json(`User created sucessfully!`);



    }

}

module.exports = UsersController;
