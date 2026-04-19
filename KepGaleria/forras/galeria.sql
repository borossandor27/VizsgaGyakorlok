-- ============================================================
--  Képgaléria nyilvántartó rendszer – adatbázis
--  Adatbáziskezelő: MySQL / MariaDB
--  Létrehozva: 1. feladat (HTML/CSS) mellé, 2. feladathoz
-- ============================================================

-- ------------------------------------------------------------
--  Adatbázis létrehozása
-- ------------------------------------------------------------
CREATE DATABASE IF NOT EXISTS galeria
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_hungarian_ci;

USE galeria;

-- ============================================================
--  TÁBLÁK
-- ============================================================

-- ------------------------------------------------------------
--  1. festok
--     A festők alapadatait tárolja.
--     Külön táblában, hogy ne kelljen nevüket ismételni,
--     és later bővíthető életrajzi adatokkal.
-- ------------------------------------------------------------
CREATE TABLE festok (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    nev             VARCHAR(150) NOT NULL,
    szuletesi_ev    INT(4),
    halal_ev        INT(4),                        -- NULL ha még él
    nemzetiseg      VARCHAR(80)
);

-- ------------------------------------------------------------
--  2. korszakok
--     A stílusirányzatokat / korszakokat tárolja.
-- ------------------------------------------------------------
CREATE TABLE korszakok (
    id      INT AUTO_INCREMENT PRIMARY KEY,
    nev     VARCHAR(100) NOT NULL
);

-- ------------------------------------------------------------
--  3. helyszinek
--     A múzeumok / galériák adatait tárolja.
-- ------------------------------------------------------------
CREATE TABLE helyszinek (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    nev         VARCHAR(200) NOT NULL,    -- pl. "Louvre"
    varos       VARCHAR(100) NOT NULL,
    orszag      VARCHAR(100) NOT NULL
);

-- ------------------------------------------------------------
--  4. festmenyek
--     A gyűjtemény festményeit tárolja.
--     Hivatkozik a festők, korszakok és helyszínek táblákra.
-- ------------------------------------------------------------
CREATE TABLE festmenyek (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    cim             VARCHAR(200)   NOT NULL,
    festo_id        INT            NOT NULL,
    korszak_id      INT            NOT NULL,
    technika        VARCHAR(150)   NOT NULL,      -- pl. "Olaj, vászon"
    elkeszites_eve  YEAR,
    szelesseg_cm    DECIMAL(7,1),
    magassag_cm     DECIMAL(7,1),
    helyszin_id     INT,                          -- NULL ha ismeretlen
    kep             VARCHAR(300),                 -- pl. "kepek/1.jpg"
    leiras          TEXT,
    statusz         ENUM('kiallitva', 'tarolt', 'kolcsonzott')
                    NOT NULL DEFAULT 'kiallitva',

    FOREIGN KEY (festo_id)    REFERENCES festok(id),
    FOREIGN KEY (korszak_id)  REFERENCES korszakok(id),
    FOREIGN KEY (helyszin_id) REFERENCES helyszinek(id)
);

-- ============================================================
--  MINTA ADATOK
-- ============================================================

-- ------------------------------------------------------------
--  Festők
-- ------------------------------------------------------------
INSERT INTO festok (nev, szuletesi_ev, halal_ev, nemzetiseg) VALUES
    ('Leonardo da Vinci',  1452, 1519, 'olasz'),
    ('Vincent van Gogh',   1853, 1890, 'holland'),
    ('Edvard Munch',       1863, 1944, 'norvég'),
    ('Johannes Vermeer',   1632, 1675, 'holland'),
    ('Salvador Dalí',      1904, 1989, 'spanyol'),
    ('Pablo Picasso',      1881, 1973, 'spanyol'),
    ('Claude Monet',       1840, 1926, 'francia'),
    ('Raphael',            1483, 1520, 'olasz'),
    ('Sandro Botticelli',  1445, 1510, 'olasz');

-- ------------------------------------------------------------
--  Korszakok
-- ------------------------------------------------------------
INSERT INTO korszakok (nev) VALUES
    ('Reneszánsz'),
    ('Barokk'),
    ('Klasszicizmus'),
    ('Romantika'),
    ('Impresszionizmus'),
    ('Posztimpresszionizmus'),
    ('Expresszionizmus'),
    ('Kubizmus'),
    ('Szürrealizmus');

-- ------------------------------------------------------------
--  Helyszínek
-- ------------------------------------------------------------
INSERT INTO helyszinek (nev, varos, orszag) VALUES
    ('Louvre',                          'Párizs',    'Franciaország'),
    ('MoMA – Museum of Modern Art',     'New York',  'USA'),
    ('Nemzeti Galéria',                 'Oslo',      'Norvégia'),
    ('Mauritshuis',                     'Hága',      'Hollandia'),
    ('Museo Reina Sofía',               'Madrid',    'Spanyolország'),
    ('Orangerie Múzeum',                'Párizs',    'Franciaország'),
    ('Santa Maria delle Grazie',        'Milánó',    'Olaszország'),
    ('Uffizi Galéria',                  'Firenze',   'Olaszország');

-- ------------------------------------------------------------
--  Festmények
-- ------------------------------------------------------------
INSERT INTO festmenyek
    (cim, festo_id, korszak_id, technika, elkeszites_eve,
     szelesseg_cm, magassag_cm, helyszin_id, kep, statusz)
VALUES
    ('Mona Lisa',
        1, 1, 'Olaj, nyárfa',         1506,  53.0,  77.0, 1, 'kepek/1.jpg', 'kiallitva'),
    ('Csillagos éj',
        2, 6, 'Olaj, vászon',         1889,  92.1,  73.7, 2, 'kepek/2.jpg', 'kiallitva'),
    ('A sikoltozó',
        3, 7, 'Olaj, tempera, pasztell', 1893, 73.0, 91.0, 3, 'kepek/3.jpg', 'kolcsonzott'),
    ('Leány gyöngy fülbevalóval',
        4, 2, 'Olaj, vászon',         1665,  39.0,  44.5, 4, 'kepek/4.jpg', 'kiallitva'),
    ('Az emlékezet maradandósága',
        5, 9, 'Olaj, vászon',         1931,  33.0,  24.1, 2,  NULL,         'tarolt'),
    ('Guernica',
        6, 8, 'Olaj, vászon',         1937, 776.6, 349.3, 5, 'kepek/6.jpg', 'kiallitva'),
    ('Vízililiomok',
        7, 5, 'Olaj, vászon',         1906, 180.0, 200.0, 6, 'kepek/7.jpg', 'kolcsonzott'),
    ('Az utolsó vacsora',
        1, 1, 'Tempera, gipsz, szurok', 1498, 880.0, 460.0, 7, NULL,        'tarolt'),
    ('Athéni iskola',
        8, 1, 'Freskó',               1511, 770.0, 500.0, NULL, NULL,       'kiallitva'),
    ('Vénusz születése',
        9, 1, 'Tempera, vászon',      1485, 278.0, 172.5, 8, 'kepek/10.jpg','kiallitva');
