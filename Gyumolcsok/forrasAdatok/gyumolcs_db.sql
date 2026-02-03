-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 03. 15:28
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `gyumolcs_db`
--
CREATE DATABASE IF NOT EXISTS `gyumolcs_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `gyumolcs_db`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `erkezes`
--

CREATE TABLE `erkezes` (
  `gyumolcsid` bigint(20) UNSIGNED NOT NULL,
  `mennyiseg` int(11) NOT NULL,
  `egysegar` decimal(10,2) NOT NULL,
  `erkezett` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `erkezes`
--

INSERT INTO `erkezes` (`gyumolcsid`, `mennyiseg`, `egysegar`, `erkezett`) VALUES
(1, 120, 199.00, '2026-01-10 08:30:00'),
(2, 45, 799.00, '2026-01-12 09:00:00'),
(3, 30, 999.00, '2026-01-15 10:15:00'),
(4, 60, 649.00, '2026-01-18 11:45:00'),
(5, 25, 899.00, '2026-01-20 13:00:00'),
(6, 15, 1299.00, '2026-01-22 14:30:00'),
(7, 80, 499.00, '2026-01-25 08:00:00'),
(8, 10, 1999.00, '2026-01-27 16:00:00'),
(9, 55, 559.00, '2026-01-28 09:45:00'),
(10, 40, 699.00, '2026-01-30 12:00:00'),
(11, 90, 459.00, '2026-02-02 08:30:00'),
(12, 35, 1099.00, '2026-02-04 10:00:00'),
(13, 70, 299.00, '2026-02-06 07:45:00'),
(14, 20, 1399.00, '2026-02-08 15:15:00'),
(15, 50, 749.00, '2026-02-10 11:30:00'),
(16, 65, 399.00, '2026-02-12 09:00:00'),
(1, 80, 189.00, '2026-02-15 07:30:00'),
(1, 150, 209.00, '2026-03-05 09:00:00'),
(2, 30, 829.00, '2026-02-18 10:15:00'),
(2, 60, 789.00, '2026-03-10 08:45:00'),
(7, 100, 479.00, '2026-02-20 06:30:00'),
(7, 120, 519.00, '2026-03-12 07:00:00'),
(9, 40, 549.00, '2026-02-22 11:00:00'),
(9, 70, 579.00, '2026-03-08 10:30:00'),
(11, 60, 449.00, '2026-02-25 08:00:00'),
(11, 110, 469.00, '2026-03-15 09:15:00'),
(13, 90, 289.00, '2026-02-28 06:45:00'),
(13, 140, 309.00, '2026-03-18 07:30:00'),
(15, 25, 769.00, '2026-02-27 12:00:00'),
(15, 40, 729.00, '2026-03-20 13:15:00'),
(16, 50, 389.00, '2026-03-01 09:00:00'),
(16, 90, 419.00, '2026-03-22 10:00:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyumolcs`
--

