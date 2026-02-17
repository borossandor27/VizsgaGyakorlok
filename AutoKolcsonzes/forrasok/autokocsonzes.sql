CREATE DATABASE autokocsonzes;
USE autokocsonzes;
-- 1. Táblák létrehozása
CREATE TABLE Auto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rendszam VARCHAR(10) UNIQUE NOT NULL,
    automarka VARCHAR(50) NOT NULL,
    automodell VARCHAR(50) NOT NULL,
    autotipus VARCHAR(50),
    uzemanyag VARCHAR(20),
    gyartasiev INT,
    teljesitmeny INT,
    napi_dij INT NOT NULL
);

CREATE TABLE Kolcsonzo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nev VARCHAR(100) NOT NULL,
    varos VARCHAR(50),
    cim VARCHAR(100)
);

CREATE TABLE Ugyfel (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nev VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE Kolcsonzes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    auto_id INT,
    kolcsonzo_id INT,
    ugyfel_id INT,
    mettol DATE,
    meddig DATE,
    FOREIGN KEY (auto_id) REFERENCES Auto(id),
    FOREIGN KEY (kolcsonzo_id) REFERENCES Kolcsonzo(id),
    FOREIGN KEY (ugyfel_id) REFERENCES Ugyfel(id)
);

-- 2. Autók feltöltése (Rendszám + Minden egyéb adat)
INSERT INTO Auto (rendszam, automarka, automodell, autotipus, uzemanyag, gyartasiev, teljesitmeny, napi_dij) VALUES
('AA-AB-123', 'Volkswagen', 'Golf 8', 'Ferdehátú', 'Benzin', 2022, 110, 18000),
('AA-CD-456', 'Toyota', 'Corolla', 'Kombi', 'Hibrid', 2023, 103, 22000),
('AE-BC-789', 'Tesla', 'Model 3', 'Szedán', 'Elektromos', 2021, 208, 45000),
('AA-ZZ-999', 'Ford', 'Transit', 'Kishaszonjármű', 'Dízel', 2020, 96, 25000),
('AE-XX-111', 'BMW', 'X5', 'SUV', 'Dízel', 2023, 210, 55000),
('AA-EE-222', 'Fiat', '500e', 'Városi miniautó', 'Elektromos', 2022, 87, 15000),
('AA-FF-333', 'Skoda', 'Octavia', 'Szedán', 'Benzin', 2019, 110, 19500);

-- 3. Kölcsönzők feltöltése
INSERT INTO Kolcsonzo (nev, varos, cim) VALUES
('Repülőtér Rent-A-Car', 'Budapest', 'Ferihegy 2. terminál'),
('Belvárosi Autópont', 'Budapest', 'Váci út 12.'),
('Tisza-parti Autók', 'Szeged', 'Stefánia 4.'),
('Mecsek Drive', 'Pécs', 'Király utca 45.'),
('Nyugati Kapu Kölcsönző', 'Győr', 'Baross Gábor út 2.');

-- 4. Ügyfelek feltöltése
INSERT INTO Ugyfel (nev, email) VALUES
('Kovács János', 'janos@email.hu'),
('Nagy Andrea', 'andrea@email.hu'),
('Tóth Péter', 'peter@email.hu'),
('Szabó Zoltán', 'zoltan@email.hu'),
('Kiss Mária', 'maria@email.hu');

-- 5. 30 darab kölcsönzési adat
INSERT INTO Kolcsonzes (auto_id, kolcsonzo_id, ugyfel_id, mettol, meddig) VALUES
(1, 1, 1, '2025-01-10', '2025-01-15'), (2, 2, 2, '2025-01-12', '2025-01-20'),
(3, 3, 3, '2025-02-01', '2025-02-05'), (4, 4, 4, '2025-02-10', '2025-02-12'),
(5, 5, 5, '2025-03-05', '2025-03-10'), (6, 1, 2, '2025-03-15', '2025-03-18'),
(7, 2, 3, '2025-04-01', '2025-04-07'), (1, 3, 4, '2025-04-10', '2025-04-15'),
(2, 4, 5, '2025-05-20', '2025-05-25'), (3, 5, 1, '2025-06-01', '2025-06-10'),
(4, 1, 2, '2025-06-12', '2025-06-15'), (5, 2, 3, '2025-07-05', '2025-07-12'),
(6, 3, 4, '2025-07-20', '2025-07-22'), (7, 4, 5, '2025-08-01', '2025-08-05'),
(1, 5, 1, '2025-08-10', '2025-08-15'), (2, 1, 2, '2025-09-01', '2025-09-10'),
(3, 2, 3, '2025-09-15', '2025-09-20'), (4, 3, 4, '2025-10-05', '2025-10-08'),
(5, 4, 5, '2025-10-15', '2025-10-22'), (6, 5, 1, '2025-11-01', '2025-11-05'),
(7, 1, 2, '2025-11-10', '2025-11-15'), (1, 2, 3, '2025-12-01', '2025-12-08'),
(2, 3, 4, '2025-12-15', '2025-12-22'), (3, 4, 5, '2026-01-05', '2026-01-10'),
(4, 5, 1, '2026-01-15', '2026-01-20'), (5, 1, 2, '2026-01-25', '2026-01-30'),
(6, 2, 3, '2026-02-01', '2026-02-05'), (7, 3, 4, '2026-02-10', '2026-02-14'),
(1, 4, 5, '2026-02-15', '2026-02-18'), (2, 5, 1, '2026-02-16', '2026-02-20');
