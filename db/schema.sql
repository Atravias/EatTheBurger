DROP DATABASE IF EXISTS EatDaBurgerDb;

CREATE DATABASE EatDaBurgerDb;

USE EatDaBurgerDb;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (10) NOT NULL,
    PRIMARY KEY
    (id)
);