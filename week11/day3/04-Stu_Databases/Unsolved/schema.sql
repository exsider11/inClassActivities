-- Write code here or enter directly in MySQL shell --
DROP DATABASE IF EXISTS sample_db;
DROP DATABASE IF EXISTS BOOKS_DB;
CREATE DATABASE BOOKS_DB;
USE BOOKS_DB;

CREATE TABLE my_first_table(
    id INT NOT NULL,
    phrase VARCHAR(100)NOT NULL
);

CREATE TABLE users(
    id INT NOT NULL,
    firstname VARCHAR(100)NOT NULL,
    lastname VARCHAR(100)NOT NULL,
    avatar VARCHAR(100)
);