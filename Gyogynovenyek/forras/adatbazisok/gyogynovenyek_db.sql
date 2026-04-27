-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Ápr 27. 20:21
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
-- Adatbázis: `gyogynovenyek_db`
--
CREATE DATABASE IF NOT EXISTS `gyogynovenyek_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `gyogynovenyek_db`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyogynoven`
--

CREATE TABLE `gyogynoven` (
  `azon` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `fajta` varchar(150) DEFAULT NULL,
  `lelohely_id` int(11) NOT NULL,
  `gyujtes_eve` int(11) NOT NULL,
  `hasznositas` varchar(50) NOT NULL,
  `URL` varchar(500) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `gyogynoven`
--

INSERT INTO `gyogynoven` (`azon`, `nev`, `fajta`, `lelohely_id`, `gyujtes_eve`, `hasznositas`, `URL`) VALUES
(1, 'közönséges kamilla', 'Matricaria chamomilla', 3, 2021, 'gyógyászat', ''),
(2, 'orvosi zsálya', 'Salvia officinalis', 7, 2019, 'gyógyászat', ''),
(3, 'fodormenta', 'Mentha spicata', 12, 2022, 'élelmiszer', ''),
(4, 'orvosi levendula', 'Lavandula angustifolia', 5, 2020, 'kozmetika', ''),
(5, 'közönséges orbáncfű', 'Hypericum perforatum', 2, 2021, 'gyógyászat', ''),
(6, 'fekete bodza', 'Sambucus nigra', 9, 2018, 'élelmiszer', ''),
(7, 'orvosi borágó', 'Borago officinalis', 14, 2022, 'gyógyászat', ''),
(8, 'közönséges cickafark', 'Achillea millefolium', 1, 2020, 'gyógyászat', ''),
(9, 'kerti kapor', 'Anethum graveolens', 6, 2023, 'élelmiszer', ''),
(10, 'orvosi citromfű', 'Melissa officinalis', 11, 2019, 'gyógyászat', 'kepek/1.jpg'),
(11, 'kerti rozmaring', 'Salvia rosmarinus', 5, 2021, 'élelmiszer', 'kepek/2.jpg'),
(12, 'fehér üröm', 'Artemisia absinthium', 8, 2018, 'gyógyászat', 'kepek/3.jpg'),
(13, 'közönséges kakukkfű', 'Thymus vulgaris', 3, 2022, 'élelmiszer', 'kepek/4.jpg'),
(14, 'orvosi mályva', 'Malva sylvestris', 10, 2020, 'gyógyászat', 'kepek/5.jpg'),
(15, 'mezei zsurló', 'Equisetum arvense', 4, 2019, 'gyógyászat', 'kepek/6.jpg'),
(16, 'orvosi körömvirág', 'Calendula officinalis', 7, 2023, 'kozmetika', 'kepek/7.jpg'),
(17, 'nagy útifű', 'Plantago major', 2, 2021, 'gyógyászat', 'kepek/8.jpg'),
(18, 'fekete nadálytő', 'Symphytum officinale', 13, 2020, 'gyógyászat', 'kepek/9.jpg'),
(19, 'közönséges macskagyökér', 'Valeriana officinalis', 6, 2022, 'gyógyászat', 'kepek/10.jpg'),
(20, 'orvosi ánizs', 'Pimpinella anisum', 1, 2018, 'élelmiszer', ''),
(21, 'kerti zsálya', 'Salvia officinalis', 9, 2023, 'kozmetika', ''),
(22, 'hegyi árnika', 'Arnica montana', 15, 2021, 'gyógyászat', ''),
(23, 'fehér mályva', 'Althaea officinalis', 4, 2019, 'gyógyászat', ''),
(24, 'közönséges galaj', 'Galium aparine', 11, 2020, 'gyógyászat', ''),
(25, 'orvosi gólyaorr', 'Geranium robertianum', 8, 2022, 'gyógyászat', ''),
(26, 'kerti kakukkfű', 'Thymus vulgaris', 14, 2023, 'élelmiszer', ''),
(27, 'orvosi párlófű', 'Agrimonia eupatoria', 3, 2018, 'gyógyászat', ''),
(28, 'közönséges lizinka', 'Lysimachia vulgaris', 10, 2021, 'gyógyászat', ''),
(29, 'erdei mályva', 'Malva neglecta', 7, 2022, 'gyógyászat', ''),
(30, 'orvosi katáng', 'Cichorium intybus', 2, 2020, 'élelmiszer', ''),
(31, 'kerti borkóró', 'Tanacetum vulgare', 5, 2019, 'gyógyászat', ''),
(32, 'mezei árvácska', 'Viola tricolor', 12, 2023, 'kozmetika', ''),
(33, 'orvosi nadragulya', 'Atropa belladonna', 1, 2021, 'gyógyászat', ''),
(34, 'közönséges páfrány', 'Dryopteris filix-mas', 9, 2022, 'gyógyászat', ''),
(35, 'kerti majoranna', 'Origanum majorana', 6, 2020, 'élelmiszer', ''),
(36, 'fehér here', 'Trifolium repens', 4, 2018, 'gyógyászat', ''),
(37, 'orvosi csucsor', 'Solanum dulcamara', 13, 2023, 'gyógyászat', ''),
(38, 'mezei kökörcsin', 'Pulsatilla pratensis', 15, 2021, 'kozmetika', ''),
(39, 'kerti tárkony', 'Artemisia dracunculus', 8, 2019, 'élelmiszer', ''),
(40, 'közönséges ibolya', 'Viola odorata', 3, 2022, 'kozmetika', '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `lelohely`
--

CREATE TABLE `lelohely` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `megyeid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `lelohely`
--

INSERT INTO `lelohely` (`id`, `nev`, `megyeid`) VALUES
(1, 'Eger', 10),
(2, 'Miskolc', 10),
(3, 'Pécs', 2),
(4, 'Debrecen', 9),
(5, 'Keszthely', 19),
(6, 'Győr', 7),
(7, 'Sopron', 7),
(8, 'Veszprém', 18),
(9, 'Szombathely', 17),
(10, 'Kaposvár', 14),
(11, 'Esztergom', 11),
(12, 'Szeged', 16),
(13, 'Nyíregyháza', 15),
(14, 'Szekszárd', 17),
(15, 'Aggtelek', 10);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `megye`
--

CREATE TABLE `megye` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `megye`
--

INSERT INTO `megye` (`id`, `nev`) VALUES
(2, 'Baranya'),
(7, 'Győr-Moson-Sopron'),
(9, 'Hajdú-Bihar'),
(10, 'Heves'),
(11, 'Komárom-Esztergom'),
(14, 'Somogy'),
(15, 'Szabolcs-Szatmár-Bereg'),
(16, 'Csongrád-Csanád'),
(17, 'Vas'),
(18, 'Veszprém'),
(19, 'Zala');

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `osszes`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `osszes` (
`azon` int(11)
,`nev` varchar(100)
,`fajta` varchar(150)
,`lelohely_id` int(11)
,`gyujtes_eve` int(11)
,`hasznositas` varchar(50)
,`URL` varchar(500)
,`lelohely_helyseg` varchar(100)
,`megyenev` varchar(100)
,`id` int(11)
);

-- --------------------------------------------------------

--
-- Nézet szerkezete `osszes`
--
DROP TABLE IF EXISTS `osszes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `osszes`  AS SELECT `gyogynoven`.`azon` AS `azon`, `gyogynoven`.`nev` AS `nev`, `gyogynoven`.`fajta` AS `fajta`, `gyogynoven`.`lelohely_id` AS `lelohely_id`, `gyogynoven`.`gyujtes_eve` AS `gyujtes_eve`, `gyogynoven`.`hasznositas` AS `hasznositas`, `gyogynoven`.`URL` AS `URL`, `lelohely`.`nev` AS `lelohely_helyseg`, `megye`.`nev` AS `megyenev`, `megye`.`id` AS `id` FROM ((`gyogynoven` join `lelohely` on(`gyogynoven`.`lelohely_id` = `lelohely`.`id`)) join `megye` on(`lelohely`.`megyeid` = `megye`.`id`)) ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `gyogynoven`
--
ALTER TABLE `gyogynoven`
  ADD PRIMARY KEY (`azon`),
  ADD KEY `lelohely_id` (`lelohely_id`);

--
-- A tábla indexei `lelohely`
--
ALTER TABLE `lelohely`
  ADD PRIMARY KEY (`id`),
  ADD KEY `megyeid` (`megyeid`);

--
-- A tábla indexei `megye`
--
ALTER TABLE `megye`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `gyogynoven`
--
ALTER TABLE `gyogynoven`
  MODIFY `azon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT a táblához `lelohely`
--
ALTER TABLE `lelohely`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `megye`
--
ALTER TABLE `megye`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `gyogynoven`
--
ALTER TABLE `gyogynoven`
  ADD CONSTRAINT `gyogynoven_ibfk_1` FOREIGN KEY (`lelohely_id`) REFERENCES `lelohely` (`id`);

--
-- Megkötések a táblához `lelohely`
--
ALTER TABLE `lelohely`
  ADD CONSTRAINT `lelohely_ibfk_1` FOREIGN KEY (`megyeid`) REFERENCES `megye` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
