-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Ápr 18. 18:23
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
-- Adatbázis: `utazas`
--
CREATE DATABASE IF NOT EXISTS `utazas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `utazas`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `celorszagok`
--

CREATE TABLE `celorszagok` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `kontines` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `celorszagok`
--

INSERT INTO `celorszagok` (`id`, `nev`, `kontines`) VALUES
(1, 'Görögország', 'Európa'),
(2, 'Olaszország', 'Európa'),
(3, 'Spanyolország', 'Európa'),
(4, 'Egyesült Arab Emírségek', 'Ázsia'),
(5, 'Csehország', 'Európa'),
(6, 'Maldív-szigetek', 'Ázsia');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `csomagok`
--

CREATE TABLE `csomagok` (
  `id` int(11) NOT NULL,
  `nev` varchar(200) NOT NULL,
  `uticel_varos` varchar(100) NOT NULL,
  `celorszag_id` int(11) NOT NULL,
  `indulas` date NOT NULL,
  `idotartam_ej` int(11) NOT NULL,
  `szallas_tipus` varchar(100) NOT NULL,
  `ar_fo` int(11) NOT NULL,
  `max_fo` int(11) NOT NULL,
  `statusz` enum('elerheto','feltoltodik','lezart') NOT NULL DEFAULT 'elerheto',
  `leiras` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `csomagok`
--

INSERT INTO `csomagok` (`id`, `nev`, `uticel_varos`, `celorszag_id`, `indulas`, `idotartam_ej`, `szallas_tipus`, `ar_fo`, `max_fo`, `statusz`, `leiras`) VALUES
(1, 'Görög nyár', 'Santorini', 1, '2025-07-10', 7, 'Hotel ★★★★', 285000, 30, 'elerheto', 'Fedezze fel Santorini lenyűgöző fehérre meszelt házait, a kék kupolás templomokat és a csodálatos naplementét. A csomag félpanziós ellátást és fakultatív hajókirándulást is tartalmaz.'),
(2, 'Toscana körutazás', 'Firenze', 2, '2025-08-03', 5, 'Panzió ★★★', 198000, 20, 'feltoltodik', 'Barangolja be Toszkána legszebb városait Firenze központtal. A program tartalmaz városnézést, borkóstolót és egy egész napos kirándulást Pisa és Siena városába.'),
(3, 'Barcelonai hétvége', 'Barcelona', 3, '2025-09-19', 3, 'Hotel ★★★', 142000, 40, 'elerheto', 'Töltse a hétvégét Barcelona szívében, látogassa meg a Sagrada Famíliát, a Ramblát és élvezze a mediterrán tengerpart hangulatát. Reggelis ellátással.'),
(4, 'Dubaji fény', 'Dubai', 4, '2025-11-14', 6, 'Hotel ★★★★★', 520000, 15, 'elerheto', 'Luxusutazás Dubai legmodernebb negyedeibe. A csomag tartalmaz sivatagi szafarit, városnézést, valamint belépőt a Burj Khalifa kilátójába.'),
(5, 'Prágai városnézés', 'Prága', 5, '2025-10-04', 4, 'Apartman', 118000, 25, 'feltoltodik', 'Fedezze fel Prága történelmi belvárosát, a Károly hidat és a várnegyedet. Kiváló választás rövid városlátogatáshoz, önellátó apartman elhelyezéssel.'),
(6, 'Maldív-szigetek', 'Malé', 6, '2025-06-28', 10, 'Vízibungaló ★★★★★', 890000, 10, 'lezart', 'Exkluzív pihenés a Maldív-szigetek kristálytiszta vizű partjain. A csomag all inclusive ellátást, búvárprogramot és közvetlen vízparti bungalót biztosít.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `foglalasok`
--

CREATE TABLE `foglalasok` (
  `id` int(11) NOT NULL,
  `csomag_id` int(11) NOT NULL,
  `ugyfel_id` int(11) NOT NULL,
  `utazok_szama` int(11) NOT NULL DEFAULT 1,
  `szoba_tipus` enum('egyagyas','ketagyas','franciaagyas','apartman','lakosztalyos') NOT NULL,
  `ellatas` enum('RO','BB','HB','FB','AI') NOT NULL DEFAULT 'BB',
  `kulonleges_keres` text DEFAULT NULL,
  `foglalva` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `foglalasok`
--

INSERT INTO `foglalasok` (`id`, `csomag_id`, `ugyfel_id`, `utazok_szama`, `szoba_tipus`, `ellatas`, `kulonleges_keres`, `foglalva`) VALUES
(1, 1, 1, 2, 'franciaagyas', 'BB', NULL, '2026-04-18 18:18:37'),
(2, 1, 2, 1, 'egyagyas', 'HB', 'Allergias, gluténmentes étkezés kérése', '2026-04-18 18:18:37'),
(3, 1, 4, 4, 'apartman', 'AI', NULL, '2026-04-18 18:18:37'),
(4, 2, 3, 2, 'ketagyas', 'BB', NULL, '2026-04-18 18:18:37'),
(5, 2, 5, 2, 'franciaagyas', 'HB', 'Nászút – különleges dekoráció kérése', '2026-04-18 18:18:37'),
(6, 2, 7, 1, 'egyagyas', 'RO', NULL, '2026-04-18 18:18:37'),
(7, 3, 6, 3, 'apartman', 'BB', NULL, '2026-04-18 18:18:37'),
(8, 3, 8, 2, 'ketagyas', 'HB', 'Korai bejelentkezés kérése (12:00 előtt)', '2026-04-18 18:18:37'),
(9, 4, 1, 2, 'lakosztalyos', 'AI', NULL, '2026-04-18 18:18:37'),
(10, 4, 2, 1, 'egyagyas', 'FB', NULL, '2026-04-18 18:18:37'),
(11, 5, 3, 2, 'franciaagyas', 'BB', NULL, '2026-04-18 18:18:37'),
(12, 5, 4, 1, 'egyagyas', 'BB', 'Felső emeleti szoba kérése', '2026-04-18 18:18:37'),
(13, 6, 5, 2, 'lakosztalyos', 'AI', NULL, '2026-04-18 18:18:37'),
(14, 6, 6, 2, 'franciaagyas', 'AI', NULL, '2026-04-18 18:18:37');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ugyfelek`
--

