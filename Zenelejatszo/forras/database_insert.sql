INSERT INTO felhasznalo (nev, email, jelszo, regisztracio_datum)
VALUES
('Kiss Anna', 'anna@email.hu', '1234hash', '2026-04-18'),
('Nagy Péter', 'peter@email.hu', '5678hash', '2026-04-18');

INSERT INTO zeneszam (cim, eloado, hossz_mp, mufaj, boritokep)
VALUES
('Blinding Lights', 'The Weeknd', 200, 'Pop', 'cover1.jpg'),
('Believer', 'Imagine Dragons', 204, 'Rock', 'cover2.jpg'),
('Shape of You', 'Ed Sheeran', 242, 'Pop', 'cover3.jpg');

INSERT INTO lejatszasi_lista (nev, leiras, letrehozas_datum, felhasznalo_id)
VALUES
('Kedvencek', 'Legjobb dalok', '2026-04-18', 1);

INSERT INTO lista_zeneszam (lista_id, zeneszam_id, sorrend)
VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3);