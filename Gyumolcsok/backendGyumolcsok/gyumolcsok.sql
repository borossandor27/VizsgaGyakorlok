CREATE DATABASE IF NOT EXISTS `gyumolcs_db`;
USE `gyumolcs_db`;

CREATE TABLE `gyumolcs` (
    `gyumolcsid`	BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nev` VARCHAR(512) UNIQUE NOT NULL,
    `megjegyzes`	VARCHAR(512),
    `nev_eng`	VARCHAR(512),
    `alt_szoveg`	VARCHAR(512),
    `src`	VARCHAR(512)
);

INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Alma', 'Az alma vagy almafa a rózsafélék családjába tartozó növénynemzetség. Körülbelül 55 faj tartozik ide, melyek többsége Ázsiában, kisebb része Európában és Észak-Amerikában honos. A nemzetségbe tartozó egyedek, vagyis az almafák termésének a neve is alma.', 'apple', 'apple', 'apple.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Avokádó', 'Az avokádó a babérfélék családjába tartozó, örökzöld, alacsonyan elágazó, terebélyes ágrendszerű, 10–20 m magas fa. A mexikói fajának a neve Persea gratissima.', 'avocado', 'avocado', 'avocado.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Kókuszdió', 'A kókuszpálma az egyszikűek osztályába, a pálmavirágúak rendjébe és a pálmafélék családjába tartozó faj.', 'coconut', 'coconut', 'coconut.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Guava', 'A guava egy gyakori trópusi gyümölcs, amelyet számos trópusi és szubtrópusi régióban termesztenek. A közönséges guajava Psidium guajava a mirtuszfélék családjába tartozó kis fa, Mexikóban, Közép-Amerikában, a Karib-térségben és Dél-Amerika északi részén őshonos.', 'guava', 'guava', 'guava.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Mézbogyó', 'A mézbogyó a szappanfavirágúak rendjébe, a szappanfafélék családjába tartozó trópusi növényfaj.', 'mamoncillo', 'imoncillo', 'imoncillo.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Nagy szapota', 'A Pouteria sapota, a mamey sapote egy Mexikóban és Közép-Amerikában őshonos fafaj. A fát a Karib-térségben is termesztik. Gyümölcsét sok latin-amerikai országban fogyasztják. A gyümölcsből olyan ételeket készítenek, mint a turmix és a fagylalt.', 'mamey_sapote', 'mamey_sapote', 'mamey_sapote.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Mangó', 'A mangó (Mangifera indica) a szappanfavirágúak (Sapindales) rendjébe sorolt szömörcefélék (Anacardiaceae) családjában a Mangifera nemzetség típusfaja — édes ízű, egzotikus gyümölcsöt termő fa. Mai neve az indiai man-gay portugál formájából (manga) származik. Az indiaiak szent fája.', 'mango', 'mango', 'mango.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Arany alma', 'Az aranyalma  különböző legendákban szerepel, amelyek egy hőst (például Herkulest vagy Făt-Frumost ) ábrázolnak, amint visszahozza az ellenfél által elrejtett vagy ellopott aranyalmákat . Az aranyalma az ír mitológiában a túlvilág ezüstágán is megjelenik ', 'manzana_de_oro', 'manzana_de_aro', 'manzana_de_aro.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Papaya', 'A papaja vagy dinnyefa a keresztesvirágúak rendjébe és a dinnyefafélék családjába tartozó faj. Gyümölcse szintén papaja néven ismert.', 'papaya', 'papaya', 'papaya.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Passiógyümölcs', 'A passiógyümölcs és a granadilla a Passiflora nemzetség számos növényének gyümölcse. Dél-Amerika szubtrópusi vidékein őshonos Brazília déli részétől Paraguayon át Észak-Argentínáig. A gyümölcsöt héja és magja miatt, valamint gyümölcsléként fogyasztják.', 'passion_fruit', 'passion_fruit', 'passion_fruit.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Ananász', 'Az ananász az egyszikűek osztályába, a perjevirágúak rendjébe és a broméliafélék családjába tartozó nemzetség.', 'pineapple', 'pineapple', 'pineapple.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Sárkánygyümölcs', 'A pitaja nagyobb és gyakran finomabb is, mint a kaktuszfüge. Húsa fehér, vörös vagy lila; magja kisebb, kevésbé zavarja a gyümölcsevés élvezetét. Héja élvezhetetlen. Illata semleges, íze frissítő és finoman savanykás, egy kicsit az egresére emlékeztet.', 'pitaya', 'pitaya', 'pitaya.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Főzőbanán', 'A főzőbanán a Musa nemzetségbe tartozó banánfajták csoportja, amelynek gyümölcseit általában főzéshez használják. Nem fogyasztják nyersen, és általában keményítőtartalmúak. Sok főzési banánt útifűnek vagy „zöld banánnak” neveznek.', 'plantain', 'plantain', 'plantain.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Tüskés annóna', 'A szúrszop vagy tüskés annóna a liliomfa-virágúak rendjébe, ezen belül az annónafélék családjába tartozó faj. Nemzetségének a típusfaja.', 'soursop', 'soursop', 'soursop.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Csillaggyümölcs', 'A karambola, más néven csillaggyümölcs, az Averrhoa carambola gyümölcse, amely a trópusi Délkelet-Ázsiában őshonos fafaj. Az ehető gyümölcs oldalain jellegzetes gerincek futnak le. Keresztmetszetben vágva csillaghoz hasonlít, így a csillaggyümölcs elnevezést kapja.', 'starfruit', 'starfruit', 'starfruit.png');
INSERT INTO `gyumolcs` (`nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES ('Tamarind', 'A tamarindusz a kétszikűek osztályában a hüvelyesek rendjébe sorolt pillangósvirágúak családjának egyik monotipikus nemzetsége; egyetlen faja a többnyire egyszerűen csak tamarindnak nevezett indiai tamarindusz. Neve az arab-indiai tamar és hindi szavakból ered.', 'tamarind', 'tamarind', 'tamarind.png');

CREATE TABLE `erkezes` (
  `gyumolcsid` bigint(20) UNSIGNED NOT NULL,
  `mennyiseg` int(11) NOT NULL,
  `egysegar` decimal(10,2) NOT NULL,
  `erkezett` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `erkezes` ADD CONSTRAINT `fk_gyumolcsid` FOREIGN KEY (`gyumolcsid`) REFERENCES `gyumolcs`(`gyumolcsid`);

INSERT INTO erkezes (gyumolcsid, mennyiseg, egysegar, erkezett) VALUES
(1, 120, 199.00, '2026-01-10 08:30:00'),   -- Alma
(2, 45, 799.00, '2026-01-12 09:00:00'),    -- Avokádó
(3, 30, 999.00, '2026-01-15 10:15:00'),    -- Kókuszdió
(4, 60, 649.00, '2026-01-18 11:45:00'),    -- Guava
(5, 25, 899.00, '2026-01-20 13:00:00'),    -- Mézbogyó
(6, 15, 1299.00, '2026-01-22 14:30:00'),   -- Nagy szapota
(7, 80, 499.00, '2026-01-25 08:00:00'),    -- Mangó
(8, 10, 1999.00, '2026-01-27 16:00:00'),   -- Arany alma
(9, 55, 559.00, '2026-01-28 09:45:00'),    -- Papaya
(10, 40, 699.00, '2026-01-30 12:00:00'),   -- Passiógyümölcs
(11, 90, 459.00, '2026-02-02 08:30:00'),   -- Ananász
(12, 35, 1099.00, '2026-02-04 10:00:00'),  -- Sárkánygyümölcs
(13, 70, 299.00, '2026-02-06 07:45:00'),   -- Főzőbanán
(14, 20, 1399.00, '2026-02-08 15:15:00'),  -- Tüskés annóna
(15, 50, 749.00, '2026-02-10 11:30:00'),   -- Csillaggyümölcs
(16, 65, 399.00, '2026-02-12 09:00:00');   -- Tamarind

INSERT INTO erkezes (gyumolcsid, mennyiseg, egysegar, erkezett) VALUES
-- Alma (1)
(1, 80, 189.00, '2026-02-15 07:30:00'),
(1, 150, 209.00, '2026-03-05 09:00:00'),

-- Avokádó (2)
(2, 30, 829.00, '2026-02-18 10:15:00'),
(2, 60, 789.00, '2026-03-10 08:45:00'),

-- Mangó (7)
(7, 100, 479.00, '2026-02-20 06:30:00'),
(7, 120, 519.00, '2026-03-12 07:00:00'),

-- Papaya (9)
(9, 40, 549.00, '2026-02-22 11:00:00'),
(9, 70, 579.00, '2026-03-08 10:30:00'),

-- Ananász (11)
(11, 60, 449.00, '2026-02-25 08:00:00'),
(11, 110, 469.00, '2026-03-15 09:15:00'),

-- Főzőbanán (13)
(13, 90, 289.00, '2026-02-28 06:45:00'),
(13, 140, 309.00, '2026-03-18 07:30:00'),

-- Csillaggyümölcs (15)
(15, 25, 769.00, '2026-02-27 12:00:00'),
(15, 40, 729.00, '2026-03-20 13:15:00'),

-- Tamarind (16)
(16, 50, 389.00, '2026-03-01 09:00:00'),
(16, 90, 419.00, '2026-03-22 10:00:00');