CREATE TABLE `ugyfelek` (
  `id` int(11) NOT NULL,
  `nev` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefon` varchar(30) DEFAULT NULL,
  `regisztralt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `ugyfelek`
--

INSERT INTO `ugyfelek` (`id`, `nev`, `email`, `telefon`, `regisztralt`) VALUES
(1, 'Kovács Anna', 'kovacsanna@email.hu', '+36 30 111 2233', '2026-04-18 18:18:37'),
(2, 'Nagy Péter', 'nagypeter@email.hu', '+36 20 444 5566', '2026-04-18 18:18:37'),
(3, 'Tóth Eszter', 'totheszter@email.hu', NULL, '2026-04-18 18:18:37'),
(4, 'Szabó Bence', 'szabobence@email.hu', '+36 70 777 8899', '2026-04-18 18:18:37'),
(5, 'Varga Réka', 'vargareka@email.hu', '+36 30 222 3344', '2026-04-18 18:18:37'),
(6, 'Horváth Gábor', 'horvathgabor@email.hu', NULL, '2026-04-18 18:18:37'),
(7, 'Kiss Mónika', 'kissmoni@email.hu', '+36 20 555 6677', '2026-04-18 18:18:37'),
(8, 'Fekete Dávid', 'feketedavid@email.hu', '+36 70 888 9900', '2026-04-18 18:18:37');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `celorszagok`
--
ALTER TABLE `celorszagok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `csomagok`
--
ALTER TABLE `csomagok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `celorszag_id` (`celorszag_id`);

--
-- A tábla indexei `foglalasok`
--
ALTER TABLE `foglalasok`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `egy_ugyfel_egy_csomag` (`csomag_id`,`ugyfel_id`),
  ADD KEY `ugyfel_id` (`ugyfel_id`);

--
-- A tábla indexei `ugyfelek`
--
ALTER TABLE `ugyfelek`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `celorszagok`
--
ALTER TABLE `celorszagok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `csomagok`
--
ALTER TABLE `csomagok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `foglalasok`
--
ALTER TABLE `foglalasok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `ugyfelek`
--
ALTER TABLE `ugyfelek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `csomagok`
--
ALTER TABLE `csomagok`
  ADD CONSTRAINT `csomagok_ibfk_1` FOREIGN KEY (`celorszag_id`) REFERENCES `celorszagok` (`id`);

--
-- Megkötések a táblához `foglalasok`
--
ALTER TABLE `foglalasok`
  ADD CONSTRAINT `foglalasok_ibfk_1` FOREIGN KEY (`csomag_id`) REFERENCES `csomagok` (`id`),
  ADD CONSTRAINT `foglalasok_ibfk_2` FOREIGN KEY (`ugyfel_id`) REFERENCES `ugyfelek` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
