CREATE DATABASE hid_db;
USE hid_db;

CREATE TABLE hidak(
    azon INT PRIMARY KEY,
    nev VARCHAR(100),
    hossz INT,
    telepules_id INT,
    epites_eve INT
);

CREATE TABLE telepulesek(
    id INT PRIMARY KEY,
    nev VARCHAR(100),
    varmegye VARCHAR(100)
);