-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Ápr 26. 17:45
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
-- Adatbázis: `furdo_db`
--
CREATE DATABASE IF NOT EXISTS `furdo_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `furdo_db`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `furdo`
--

CREATE TABLE `furdo` (
  `azon` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `tipus` varchar(50) NOT NULL,
  `medencek` int(11) NOT NULL DEFAULT 1,
  `belepodij` int(11) NOT NULL DEFAULT 0,
  `varos_id` int(11) NOT NULL,
  `nyitas_eve` int(11) NOT NULL,
  `URL` varchar(500) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `furdo`
--

INSERT INTO `furdo` (`azon`, `nev`, `tipus`, `medencek`, `belepodij`, `varos_id`, `nyitas_eve`, `URL`) VALUES
(1, 'Széchenyi Gyógyfürdő', 'gyógyfürdő', 18, 4600, 1, 1913, 'kepek/1.jpg'),
(2, 'Gellért Gyógyfürdő', 'gyógyfürdő', 13, 5200, 1, 1918, 'kepek/2.jpg'),
(3, 'Rudas Gyógyfürdő', 'gyógyfürdő', 5, 3800, 1, 1550, 'kepek/3.jpg'),
(4, 'Lukács Gyógyfürdő', 'gyógyfürdő', 8, 3600, 1, 1884, 'kepek/4.jpg'),
(5, 'Palatinus Strandfürdő', 'strand', 11, 2900, 1, 1919, 'kepek/5.jpg'),
(6, 'Dagály Strandfürdő', 'strand', 10, 3100, 1, 1948, 'kepek/6.jpg'),
(7, 'Paskál Fürdő', 'gyógyfürdő', 6, 2800, 1, 1982, 'kepek/7.jpg'),
(8, 'Római Strandfürdő', 'strand', 7, 2500, 1, 1924, 'kepek/8.jpg'),
(9, 'Hévízi Tófürdő', 'gyógyfürdő', 4, 5400, 10, 1795, 'kepek/9.jpg'),
(10, 'Aquaticum Debrecen', 'élményfürdő', 12, 4200, 2, 2001, 'kepek/10.jpg'),
(11, 'Miskolctapolcai Barlangfürdő', 'gyógyfürdő', 6, 3600, 3, 1959, ''),
(12, 'Élővíz Fürdő Miskolc', 'strand', 5, 2200, 3, 2005, ''),
(13, 'Hungarospa Hajdúszoboszló', 'gyógyfürdő', 15, 4800, 11, 1925, ''),
(14, 'Sárvári Gyógyfürdő', 'gyógyfürdő', 9, 3900, 12, 1988, ''),
(15, 'Bükfürdő', 'gyógyfürdő', 10, 4100, 13, 1975, ''),
(16, 'Zalakarosi Fürdő', 'gyógyfürdő', 11, 4300, 14, 1994, ''),
(17, 'Városi Termálfürdő Gyula', 'gyógyfürdő', 8, 3200, 15, 1961, ''),
(18, 'Tatai Fürdők', 'strand', 9, 2800, 16, 1954, ''),
(19, 'Soproni Lővérek Fürdő', 'strand', 6, 2600, 17, 1968, ''),
(20, 'Anna Gyógyfürdő Balatonfüred', 'gyógyfürdő', 5, 3500, 18, 1937, ''),
(21, 'Zalaegerszegi Termálfürdő', 'gyógyfürdő', 7, 3000, 19, 2000, ''),
(22, 'Esztergomi Termálfürdő', 'gyógyfürdő', 6, 2900, 20, 1997, ''),
(23, 'Mosonmagyaróvári Termálfürdő', 'gyógyfürdő', 8, 3300, 21, 1986, ''),
(24, 'Cserkeszőlői Termálfürdő', 'gyógyfürdő', 9, 3100, 22, 1978, ''),
(25, 'Zsóry Fürdő Mezőkövesd', 'gyógyfürdő', 7, 3400, 23, 1930, ''),
(26, 'Aquapark Debrecen', 'élményfürdő', 8, 4500, 2, 2015, ''),
(27, 'Eger Termálfürdő', 'gyógyfürdő', 9, 3700, 9, 1962, ''),
(28, 'Dobogó Strandfürdő Eger', 'strand', 5, 2700, 9, 1973, ''),
(29, 'Pécs Hőközpont Fürdő', 'gyógyfürdő', 6, 3200, 4, 2003, ''),
(30, 'Győri Termálfürdő', 'gyógyfürdő', 8, 3000, 5, 1985, ''),
(31, 'Nyíregyháza Sóstói Gyógyfürdő', 'gyógyfürdő', 7, 3100, 6, 1948, ''),
(32, 'Bugaci Termálfürdő', 'gyógyfürdő', 5, 2400, 7, 2009, ''),
(33, 'Szeged Napfényfürdő Aquapolis', 'élményfürdő', 14, 4700, 8, 2011, ''),
(34, 'Bogácsi Gyógyfürdő', 'gyógyfürdő', 6, 2900, 24, 1968, ''),
(35, 'Kehidakustányi Gyógyfürdő', 'gyógyfürdő', 7, 3600, 25, 1998, ''),
(36, 'Aquasziget Sopron', 'élményfürdő', 9, 4000, 17, 2007, ''),
(37, 'Velencei-tó Fürdő', 'strand', 5, 2600, 16, 2004, ''),
(38, 'Miskolc Aquaworld', 'élményfürdő', 10, 4400, 3, 2019, ''),
(39, 'Győr Aquapark', 'élményfürdő', 11, 4600, 5, 2014, ''),
(40, 'Pécs Aquapark', 'élményfürdő', 8, 4200, 4, 2012, ''),
(41, 'Nyíregyházi Aquarius Fürdő', 'élményfürdő', 10, 3900, 6, 2008, ''),
(42, 'Kecskeméti Élményfürdő', 'élményfürdő', 9, 3800, 7, 2016, ''),
(43, 'Szegedi Termálfürdő', 'gyógyfürdő', 5, 2800, 8, 1958, ''),
(44, 'Veli Bej Gyógyfürdő', 'gyógyfürdő', 5, 4200, 1, 1574, ''),
(45, 'Királyok Fürdője', 'gyógyfürdő', 4, 3500, 1, 1565, '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `megye`
--

CREATE TABLE `megye` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `megye`
--

INSERT INTO `megye` (`id`, `nev`) VALUES
(1, 'Baranya'),
(2, 'Bács-Kiskun'),
(3, 'Békés'),
(4, 'Borsod-Abaúj-Zemplén'),
(5, 'Csongrád-Csanád'),
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
(19, 'Zala'),
(20, 'Budapest (főváros)');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `varos`
--

CREATE TABLE `varos` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `megye_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `varos`
--

