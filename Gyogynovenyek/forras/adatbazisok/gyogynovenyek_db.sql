-- ============================================================
-- Gyógynövény Nyilvántartó Rendszer - gyogynovenyek_db
-- Adatbázis létrehozó szkript
-- ============================================================

CREATE DATABASE IF NOT EXISTS gyogynovenyek_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_hungarian_ci;

USE gyogynovenyek_db;

-- ------------------------------------------------------------
-- Táblák
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS megye (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nev VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS lelohely (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nev VARCHAR(100) NOT NULL,
  megyeid INT(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (megyeid) REFERENCES megye(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS gyogynoven (
  azon INT(11) NOT NULL AUTO_INCREMENT,
  nev VARCHAR(100) NOT NULL,
  fajta VARCHAR(150) DEFAULT NULL,
  lelohely_id INT(11) NOT NULL,
  gyujtes_eve INT(11) NOT NULL,
  hasznositas VARCHAR(50) NOT NULL,
  URL VARCHAR(500) DEFAULT '',
  PRIMARY KEY (azon),
  FOREIGN KEY (lelohely_id) REFERENCES lelohely(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
-- Megye adatok
-- ------------------------------------------------------------

INSERT INTO megye (id, nev) VALUES
(2,  'Baranya'),
(7,  'Győr-Moson-Sopron'),
(9,  'Hajdú-Bihar'),
(10, 'Heves'),
(11, 'Komárom-Esztergom'),
(14, 'Somogy'),
(15, 'Szabolcs-Szatmár-Bereg'),
(16, 'Csongrád-Csanád'),
(17, 'Vas'),
(18, 'Veszprém'),
(19, 'Zala');

-- ------------------------------------------------------------
-- Lelőhely adatok
-- ------------------------------------------------------------

INSERT INTO lelohely (id, nev, megyeid) VALUES
(1,  'Eger',          10),
(2,  'Miskolc',       10),
(3,  'Pécs',          2),
(4,  'Debrecen',      9),
(5,  'Keszthely',     19),
(6,  'Győr',          7),
(7,  'Sopron',        7),
(8,  'Veszprém',      18),
(9,  'Szombathely',   17),
(10, 'Kaposvár',      14),
(11, 'Esztergom',     11),
(12, 'Szeged',        16),
(13, 'Nyíregyháza',   15),
(14, 'Szekszárd',     17),
(15, 'Aggtelek',      10);

-- ------------------------------------------------------------
-- Gyógynövény adatok
-- ------------------------------------------------------------

INSERT INTO gyogynoven (azon, nev, fajta, lelohely_id, gyujtes_eve, hasznositas, URL) VALUES
(1,  'közönséges kamilla',       'Matricaria chamomilla',    3,  2021, 'gyógyászat', ''),
(2,  'orvosi zsálya',            'Salvia officinalis',       7,  2019, 'gyógyászat', ''),
(3,  'fodormenta',               'Mentha spicata',           12, 2022, 'élelmiszer', ''),
(4,  'orvosi levendula',         'Lavandula angustifolia',   5,  2020, 'kozmetika',  ''),
(5,  'közönséges orbáncfű',      'Hypericum perforatum',     2,  2021, 'gyógyászat', ''),
(6,  'fekete bodza',             'Sambucus nigra',           9,  2018, 'élelmiszer', ''),
(7,  'orvosi borágó',            'Borago officinalis',       14, 2022, 'gyógyászat', ''),
(8,  'közönséges cickafark',     'Achillea millefolium',     1,  2020, 'gyógyászat', ''),
(9,  'kerti kapor',              'Anethum graveolens',       6,  2023, 'élelmiszer', ''),
(10, 'orvosi citromfű',          'Melissa officinalis',      11, 2019, 'gyógyászat', 'kepek/1.jpg'),
(11, 'kerti rozmaring',          'Salvia rosmarinus',        5,  2021, 'élelmiszer', 'kepek/2.jpg'),
(12, 'fehér üröm',               'Artemisia absinthium',     8,  2018, 'gyógyászat', 'kepek/3.jpg'),
(13, 'közönséges kakukkfű',      'Thymus vulgaris',          3,  2022, 'élelmiszer', 'kepek/4.jpg'),
(14, 'orvosi mályva',            'Malva sylvestris',         10, 2020, 'gyógyászat', 'kepek/5.jpg'),
(15, 'mezei zsurló',             'Equisetum arvense',        4,  2019, 'gyógyászat', 'kepek/6.jpg'),
(16, 'orvosi körömvirág',        'Calendula officinalis',    7,  2023, 'kozmetika',  'kepek/7.jpg'),
(17, 'nagy útifű',               'Plantago major',           2,  2021, 'gyógyászat', 'kepek/8.jpg'),
(18, 'fekete nadálytő',          'Symphytum officinale',     13, 2020, 'gyógyászat', 'kepek/9.jpg'),
(19, 'közönséges macskagyökér',  'Valeriana officinalis',    6,  2022, 'gyógyászat', 'kepek/10.jpg'),
(20, 'orvosi ánizs',             'Pimpinella anisum',        1,  2018, 'élelmiszer', ''),
(21, 'kerti zsálya',             'Salvia officinalis',       9,  2023, 'kozmetika',  ''),
(22, 'hegyi árnika',             'Arnica montana',           15, 2021, 'gyógyászat', ''),
(23, 'fehér mályva',             'Althaea officinalis',      4,  2019, 'gyógyászat', ''),
(24, 'közönséges galaj',         'Galium aparine',           11, 2020, 'gyógyászat', ''),
(25, 'orvosi gólyaorr',          'Geranium robertianum',     8,  2022, 'gyógyászat', ''),
(26, 'kerti kakukkfű',           'Thymus vulgaris',          14, 2023, 'élelmiszer', ''),
(27, 'orvosi párlófű',           'Agrimonia eupatoria',      3,  2018, 'gyógyászat', ''),
(28, 'közönséges lizinka',       'Lysimachia vulgaris',      10, 2021, 'gyógyászat', ''),
(29, 'erdei mályva',             'Malva neglecta',           7,  2022, 'gyógyászat', ''),
(30, 'orvosi katáng',            'Cichorium intybus',        2,  2020, 'élelmiszer', ''),
(31, 'kerti borkóró',            'Tanacetum vulgare',        5,  2019, 'gyógyászat', ''),
(32, 'mezei árvácska',           'Viola tricolor',           12, 2023, 'kozmetika',  ''),
(33, 'orvosi nadragulya',        'Atropa belladonna',        1,  2021, 'gyógyászat', ''),
(34, 'közönséges páfrány',       'Dryopteris filix-mas',     9,  2022, 'gyógyászat', ''),
(35, 'kerti majoranna',          'Origanum majorana',        6,  2020, 'élelmiszer', ''),
(36, 'fehér here',               'Trifolium repens',         4,  2018, 'gyógyászat', ''),
(37, 'orvosi csucsor',           'Solanum dulcamara',        13, 2023, 'gyógyászat', ''),
(38, 'mezei kökörcsin',          'Pulsatilla pratensis',     15, 2021, 'kozmetika',  ''),
(39, 'kerti tárkony',            'Artemisia dracunculus',    8,  2019, 'élelmiszer', ''),
(40, 'közönséges ibolya',        'Viola odorata',            3,  2022, 'kozmetika',  '');
