-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the database burgers_db and specifies it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Creates the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255),
  devoured bool,
  PRIMARY KEY (id)
);