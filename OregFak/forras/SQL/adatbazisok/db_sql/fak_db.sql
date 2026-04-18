-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:8889
-- Létrehozás ideje: 2026. Feb 07. 19:14
-- Kiszolgáló verziója: 8.0.40
-- PHP verzió: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `fak_db`
--
CREATE DATABASE IF NOT EXISTS `fak_db` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci;
USE `fak_db`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `fa`
--

CREATE TABLE `fa` (
  `azon` int NOT NULL,
  `faj` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `kormeret` int DEFAULT NULL,
  `telepules_id` int DEFAULT NULL,
  `meres` int DEFAULT NULL,
  `URL` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `fa`
--

INSERT INTO `fa` (`azon`, `faj`, `kormeret`, `telepules_id`, `meres`, `URL`) VALUES
(1, 'közönséges bükk', 420, 1, 2007, ''),
(2, 'kocsányos tölgy', 527, 2, 2010, ''),
(3, 'közönséges bükk', 423, 3, 2009, ''),
(4, 'közönséges bükk', 470, 4, 2008, ''),
(5, 'kocsányos tölgy', 603, 5, 2002, ''),
(6, 'közönséges bükk', 407, 6, 2010, ''),
(7, 'magas kőris', 595, 7, 2007, ''),
(8, 'kocsányos tölgy', 657, 8, 2003, ''),
(9, 'közönséges bükk', 403, 9, 2008, ''),
(10, 'hárs', 474, 10, 2003, ''),
(11, 'fekete nyár', 760, 11, 2011, ''),
(15, 'kocsányos tölgy', 503, 15, 2009, ''),
(16, 'kocsányos tölgy', 553, 16, 2004, ''),
(18, 'szelídgesztenye', 694, 18, 2009, ''),
(19, 'házi berkenye', 258, 19, 2011, ''),
(20, 'hegyi szil', 430, 13, 2009, ''),
(23, 'mocsárciprus', 516, 21, 2003, ''),
(25, 'csertölgy', 554, 22, 2004, ''),
(26, 'ostorfa', 362, 23, 2010, ''),
(27, 'juharlevelű platán', 737, 24, 2004, ''),
(28, 'közönséges bükk', 402, 25, 2007, ''),
(31, 'közönséges bükk', 482, 26, 2007, ''),
(33, 'fehér eper', 482, 28, 2011, ''),
(34, 'ginkgo', 435, 29, 2007, ''),
(35, 'közönséges bükk', 434, 30, 2010, ''),
(37, 'kocsányos tölgy', 500, 31, 2009, ''),
(38, 'közönséges bükk', 400, 32, 2011, ''),
(40, 'mezei szil', 475, 34, 2009, ''),
(43, 'kocsányos tölgy', 529, 35, 2005, ''),
(44, 'közönséges bükk', 476, 36, 2004, ''),
(47, 'ostorfa', 344, 37, 2009, ''),
(49, 'kocsányos tölgy', 589, 38, 2004, ''),
(51, 'fekete nyár', 853, 39, 2011, ''),
(52, 'fűz', 709, 40, 2010, ''),
(73, 'kocsányos tölgy', 557, 12, 2004, ''),
(82, 'kocsányos tölgy', 574, 20, 2011, ''),
(89, 'kislevelű hárs', 561, 17, 2008, ''),
(92, 'közönséges bükk', 491, 14, 2009, ''),
(97, 'kislevelű hárs', 491, 27, 2009, ''),
(99, 'közönséges bükk', 473, 32, 2011, ''),
(119, 'juharlevelű platán', 600, 80, 2003, ''),
(120, 'szelídgesztenye', 515, 81, 2011, ''),
(121, 'kocsányos tölgy', 611, 82, 2005, ''),
(122, 'kocsányos tölgy', 564, 83, 2010, ''),
(123, 'közönséges bükk', 430, 84, 2009, ''),
(124, 'juharlevelű platán', 660, 85, 2004, ''),
(125, 'fekete nyár', 735, 86, 2007, '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `megye`
--

CREATE TABLE `megye` (
  `id` int NOT NULL,
  `nev` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `megye`
--

INSERT INTO `megye` (`id`, `nev`) VALUES
(1, 'Bács-Kiskun'),
(2, 'Baranya'),
(3, 'Békés'),
(4, 'Borsod-Abaúj-Zemplén'),
(5, 'Csongrád'),
(6, 'Fejér'),
(7, 'Győr-Moson-Sopron'),
(8, 'Hajdú-Bihar'),
(9, 'Heves'),
(10, 'Jász-Nagykun-Szolnok'),
(11, 'Komárom-Esztergom'),
(12, 'Nógrád'),
(13, 'Pest'),
(14, 'Somogy'),
(15, 'Szabolcs-Szatmár-Bereg'),
(16, 'Tolna'),
(17, 'Vas'),
(18, 'Veszprém'),
(19, 'Zala');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `telepules`
--

CREATE TABLE `telepules` (
  `id` int NOT NULL,
  `nev` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `megyeid` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `telepules`
--

INSERT INTO `telepules` (`id`, `nev`, `megyeid`) VALUES
(1, 'Bükkszentkereszt', 4),
(2, 'Őcsény', 16),
(3, 'Vásárosbéc', 2),
(4, 'Herend', 18),
(5, 'Belezna', 19),
(6, 'Eszteregnye', 19),
(7, 'Csobád', 4),
(8, 'Hetényegyháza', 1),
(9, 'Sikonda', 2),
(10, 'Szeleste', 17),
(11, 'Tahitótfalu', 13),
(12, 'Kerkafalva', 19),
(13, 'Fenékpuszta', 19),
(14, 'Pénzesgyőr', 18),
(15, 'Túristvándi', 15),
(16, 'Kálócfa', 19),
(17, 'Monostorapáti', 18),
(18, 'Bak', 19),
(19, 'Zengővárkony', 2),
(20, 'Somogytarnóca', 14),
(21, 'Martonvásár', 6),
(22, 'Nagyrécse', 19),
(23, 'Mezőhegyes', 3),
(24, 'Eger', 9),
(25, 'Háromkő', 9),
(26, 'Felsőmarác', 17),
(27, 'Zirc', 18),
(28, 'Pilisvörösvár', 13),
(29, 'Iharos', 14),
(30, 'Olaszfalu', 18),
(31, 'Golop', 4),
(32, 'Püspökszentlászló', 2),
(33, 'Algyő', 5),
(34, 'Kisgörbő', 19),
(35, 'Lad', 14),
(36, 'Tátika', 19),
(37, 'Kajdacs', 16),
(38, 'Parádfürdő', 9),
(39, 'Rákóczifalva', 10),
(40, 'Gemenc', 1),
(41, 'Gemenc', 16),
(42, 'Hárskút', 18),
(43, 'Sárvár', 17),
(44, 'Somogytúr', 14),
(45, 'Szekszárd', 16),
(46, 'Csokonyavisonta', 14),
(47, 'Kőszeg', 17),
(48, 'Mátraverebély', 12),
(49, 'Iharosberény', 14),
(80, 'Cégénydányád', 15),
(81, 'Egervár', 19),
(82, 'Mike', 14),
(83, 'Pacsérvisnye', 14),
(84, 'Bánkút', 4),
(85, 'Pápa', 18),
(86, 'Szegvár', 5),
(87, 'Diósjenő', 12),
(88, 'Nagykáta', 13),
(89, 'Mezőcsokonya', 14),
(90, 'Kislőd', 18),
(91, 'Sopron', 7),
(92, 'Fadd', 16),
(93, 'Szászvár', 2),
(94, 'Kéked', 4),
(95, 'Belegrád', 4),
(96, 'Gyenesdiás', 19),
(97, 'Vinye', 7),
(98, 'Bagamér', 8),
(99, 'Csákánydoroszló', 17);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `fa`
--
ALTER TABLE `fa`
  ADD PRIMARY KEY (`azon`),
  ADD KEY `telepules_id` (`telepules_id`);

--
-- A tábla indexei `megye`
--
ALTER TABLE `megye`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `telepules`
--
ALTER TABLE `telepules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `megyeid` (`megyeid`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `fa`
--
ALTER TABLE `fa`
  MODIFY `azon` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT a táblához `telepules`
--
ALTER TABLE `telepules`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `fa`
--
ALTER TABLE `fa`
  ADD CONSTRAINT `fa_ibfk_1` FOREIGN KEY (`telepules_id`) REFERENCES `telepules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `telepules`
--
ALTER TABLE `telepules`
  ADD CONSTRAINT `telepules_ibfk_1` FOREIGN KEY (`megyeid`) REFERENCES `megye` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
