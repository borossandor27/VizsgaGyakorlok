CREATE TABLE felhasznalo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    jelszo VARCHAR(255) NOT NULL,
    regisztracio_datum DATE NOT NULL
);

CREATE TABLE zeneszam (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cim VARCHAR(150) NOT NULL,
    eloado VARCHAR(100) NOT NULL,
    hossz_mp INT NOT NULL,
    mufaj VARCHAR(50),
    boritokep VARCHAR(255)
);

CREATE TABLE lejatszasi_lista (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(100) NOT NULL,
    leiras TEXT,
    letrehozas_datum DATE NOT NULL,
    felhasznalo_id INT NOT NULL,
    FOREIGN KEY (felhasznalo_id) REFERENCES felhasznalo(id)
);

CREATE TABLE lista_zeneszam (
    lista_id INT NOT NULL,
    zeneszam_id INT NOT NULL,
    sorrend INT,
    PRIMARY KEY (lista_id, zeneszam_id),
    FOREIGN KEY (lista_id) REFERENCES lejatszasi_lista(id),
    FOREIGN KEY (zeneszam_id) REFERENCES zeneszam(id)
);