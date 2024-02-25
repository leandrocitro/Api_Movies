const { hash, compare } = require("bcryptjs");

const AppError = require("../utils/AppError");

const express = require("express");

const knex = require("../database/knex");



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

    async showUsers(request, response) {
        const Allusers = await knex("users");

        //console.log(Allusers);
        return response.json(Allusers)
    }

    async deleteUser(request, response) {
        const { id } = request.params;


        const [user] = await knex("users").where({ id });


        if (user.length === 0) {
            throw new AppError("Este usuário não existe");
        }

        await knex("users").where({ id }).delete();
        return response.json(`User ${user.name} deleted with sucessfully`);

    }

}

module.exports = UsersController;
