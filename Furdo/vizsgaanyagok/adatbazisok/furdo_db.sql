-- ============================================================
--  furdo_db.sql  –  Fürdők Nyilvántartó Rendszer adatbázis
--  Szakmai vizsga segédanyag
-- ============================================================

CREATE DATABASE IF NOT EXISTS furdo_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_hungarian_ci;

USE furdo_db;

-- ------------------------------------------------------------
-- Tábla: megye
-- ------------------------------------------------------------
DROP TABLE IF EXISTS megye;
CREATE TABLE megye (
  id   INT(11)      NOT NULL AUTO_INCREMENT,
  nev  VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO megye (id, nev) VALUES
  (1,  'Baranya'),
  (2,  'Bács-Kiskun'),
  (3,  'Békés'),
  (4,  'Borsod-Abaúj-Zemplén'),
  (5,  'Csongrád-Csanád'),
  (6,  'Fejér'),
  (7,  'Győr-Moson-Sopron'),
  (8,  'Hajdú-Bihar'),
  (9,  'Heves'),
  (10, 'Jász-Nagykun-Szolnok'),
  (11, 'Komárom-Esztergom'),
  (12, 'Nógrád'),
  (13, 'Pest'),
  (14, 'Somogy'),
  (15, 'Szabolcs-Szatmár-Bereg'),
  (16, 'Tolna'),
  (17, 'Vas'),
  (18, 'Veszprém'),
  (19, 'Zala'),
  (20, 'Budapest (főváros)');

-- Korrekció: egyes megye_id értékek igazítása
UPDATE megye SET id=5  WHERE nev='Borsod-Abaúj-Zemplén';
UPDATE megye SET id=6  WHERE nev='Csongrád-Csanád';
UPDATE megye SET id=7  WHERE nev='Győr-Moson-Sopron';
UPDATE megye SET id=9  WHERE nev='Hajdú-Bihar';
UPDATE megye SET id=10 WHERE nev='Heves';
UPDATE megye SET id=14 WHERE nev='Baranya';
UPDATE megye SET id=15 WHERE nev='Szabolcs-Szatmár-Bereg';
UPDATE megye SET id=18 WHERE nev='Vas';
UPDATE megye SET id=19 WHERE nev='Veszprém';
UPDATE megye SET id=20 WHERE nev='Zala';
UPDATE megye SET id=3  WHERE nev='Békés';
UPDATE megye SET id=11 WHERE nev='Komárom-Esztergom';
UPDATE megye SET id=13 WHERE nev='Pest';

-- Újrakezdés tisztán
DROP TABLE IF EXISTS megye;
CREATE TABLE megye (
  id   INT(11)      NOT NULL,
  nev  VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO megye (id, nev) VALUES
  (2,  'Bács-Kiskun'),
  (3,  'Békés'),
  (5,  'Borsod-Abaúj-Zemplén'),
  (6,  'Csongrád-Csanád'),
  (7,  'Győr-Moson-Sopron'),
  (9,  'Hajdú-Bihar'),
  (10, 'Heves'),
  (11, 'Komárom-Esztergom'),
  (13, 'Pest'),
  (14, 'Baranya'),
  (15, 'Szabolcs-Szatmár-Bereg'),
  (16, 'Jász-Nagykun-Szolnok'),
  (18, 'Vas'),
  (19, 'Veszprém'),
  (20, 'Zala');

-- ------------------------------------------------------------
-- Tábla: varos
-- ------------------------------------------------------------
DROP TABLE IF EXISTS varos;
CREATE TABLE varos (
  id       INT(11)      NOT NULL,
  nev      VARCHAR(100) NOT NULL,
  megye_id INT(11)      NOT NULL,
  PRIMARY KEY (id),
  KEY fk_varos_megye (megye_id),
  CONSTRAINT fk_varos_megye FOREIGN KEY (megye_id) REFERENCES megye (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO varos (id, nev, megye_id) VALUES
  (1,  'Budapest',           13),
  (2,  'Debrecen',           9),
  (3,  'Miskolc',            5),
  (4,  'Pécs',               14),
  (5,  'Győr',               7),
  (6,  'Nyíregyháza',        15),
  (7,  'Kecskemét',          2),
  (8,  'Szeged',             6),
  (9,  'Eger',               10),
  (10, 'Hévíz',              20),
  (11, 'Hajdúszoboszló',     9),
  (12, 'Sárvár',             18),
  (13, 'Bük',                18),
  (14, 'Zalakaros',          20),
  (15, 'Gyula',              3),
  (16, 'Tata',               11),
  (17, 'Sopron',             7),
  (18, 'Balatonfüred',       19),
  (19, 'Zalaegerszeg',       20),
  (20, 'Esztergom',          11),
  (21, 'Mosonmagyaróvár',    7),
  (22, 'Cserkeszőlő',        16),
  (23, 'Mezőkövesd',         5),
  (24, 'Bogács',             5),
  (25, 'Kehidakustány',      20);

-- ------------------------------------------------------------
-- Tábla: furdo
-- ------------------------------------------------------------
DROP TABLE IF EXISTS furdo;
CREATE TABLE furdo (
  azon        INT(11)      NOT NULL AUTO_INCREMENT,
  nev         VARCHAR(100) NOT NULL,
  tipus       VARCHAR(50)  NOT NULL,
  medencek    INT(11)      NOT NULL DEFAULT 1,
  belepodij   INT(11)      NOT NULL DEFAULT 0,
  varos_id    INT(11)      NOT NULL,
  nyitas_eve  INT(11)      NOT NULL,
  URL         VARCHAR(500) NOT NULL DEFAULT '',
  PRIMARY KEY (azon),
  KEY fk_furdo_varos (varos_id),
  CONSTRAINT fk_furdo_varos FOREIGN KEY (varos_id) REFERENCES varos (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO furdo (azon, nev, tipus, medencek, belepodij, varos_id, nyitas_eve, URL) VALUES
  (1,  'Széchenyi Gyógyfürdő',              'gyógyfürdő',   18, 4600, 1,  1913, 'kepek/1.jpg'),
  (2,  'Gellért Gyógyfürdő',                'gyógyfürdő',   13, 5200, 1,  1918, 'kepek/2.jpg'),
  (3,  'Rudas Gyógyfürdő',                  'gyógyfürdő',    5, 3800, 1,  1550, 'kepek/3.jpg'),
  (4,  'Lukács Gyógyfürdő',                 'gyógyfürdő',    8, 3600, 1,  1884, 'kepek/4.jpg'),
  (5,  'Palatinus Strandfürdő',             'strand',       11, 2900, 1,  1919, 'kepek/5.jpg'),
  (6,  'Dagály Strandfürdő',                'strand',       10, 3100, 1,  1948, 'kepek/6.jpg'),
  (7,  'Paskál Fürdő',                      'gyógyfürdő',    6, 2800, 1,  1982, 'kepek/7.jpg'),
  (8,  'Római Strandfürdő',                 'strand',        7, 2500, 1,  1924, 'kepek/8.jpg'),
  (9,  'Hévízi Tófürdő',                   'gyógyfürdő',    4, 5400, 10, 1795, 'kepek/9.jpg'),
  (10, 'Aquaticum Debrecen',                'élményfürdő',  12, 4200, 2,  2001, 'kepek/10.jpg'),
  (11, 'Miskolctapolcai Barlangfürdő',      'gyógyfürdő',    6, 3600, 3,  1959, ''),
  (12, 'Élővíz Fürdő Miskolc',             'strand',        5, 2200, 3,  2005, ''),
  (13, 'Hungarospa Hajdúszoboszló',         'gyógyfürdő',   15, 4800, 11, 1925, ''),
  (14, 'Sárvári Gyógyfürdő',               'gyógyfürdő',    9, 3900, 12, 1988, ''),
  (15, 'Bükfürdő',                          'gyógyfürdő',   10, 4100, 13, 1975, ''),
  (16, 'Zalakarosi Fürdő',                  'gyógyfürdő',   11, 4300, 14, 1994, ''),
  (17, 'Városi Termálfürdő Gyula',          'gyógyfürdő',    8, 3200, 15, 1961, ''),
  (18, 'Tatai Fürdők',                      'strand',        9, 2800, 16, 1954, ''),
  (19, 'Soproni Lővérek Fürdő',            'strand',        6, 2600, 17, 1968, ''),
  (20, 'Anna Gyógyfürdő Balatonfüred',      'gyógyfürdő',    5, 3500, 18, 1937, ''),
  (21, 'Zalaegerszegi Termálfürdő',         'gyógyfürdő',    7, 3000, 19, 2000, ''),
  (22, 'Esztergomi Termálfürdő',            'gyógyfürdő',    6, 2900, 20, 1997, ''),
  (23, 'Mosonmagyaróvári Termálfürdő',      'gyógyfürdő',    8, 3300, 21, 1986, ''),
  (24, 'Cserkeszőlői Termálfürdő',          'gyógyfürdő',    9, 3100, 22, 1978, ''),
  (25, 'Zsóry Fürdő Mezőkövesd',            'gyógyfürdő',    7, 3400, 23, 1930, ''),
  (26, 'Aquapark Debrecen',                 'élményfürdő',   8, 4500, 2,  2015, ''),
  (27, 'Eger Termálfürdő',                  'gyógyfürdő',    9, 3700, 9,  1962, ''),
  (28, 'Dobogó Strandfürdő Eger',           'strand',        5, 2700, 9,  1973, ''),
  (29, 'Pécs Hőközpont Fürdő',             'gyógyfürdő',    6, 3200, 4,  2003, ''),
  (30, 'Győri Termálfürdő',                'gyógyfürdő',    8, 3000, 5,  1985, ''),
  (31, 'Nyíregyháza Sóstói Gyógyfürdő',    'gyógyfürdő',    7, 3100, 6,  1948, ''),
  (32, 'Bugaci Termálfürdő',                'gyógyfürdő',    5, 2400, 7,  2009, ''),
  (33, 'Szeged Napfényfürdő Aquapolis',     'élményfürdő',  14, 4700, 8,  2011, ''),
  (34, 'Bogácsi Gyógyfürdő',                'gyógyfürdő',    6, 2900, 24, 1968, ''),
  (35, 'Kehidakustányi Gyógyfürdő',         'gyógyfürdő',    7, 3600, 25, 1998, ''),
  (36, 'Aquasziget Sopron',                 'élményfürdő',   9, 4000, 17, 2007, ''),
  (37, 'Velencei-tó Fürdő',               'strand',        5, 2600, 16, 2004, ''),
  (38, 'Miskolc Aquaworld',                 'élményfürdő',  10, 4400, 3,  2019, ''),
  (39, 'Győr Aquapark',                    'élményfürdő',  11, 4600, 5,  2014, ''),
  (40, 'Pécs Aquapark',                    'élményfürdő',   8, 4200, 4,  2012, ''),
  (41, 'Nyíregyházi Aquarius Fürdő',        'élményfürdő',  10, 3900, 6,  2008, ''),
  (42, 'Kecskeméti Élményfürdő',           'élményfürdő',   9, 3800, 7,  2016, ''),
  (43, 'Szegedi Termálfürdő',               'gyógyfürdő',    5, 2800, 8,  1958, ''),
  (44, 'Veli Bej Gyógyfürdő',              'gyógyfürdő',    5, 4200, 1,  1574, ''),
  (45, 'Királyok Fürdője',                  'gyógyfürdő',    4, 3500, 1,  1565, '');

-- ============================================================
-- Ellenőrző lekérdezések (kommentben)
-- ============================================================
-- SELECT f.azon, f.nev, f.tipus, f.belepodij, v.nev AS varos, f.URL
--   FROM furdo f
--   JOIN varos v ON f.varos_id = v.id
--   ORDER BY f.azon;