CREATE TABLE `gyumolcs` (
  `gyumolcsid` bigint(20) UNSIGNED NOT NULL,
  `nev` varchar(512) NOT NULL,
  `megjegyzes` varchar(512) DEFAULT NULL,
  `nev_eng` varchar(512) DEFAULT NULL,
  `alt_szoveg` varchar(512) DEFAULT NULL,
  `src` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gyumolcs`
--

INSERT INTO `gyumolcs` (`gyumolcsid`, `nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES
(1, 'Alma', 'Az alma vagy almafa a rózsafélék családjába tartozó növénynemzetség. Körülbelül 55 faj tartozik ide, melyek többsége Ázsiában, kisebb része Európában és Észak-Amerikában honos. A nemzetségbe tartozó egyedek, vagyis az almafák termésének a neve is alma.', 'apple', 'apple', 'apple.png'),
(2, 'Avokádó', 'Az avokádó a babérfélék családjába tartozó, örökzöld, alacsonyan elágazó, terebélyes ágrendszerű, 10–20 m magas fa. A mexikói fajának a neve Persea gratissima.', 'avocado', 'avocado', 'avocado.png'),
(3, 'Kókuszdió', 'A kókuszpálma az egyszikűek osztályába, a pálmavirágúak rendjébe és a pálmafélék családjába tartozó faj.', 'coconut', 'coconut', 'coconut.png'),
(4, 'Guava', 'A guava egy gyakori trópusi gyümölcs, amelyet számos trópusi és szubtrópusi régióban termesztenek. A közönséges guajava Psidium guajava a mirtuszfélék családjába tartozó kis fa, Mexikóban, Közép-Amerikában, a Karib-térségben és Dél-Amerika északi részén őshonos.', 'guava', 'guava', 'guava.png'),
(5, 'Mézbogyó', 'A mézbogyó a szappanfavirágúak rendjébe, a szappanfafélék családjába tartozó trópusi növényfaj.', 'mamoncillo', 'imoncillo', 'imoncillo.png'),
(6, 'Nagy szapota', 'A Pouteria sapota, a mamey sapote egy Mexikóban és Közép-Amerikában őshonos fafaj. A fát a Karib-térségben is termesztik. Gyümölcsét sok latin-amerikai országban fogyasztják. A gyümölcsből olyan ételeket készítenek, mint a turmix és a fagylalt.', 'mamey_sapote', 'mamey_sapote', 'mamey_sapote.png'),
(7, 'Mangó', 'A mangó (Mangifera indica) a szappanfavirágúak (Sapindales) rendjébe sorolt szömörcefélék (Anacardiaceae) családjában a Mangifera nemzetség típusfaja — édes ízű, egzotikus gyümölcsöt termő fa. Mai neve az indiai man-gay portugál formájából (manga) származik. Az indiaiak szent fája.', 'mango', 'mango', 'mango.png'),
(8, 'Arany alma', 'Az aranyalma  különböző legendákban szerepel, amelyek egy hőst (például Herkulest vagy Făt-Frumost ) ábrázolnak, amint visszahozza az ellenfél által elrejtett vagy ellopott aranyalmákat . Az aranyalma az ír mitológiában a túlvilág ezüstágán is megjelenik ', 'manzana_de_oro', 'manzana_de_aro', 'manzana_de_aro.png'),
(9, 'Papaya', 'A papaja vagy dinnyefa a keresztesvirágúak rendjébe és a dinnyefafélék családjába tartozó faj. Gyümölcse szintén papaja néven ismert.', 'papaya', 'papaya', 'papaya.png'),
(10, 'Passiógyümölcs', 'A passiógyümölcs és a granadilla a Passiflora nemzetség számos növényének gyümölcse. Dél-Amerika szubtrópusi vidékein őshonos Brazília déli részétől Paraguayon át Észak-Argentínáig. A gyümölcsöt héja és magja miatt, valamint gyümölcsléként fogyasztják.', 'passion_fruit', 'passion_fruit', 'passion_fruit.png'),
(11, 'Ananász', 'Az ananász az egyszikűek osztályába, a perjevirágúak rendjébe és a broméliafélék családjába tartozó nemzetség.', 'pineapple', 'pineapple', 'pineapple.png'),
(12, 'Sárkánygyümölcs', 'A pitaja nagyobb és gyakran finomabb is, mint a kaktuszfüge. Húsa fehér, vörös vagy lila; magja kisebb, kevésbé zavarja a gyümölcsevés élvezetét. Héja élvezhetetlen. Illata semleges, íze frissítő és finoman savanykás, egy kicsit az egresére emlékeztet.', 'pitaya', 'pitaya', 'pitaya.png'),
(13, 'Főzőbanán', 'A főzőbanán a Musa nemzetségbe tartozó banánfajták csoportja, amelynek gyümölcseit általában főzéshez használják. Nem fogyasztják nyersen, és általában keményítőtartalmúak. Sok főzési banánt útifűnek vagy „zöld banánnak” neveznek.', 'plantain', 'plantain', 'plantain.png'),
(14, 'Tüskés annóna', 'A szúrszop vagy tüskés annóna a liliomfa-virágúak rendjébe, ezen belül az annónafélék családjába tartozó faj. Nemzetségének a típusfaja.', 'soursop', 'soursop', 'soursop.png'),
(15, 'Csillaggyümölcs', 'A karambola, más néven csillaggyümölcs, az Averrhoa carambola gyümölcse, amely a trópusi Délkelet-Ázsiában őshonos fafaj. Az ehető gyümölcs oldalain jellegzetes gerincek futnak le. Keresztmetszetben vágva csillaghoz hasonlít, így a csillaggyümölcs elnevezést kapja.', 'starfruit', 'starfruit', 'starfruit.png'),
(16, 'Tamarind', 'A tamarindusz a kétszikűek osztályában a hüvelyesek rendjébe sorolt pillangósvirágúak családjának egyik monotipikus nemzetsége; egyetlen faja a többnyire egyszerűen csak tamarindnak nevezett indiai tamarindusz. Neve az arab-indiai tamar és hindi szavakból ered.', 'tamarind', 'tamarind', 'tamarind.png');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `erkezes`
--
ALTER TABLE `erkezes`
  ADD KEY `fk_gyumolcsid` (`gyumolcsid`);

--
-- A tábla indexei `gyumolcs`
--
ALTER TABLE `gyumolcs`
  ADD PRIMARY KEY (`gyumolcsid`),
  ADD UNIQUE KEY `nev` (`nev`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `gyumolcs`
--
ALTER TABLE `gyumolcs`
  MODIFY `gyumolcsid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `erkezes`
--
ALTER TABLE `erkezes`
  ADD CONSTRAINT `fk_gyumolcsid` FOREIGN KEY (`gyumolcsid`) REFERENCES `gyumolcs` (`gyumolcsid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
