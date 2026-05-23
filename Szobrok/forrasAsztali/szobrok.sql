-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:8889
-- Létrehozás ideje: 2026. Már 21. 13:57
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
-- Adatbázis: `szobrok`
--
CREATE DATABASE IF NOT EXISTS `szobrok` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci;
USE `szobrok`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `alkoto`
--

CREATE TABLE `alkoto` (
  `id` int NOT NULL,
  `nev` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `nem` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `szulev` int DEFAULT NULL,
  `szulhely` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `alkoto`
--

INSERT INTO `alkoto` (`id`, `nev`, `nem`, `szulev`, `szulhely`) VALUES
(1, 'Kurucz Imre', 'F', 1946, 'Berettyóújfalu'),
(2, 'Farkas Aladár', 'F', 1909, 'Újpest'),
(4, 'Lakatos Pál Sándor', 'F', 1960, 'Kispeleske'),
(5, 'Kocsis András Sándor', 'F', 1954, 'Budapest'),
(7, 'Vadász György', 'F', 1933, 'Budapest'),
(15, 'Kalmár Katalin', 'N', 1970, 'Szeged'),
(41, 'Herczeg Klára', 'N', 1906, 'Budapest'),
(45, 'Fáskerti Zsófia', 'N', 1979, 'Budapest'),
(51, 'B. Szabó Edit', 'N', 1938, 'Debrecen'),
(52, 'Bolgár Judit', 'N', 1924, 'Kisvárda'),
(5000, 'Tesztelő Tanuló', 'F', 2000, 'Budapest');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kapcsolat`
--

CREATE TABLE `kapcsolat` (
  `szoborid` int NOT NULL,
  `alkotoid` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `kapcsolat`
--

INSERT INTO `kapcsolat` (`szoborid`, `alkotoid`) VALUES
(439, 1),
(2574, 1),
(30, 2),
(307, 2),
(2464, 2),
(474, 4),
(950, 4),
(1635, 4),
(2015, 4),
(2624, 4),
(285, 5),
(1450, 5),
(1708, 5),
(2078, 5),
(2446, 5),
(2094, 7),
(3362, 15),
(1690, 41),
(2567, 41),
(3151, 41),
(3100, 45),
(3349, 45),
(800, 51),
(1498, 52),
(1736, 52),
(1987, 52);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szobor`
--

CREATE TABLE `szobor` (
  `id` int NOT NULL,
  `szemely` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci NOT NULL,
  `hely` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL,
  `avatas` int DEFAULT NULL,
  `rogzites` date DEFAULT NULL,
  `kep_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `szobor`
--

INSERT INTO `szobor` (`id`, `szemely`, `hely`, `avatas`, `rogzites`, `kep_url`) VALUES
(30, 'Ho-Si-Minh', 'Budapest', 1970, '2008-12-31', NULL),
(285, 'Rodolfo', 'Budapest', 2011, '2011-07-15', NULL),
(307, 'Petőfi Sándor', 'Püspökladány', 1996, '2012-09-24', NULL),
(439, 'Bocskai István', 'Biharkeresztes', 1990, '2009-05-04', NULL),
(474, 'Michelberger Pál', 'Kecskemét', 2014, '2014-10-18', NULL),
(800, 'Jedlik Ányos', 'Budapest', 1968, '2009-04-08', NULL),
(950, 'Hardy Gyula', 'Kecskemét', 2004, '2008-05-10', NULL),
(1450, 'Horn Gyula', 'Marcali', 2013, '2013-10-30', NULL),
(1498, 'Beszédes József', 'Székesfehérvár', 1973, '2009-07-04', NULL),
(1635, 'Zorkóczy Béla', 'Miskolc-Egyetemváros', 1996, '2009-11-10', NULL),
(1690, 'Hunyadi János', 'Mezőkovácsháza', 1977, '2010-04-11', NULL),
(1708, 'Benyovszky Móric', 'Rigyác', 2009, '2018-11-28', NULL),
(1736, 'Vedres István', 'Szeged', 1979, '2014-11-13', NULL),
(1987, 'Vedres István', 'Szeged', 1975, '2010-03-29', NULL),
(2015, 'Michelberger Pál', 'Budapest', 2016, '2016-03-26', NULL),
(2078, 'Ördögh Szilveszter', 'Budapest', 2017, '2017-04-24', NULL),
(2094, 'Bezerédj István', 'Szedres', 1988, '2006-06-26', NULL),
(2446, 'Fejtő Ferenc', 'Budapest', 2008, '2009-06-09', NULL),
(2464, 'Vándor Sándor', 'Tiszaújváros', 1987, '2009-07-13', NULL),
(2567, 'Mikszáth Kálmán', 'Balassagyarmat', 1962, '2010-07-25', NULL),
(2574, 'Bessenyei György', 'Bakonszeg', 1991, '2010-11-09', NULL),
(2624, 'Neumann János', 'Kecskemét', 2002, '2008-05-10', NULL),
(3100, 'Óvári Ferenc', 'Balatonalmádi', 2018, '2018-05-03', NULL),
(3151, 'Mikszáth Kálmán', 'Mohora', 1979, '2009-12-28', NULL),
(3349, 'Kablay Lajos', 'Szolnok', 2002, '2010-08-09', NULL),
(3362, 'Csány László', 'Keszthely', 1998, '2011-01-14', NULL);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `alkoto`
--
ALTER TABLE `alkoto`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `kapcsolat`
--
ALTER TABLE `kapcsolat`
  ADD PRIMARY KEY (`szoborid`,`alkotoid`),
  ADD KEY `alkotoid` (`alkotoid`);

--
-- A tábla indexei `szobor`
--
ALTER TABLE `szobor`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `alkoto`
--
ALTER TABLE `alkoto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5001;

--
-- AUTO_INCREMENT a táblához `szobor`
--
ALTER TABLE `szobor`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3363;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `kapcsolat`
--
ALTER TABLE `kapcsolat`
  ADD CONSTRAINT `kapcsolat_ibfk_1` FOREIGN KEY (`alkotoid`) REFERENCES `alkoto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `kapcsolat_ibfk_2` FOREIGN KEY (`szoborid`) REFERENCES `szobor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
