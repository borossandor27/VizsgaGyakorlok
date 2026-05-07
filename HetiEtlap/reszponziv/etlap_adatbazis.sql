-- ============================================================
--  Vasmunkás Étterem – adatbázis séma (n:m kapcsolótáblával)
--  Kompatibilis: MySQL 8+ / MariaDB 10.4+
-- ============================================================

CREATE DATABASE IF NOT EXISTS vasmunkas_etterem
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_hungarian_ci;

USE vasmunkas_etterem;

-- ------------------------------------------------------------
--  1. KATEGÓRIÁK (változatlan)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS kategoriak (
  id     TINYINT UNSIGNED  NOT NULL AUTO_INCREMENT,
  kod    VARCHAR(20)       NOT NULL UNIQUE COMMENT 'pl. leves, foetal, dessert',
  nev    VARCHAR(60)       NOT NULL,
  sorsz  TINYINT UNSIGNED  NOT NULL DEFAULT 1 COMMENT 'megjelenítési sorrend',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO kategoriak (kod, nev, sorsz) VALUES
  ('leves',   'Leves',               1),
  ('foetal',  'Főétel',              2),
  ('koret',   'Köret',               3),
  ('salata',  'Saláta',              4),
  ('dessert', 'Desszert / Gyümölcs', 5);

-- ------------------------------------------------------------
--  2. HETEK (változatlan)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS hetek (
  id             SMALLINT UNSIGNED  NOT NULL AUTO_INCREMENT,
  het_kezdete    DATE               NOT NULL COMMENT 'mindig hétfő',
  napi_ar        SMALLINT UNSIGNED  NOT NULL DEFAULT 999,
  heti_ar        SMALLINT UNSIGNED  NOT NULL DEFAULT 4500,
  heti_ar_lista  SMALLINT UNSIGNED  NOT NULL DEFAULT 4995 COMMENT 'áthúzott listaár',
  lezart         TINYINT(1)         NOT NULL DEFAULT 0,
  letrehozva     TIMESTAMP          NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_het_kezdete (het_kezdete)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO hetek (het_kezdete, napi_ar, heti_ar, heti_ar_lista) VALUES
  ('2025-05-05', 999, 4500, 4995),
  ('2025-05-12', 999, 4500, 4995);

-- ------------------------------------------------------------
--  3. ÉTELEK TÖRZSTÁBLA – minden étel egyszer szerepel
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS etelek (
  id            INT UNSIGNED      NOT NULL AUTO_INCREMENT,
  etel_nev      VARCHAR(120)      NOT NULL,
  kategoria_id  TINYINT UNSIGNED  NOT NULL,
  kep_fajl      VARCHAR(255)      NULL DEFAULT NULL,
  megjegyzes    VARCHAR(500)      NULL DEFAULT NULL,
  letrehozva    TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_etel_nev (etel_nev),
  CONSTRAINT fk_etel_kat FOREIGN KEY (kategoria_id)
    REFERENCES kategoriak(id) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO etelek (etel_nev, kategoria_id, kep_fajl) VALUES
-- Levesek
('Újházi tyúkhúsleves',          1, 'img/ujhazi.jpg'),
('Babgulyás',                    1, 'img/babgulyas.jpg'),
('Ponty halászlé',               1, 'img/halaszle.jpg'),
('Csontleves',                   1, 'img/csontleves.jpg'),
('Tejszínes leves',              1, 'img/tejszines.jpg'),
('Meggyleves',                   1, 'img/meggyleves.jpg'),
('Gombaleves',                   1, 'img/gombaleves.jpg'),
('Zöldségleves',                 1, 'img/zoldsegleves.jpg'),
('Húsleves cérnametélttel',      1, 'img/husleves.jpg'),
('Paradicsomleves',              1, 'img/paradicsom.jpg'),
-- Főételek
('Sült csirkecomb rizi-bizivel', 2, 'img/csirkecomb.jpg'),
('Mákos tészta',                 2, 'img/makos.jpg'),
('Rakott burgonya',              2, 'img/rakott.jpg'),
('Bécsi szelet sült burgonyával',2, 'img/becsi.jpg'),
('Borsófőzelék sült virslivel',  2, 'img/borsofoz.jpg'),
('Töltött paprika rizzsel',      2, 'img/toltott.jpg'),
('Rántott hal krumplipürével',   2, 'img/rantott.jpg'),
('Csirkepaprikás galuskával',    2, 'img/paprikas.jpg'),
('Sertéspörkölt nokedlivel',     2, 'img/porkolt.jpg'),
('Lecsó tojással rizzsel',       2, 'img/lecso.jpg'),
-- Saláták
('Uborkasaláta',                 4, 'img/uborka.jpg'),
-- Desszertek / Gyümölcs
('Túrórudi',                     5, 'img/turorudi.jpg'),
('Alma',                         5, NULL),
('Szőlő',                        5, NULL),
('Kókuszgolyó',                  5, 'img/kokusz.jpg'),
('Tejberizs',                    5, 'img/tejberizs.jpg'),
('Banán',                        5, NULL),
('Narancs',                      5, NULL),
('Gyümölcssaláta',               5, 'img/gyumolcs.jpg'),
('Almás rétes',                  5, 'img/retes.jpg');

-- ------------------------------------------------------------
--  4. KAPCSOLÓTÁBLA – melyik étel, melyik héten, melyik napon
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS het_etel (
  id          INT UNSIGNED      NOT NULL AUTO_INCREMENT,
  het_id      SMALLINT UNSIGNED NOT NULL,
  etel_id     INT UNSIGNED      NOT NULL,
  nap_sorsz   TINYINT UNSIGNED  NOT NULL COMMENT '1=H, 2=K, 3=Sze, 4=Cs, 5=P',
  nap_nev     VARCHAR(20)       NOT NULL COMMENT 'hétfő / kedd stb.',
  sorrend     TINYINT UNSIGNED  NOT NULL DEFAULT 1 COMMENT 'tálalási sorrend a napon belül',
  PRIMARY KEY (id),
  UNIQUE KEY uq_het_nap_etel (het_id, nap_sorsz, etel_id),
  KEY idx_het_nap (het_id, nap_sorsz),
  CONSTRAINT fk_hetetel_het  FOREIGN KEY (het_id)  REFERENCES hetek(id)  ON DELETE CASCADE,
  CONSTRAINT fk_hetetel_etel FOREIGN KEY (etel_id) REFERENCES etelek(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- ------------------------------------------------------------
--  5. KAPCSOLÓTÁBLA FELTÖLTÉSE
--     het_id=1 → 2025-05-05,  het_id=2 → 2025-05-12
--     etel_id értékek az etelek tábla INSERT sorrendjéből
-- ------------------------------------------------------------

-- 2025-05-05-i hét
INSERT INTO het_etel (het_id, etel_id, nap_sorsz, nap_nev, sorrend) VALUES
-- Hétfő
(1,  1, 1, 'hétfő',     1),  -- Újházi tyúkhúsleves
(1, 11, 1, 'hétfő',     2),  -- Sült csirkecomb rizi-bizivel
(1, 22, 1, 'hétfő',     3),  -- Túrórudi
-- Kedd
(1,  2, 2, 'kedd',      1),  -- Babgulyás
(1, 12, 2, 'kedd',      2),  -- Mákos tészta
(1, 23, 2, 'kedd',      3),  -- Alma
-- Szerda
(1,  3, 3, 'szerda',    1),  -- Ponty halászlé
(1, 13, 3, 'szerda',    2),  -- Rakott burgonya
(1, 24, 3, 'szerda',    3),  -- Szőlő
-- Csütörtök
(1,  4, 4, 'csütörtök', 1),  -- Csontleves
(1, 14, 4, 'csütörtök', 2),  -- Bécsi szelet sült burgonyával
(1, 21, 4, 'csütörtök', 3),  -- Uborkasaláta
-- Péntek
(1,  5, 5, 'péntek',    1),  -- Tejszínes leves
(1, 15, 5, 'péntek',    2),  -- Borsófőzelék sült virslivel
(1, 25, 5, 'péntek',    3);  -- Kókuszgolyó

-- 2025-05-12-i hét
INSERT INTO het_etel (het_id, etel_id, nap_sorsz, nap_nev, sorrend) VALUES
-- Hétfő
(2,  6, 1, 'hétfő',     1),  -- Meggyleves
(2, 16, 1, 'hétfő',     2),  -- Töltött paprika rizzsel
(2, 26, 1, 'hétfő',     3),  -- Tejberizs
-- Kedd
(2,  7, 2, 'kedd',      1),  -- Gombaleves
(2, 17, 2, 'kedd',      2),  -- Rántott hal krumplipürével
(2, 27, 2, 'kedd',      3),  -- Banán
-- Szerda
(2,  8, 3, 'szerda',    1),  -- Zöldségleves
(2, 18, 3, 'szerda',    2),  -- Csirkepaprikás galuskával
(2, 28, 3, 'szerda',    3),  -- Narancs
-- Csütörtök
(2,  9, 4, 'csütörtök', 1),  -- Húsleves cérnametélttel
(2, 19, 4, 'csütörtök', 2),  -- Sertéspörkölt nokedlivel
(2, 29, 4, 'csütörtök', 3),  -- Gyümölcssaláta
-- Péntek
(2, 10, 5, 'péntek',    1),  -- Paradicsomleves
(2, 20, 5, 'péntek',    2),  -- Lecsó tojással rizzsel
(2, 30, 5, 'péntek',    3);  -- Almás rétes

-- ------------------------------------------------------------
--  6. HASZNOS LEKÉRDEZÉSEK
-- ------------------------------------------------------------

-- Adott heti teljes étlap
SELECT
    he.nap_nev,
    k.nev        AS kategoria,
    e.etel_nev,
    e.kep_fajl,
    h.napi_ar,
    h.heti_ar
FROM het_etel he
JOIN hetek      h ON h.id = he.het_id
JOIN etelek     e ON e.id = he.etel_id
JOIN kategoriak k ON k.id = e.kategoria_id
WHERE h.het_kezdete = '2025-05-05'
ORDER BY he.nap_sorsz, he.sorrend;

-- Adott étel összes előfordulása (melyik héten szerepelt)
SELECT
    h.het_kezdete,
    he.nap_nev,
    e.etel_nev
FROM het_etel he
JOIN hetek  h ON h.id = he.het_id
JOIN etelek e ON e.id = he.etel_id
WHERE e.etel_nev = 'Babgulyás'
ORDER BY h.het_kezdete;

-- Leggyakrabban szereplő ételek
SELECT
    e.etel_nev,
    k.nev AS kategoria,
    COUNT(*) AS szerepelt_heteken
FROM het_etel he
JOIN etelek     e ON e.id = he.etel_id
JOIN kategoriak k ON k.id = e.kategoria_id
GROUP BY e.id, e.etel_nev, k.nev
ORDER BY szerepelt_heteken DESC;

-- Összes elérhető hét
SELECT id, het_kezdete, napi_ar, heti_ar
FROM hetek
ORDER BY het_kezdete DESC;