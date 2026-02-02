-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 02. 20:06
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
-- Adatbázis: `userregister`
--
CREATE DATABASE IF NOT EXISTS `userregister` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `userregister`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `birthday`) VALUES
(1, 'Kovács János', 'janos.kovacs@email.hu', '1985-05-12'),
(2, 'Nagy Erzsébet', 'erzsi.nagy@webmail.hu', '1992-03-24'),
(3, 'Tóth Gábor', 'gabor.toth@provider.com', '1978-11-02'),
(4, 'Kiss Dóra', 'dora.kiss@freemail.hu', '1995-07-15'),
(5, 'Molnár Péter', 'peter.molnar@ceg.hu', '1988-01-30'),
(6, 'Szabó Anna', 'anna.szabo@teszt.hu', '2000-09-10'),
(7, 'Farkas Balázs', 'balazs.farkas@email.hu', '1982-06-21'),
(8, 'Horváth Katalin', 'kati.horvath@iroda.hu', '1991-12-05'),
(9, 'Varga László', 'laszlo.varga@tarsasag.hu', '1975-04-18'),
(10, 'Mészáros Eszter', 'eszter.meszaros@webmail.hu', '1998-08-27'),
(11, 'Simon Tamás', 'tamas.simon@email.hu', '1989-02-11'),
(12, 'Bakos Zsófia', 'zsofia.bakos@freemail.hu', '1994-10-03'),
(13, 'Balogh Miklós', 'miklos.balogh@domain.hu', '1981-05-20'),
(14, 'Kelemen Rita', 'rita.kelemen@teszt.hu', '1990-03-14'),
(15, 'Papp Attila', 'attila.papp@provider.hu', '1972-11-28'),
(16, 'Fekete Zoltán', 'zoltan.fekete@email.hu', '1986-07-07'),
(17, 'Szalai Júlia', 'julia.szalai@webmail.hu', '1997-01-22'),
(18, 'Takács Gergő', 'gergo.takacs@ceg.hu', '1984-09-30'),
(19, 'Juhász Emese', 'emese.juhasz@iroda.hu', '1993-06-16'),
(20, 'Németh András', 'andras.nemeth@tarsasag.hu', '1980-12-12');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
