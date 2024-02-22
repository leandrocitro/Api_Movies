const { hash, compare} = require("bcryptjs");

const AppError = require("../utils/AppError");

const express = require("express");

const knex = require("../database/knex");


class UsersController {
    async create(request, response) {

        //console.log(request.body);
        
       const { name, email, password, isAdmin } = request.body;

       const checkUsersExists = await knex("users").select('email').where({email});
       

       if(checkUsersExists){
            throw new AppError("Este e-mail já está cadastrado.");
       }

       

        
       await knex("users").insert({
            name,
            email,
            password,
            isAdmin
        });
        
       return response.status(201).json(`User created sucessfully!`);
       //return response.status(201).json({checkUsersExists});
    } 

}

module.exports = UsersController;
