CREATE DATABASE userregister;
USE userregister;

CREATE TABLE users (
    id bigint(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    birthday DATE 	
);