-- Create the 'test' database if it doesn't exist
CREATE DATABASE IF NOT EXISTS test;

-- Switch to the 'test' database
USE test;

-- Create the 'users' table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