INSERT INTO `varos` (`id`, `nev`, `megye_id`) VALUES
(1, 'Budapest', 13),
(2, 'Debrecen', 9),
(3, 'Miskolc', 5),
(4, 'Pécs', 14),
(5, 'Győr', 7),
(6, 'Nyíregyháza', 15),
(7, 'Kecskemét', 2),
(8, 'Szeged', 6),
(9, 'Eger', 10),
(10, 'Hévíz', 20),
(11, 'Hajdúszoboszló', 9),
(12, 'Sárvár', 18),
(13, 'Bük', 18),
(14, 'Zalakaros', 20),
(15, 'Gyula', 3),
(16, 'Tata', 11),
(17, 'Sopron', 7),
(18, 'Balatonfüred', 19),
(19, 'Zalaegerszeg', 20),
(20, 'Esztergom', 11),
(21, 'Mosonmagyaróvár', 7),
(22, 'Cserkeszőlő', 16),
(23, 'Mezőkövesd', 5),
(24, 'Bogács', 5),
(25, 'Kehidakustány', 20);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `furdo`
--
ALTER TABLE `furdo`
  ADD PRIMARY KEY (`azon`),
  ADD KEY `fk_furdo_varos` (`varos_id`);

--
-- A tábla indexei `megye`
--
ALTER TABLE `megye`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `varos`
--
ALTER TABLE `varos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_varos_megye` (`megye_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `furdo`
--
ALTER TABLE `furdo`
  MODIFY `azon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT a táblához `megye`
--
ALTER TABLE `megye`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `furdo`
--
ALTER TABLE `furdo`
  ADD CONSTRAINT `fk_furdo_varos` FOREIGN KEY (`varos_id`) REFERENCES `varos` (`id`);

--
-- Megkötések a táblához `varos`
--
ALTER TABLE `varos`
  ADD CONSTRAINT `fk_varos_megye` FOREIGN KEY (`megye_id`) REFERENCES `megye` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
