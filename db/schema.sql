DROP DATABASE IF EXISTS EatDaBurgerDb;

CREATE DATABASE EatDaBurgerDb;

USE EatDaBurgerDb;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (10) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY
    (id)
);