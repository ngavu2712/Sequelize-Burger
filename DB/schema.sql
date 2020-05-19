CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    Burger_name VARCHAR(30),
    Devoured BOOLEAN,
    PRIMARY KEY(id)
);