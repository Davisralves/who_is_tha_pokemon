-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS pokemon_database;

-- Switch to the newly created database
USE pokemon_database;

-- Create the table pokemon
CREATE TABLE IF NOT EXISTS pokemons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pokemon_name VARCHAR(255) NOT NULL,
    type1 VARCHAR(255) NOT NULL,
    type2 VARCHAR(255) NOT NULL,
    pokemon_height FLOAT,
    pokemon_weight FLOAT,
    imagem_url VARCHAR(255)
);