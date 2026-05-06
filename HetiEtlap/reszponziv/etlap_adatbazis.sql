-- ============================================================
--  Vasmunkás Étterem – adatbázis séma és mintaadatok
--  Kompatibilis: MySQL 8+ / MariaDB 10.4+
-- ============================================================

-- ------------------------------------------------------------
--  1. ADATBÁZIS LÉTREHOZÁSA
-- ------------------------------------------------------------
CREATE DATABASE IF NOT EXISTS vasmunkas_etterem
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_hungarian_ci;

USE vasmunkas_etterem;

-- ------------------------------------------------------------
--  2. KATEGÓRIÁK TÁBLA
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS kategoriak (
  id         TINYINT UNSIGNED    NOT NULL AUTO_INCREMENT,
  kod        VARCHAR(20)         NOT NULL UNIQUE COMMENT 'pl. leves, foetal, dessert',
  nev        VARCHAR(60)         NOT NULL,
  sorsz      TINYINT UNSIGNED    NOT NULL DEFAULT 1 COMMENT 'megjelenítési sorrend',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO kategoriak (kod, nev, sorsz) VALUES
  ('leves',   'Leves',              1),
  ('foetal',  'Főétel',             2),
  ('koret',   'Köret',              3),
  ('salata',  'Saláta',             4),
  ('dessert', 'Desszert / Gyümölcs',5);

-- ------------------------------------------------------------
--  3. HETEK TÁBLA
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS hetek (
  id          SMALLINT UNSIGNED   NOT NULL AUTO_INCREMENT,
  het_kezdete DATE                NOT NULL COMMENT 'mindig hétfő',
  napi_ar     SMALLINT UNSIGNED   NOT NULL DEFAULT 999,
  heti_ar     SMALLINT UNSIGNED   NOT NULL DEFAULT 4500,
  heti_ar_lista SMALLINT UNSIGNED NOT NULL DEFAULT 4995 COMMENT 'áthúzott listaár',
  lezart      TINYINT(1)          NOT NULL DEFAULT 0,
  letrehozva  TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_het_kezdete (het_kezdete)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO hetek (het_kezdete, napi_ar, heti_ar, heti_ar_lista) VALUES
  ('2025-05-05', 999, 4500, 4995),
  ('2025-05-12', 999, 4500, 4995);

-- ------------------------------------------------------------
--  4. ÉTELEK TÁBLA
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS etelek (
  id              INT UNSIGNED        NOT NULL AUTO_INCREMENT,
  het_id          SMALLINT UNSIGNED   NOT NULL,
  nap_sorsz       TINYINT UNSIGNED    NOT NULL COMMENT '1=H, 2=K, 3=Sze, 4=Cs, 5=P',
  nap_nev         VARCHAR(20)         NOT NULL COMMENT 'hétfő / kedd stb.',
  kategoria_id    TINYINT UNSIGNED    NOT NULL,
  etel_nev        VARCHAR(120)        NOT NULL,
  kep_fajl        VARCHAR(255)        NULL     DEFAULT NULL,
  megjegyzes      VARCHAR(500)        NULL     DEFAULT NULL,
  letrehozva      TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_het_nap (het_id, nap_sorsz),
  CONSTRAINT fk_etel_het      FOREIGN KEY (het_id)       REFERENCES hetek(id)      ON DELETE CASCADE,
  CONSTRAINT fk_etel_kat      FOREIGN KEY (kategoria_id) REFERENCES kategoriak(id) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- ------------------------------------------------------------
--  5. MINTAADATOK – 2025-05-05-i hét (het_id = 1)
-- ------------------------------------------------------------
INSERT INTO etelek (het_id, nap_sorsz, nap_nev, kategoria_id, etel_nev, kep_fajl) VALUES
-- Hétfő
(1, 1, 'hétfő',    1, 'Újházi tyúkhúsleves',           'img/hetfo.jpg'),
(1, 1, 'hétfő',    2, 'Sült csirkecomb rizi-bizivel',   'img/hetfo.jpg'),
(1, 1, 'hétfő',    5, 'Túrórudi',                       'img/hetfo.jpg'),
-- Kedd
(1, 2, 'kedd',     1, 'Babgulyás',                      'img/kedd.jpg'),
(1, 2, 'kedd',     2, 'Mákos tészta',                   'img/kedd.jpg'),
(1, 2, 'kedd',     5, 'Alma',                           'img/kedd.jpg'),
-- Szerda
(1, 3, 'szerda',   1, 'Ponty halászlé',                 'img/szerda.jpg'),
(1, 3, 'szerda',   2, 'Rakott burgonya',                'img/szerda.jpg'),
(1, 3, 'szerda',   5, 'Szőlő',                          'img/szerda.jpg'),
-- Csütörtök
(1, 4, 'csütörtök',1, 'Csontleves',                     'img/csutortok.jpg'),
(1, 4, 'csütörtök',2, 'Bécsi szelet sült burgonyával',  'img/csutortok.jpg'),
(1, 4, 'csütörtök',4, 'Uborkasaláta',                   'img/csutortok.jpg'),
-- Péntek
(1, 5, 'péntek',   1, 'Tejszínes leves',                'img/pentek.jpg'),
(1, 5, 'péntek',   2, 'Borsófőzelék sült virslivel',    'img/pentek.jpg'),
(1, 5, 'péntek',   5, 'Kókuszgolyó',                    'img/pentek.jpg');

-- ------------------------------------------------------------
--  6. MINTAADATOK – 2025-05-12-i hét (het_id = 2)
-- ------------------------------------------------------------
INSERT INTO etelek (het_id, nap_sorsz, nap_nev, kategoria_id, etel_nev, kep_fajl) VALUES
-- Hétfő
(2, 1, 'hétfő',    1, 'Meggyleves',                     'img/hetfo2.jpg'),
(2, 1, 'hétfő',    2, 'Töltött paprika rizzsel',        'img/hetfo2.jpg'),
(2, 1, 'hétfő',    5, 'Tejberizs',                      'img/hetfo2.jpg'),
-- Kedd
(2, 2, 'kedd',     1, 'Gombaleves',                     'img/kedd2.jpg'),
(2, 2, 'kedd',     2, 'Rántott hal krumplipürével',     'img/kedd2.jpg'),
(2, 2, 'kedd',     5, 'Banán',                          'img/kedd2.jpg'),
-- Szerda
(2, 3, 'szerda',   1, 'Zöldségleves',                   'img/szerda2.jpg'),
(2, 3, 'szerda',   2, 'Csirkepaprikás galuskával',      'img/szerda2.jpg'),
(2, 3, 'szerda',   5, 'Narancs',                        'img/szerda2.jpg'),
-- Csütörtök
(2, 4, 'csütörtök',1, 'Húsleves cérnametélttel',        'img/csutortok2.jpg'),
(2, 4, 'csütörtök',2, 'Sertéspörkölt nokedlivel',       'img/csutortok2.jpg'),
(2, 4, 'csütörtök',5, 'Gyümölcssaláta',                 'img/csutortok2.jpg'),
-- Péntek
(2, 5, 'péntek',   1, 'Paradicsomleves',                'img/pentek2.jpg'),
(2, 5, 'péntek',   2, 'Lecsó tojással rizzsel',         'img/pentek2.jpg'),
(2, 5, 'péntek',   5, 'Almás rétes',                    'img/pentek2.jpg');

-- ------------------------------------------------------------
--  7. HASZNOS LEKÉRDEZÉSEK
-- ------------------------------------------------------------

-- Adott heti teljes étlap (nap és kategória szerint rendezve)
SELECT
    e.nap_nev,
    k.nev        AS kategoria,
    e.etel_nev,
    e.kep_fajl,
    h.napi_ar,
    h.heti_ar
FROM etelek e
JOIN hetek      h ON h.id = e.het_id
JOIN kategoriak k ON k.id = e.kategoria_id
WHERE h.het_kezdete = '2025-05-05'
ORDER BY e.nap_sorsz, k.sorsz;

-- Összes elérhető hét listája
SELECT id, het_kezdete, napi_ar, heti_ar FROM hetek ORDER BY het_kezdete DESC;

-- Keresés étel neve alapján
SELECT h.het_kezdete, e.nap_nev, k.nev AS kategoria, e.etel_nev
FROM etelek e
JOIN hetek      h ON h.id = e.het_id
JOIN kategoriak k ON k.id = e.kategoria_id
WHERE e.etel_nev LIKE '%csirke%'
ORDER BY h.het_kezdete DESC;
