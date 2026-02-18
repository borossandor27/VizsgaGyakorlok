--
-- Adatbázis: `diaknyilvantartas`
--
CREATE DATABASE IF NOT EXISTS `diaknyilvantartas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `diaknyilvantartas`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `diakok`
--

CREATE TABLE `diakok` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `szuletes_datum` date DEFAULT NULL,
  `osztaly` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `diakok`
--

INSERT INTO `diakok` (`id`, `nev`, `szuletes_datum`, `osztaly`) VALUES
(1, 'Balogh Ádám', '2008-01-15', '10.A'),
(2, 'Csonka Beáta', '2008-02-20', '10.A'),
(3, 'Dudás Csilla', '2008-03-10', '10.A'),
(4, 'Fekete Dávid', '2008-04-05', '10.A'),
(5, 'Gál Erik', '2008-05-12', '10.A'),
(6, 'Hajdu Flóra', '2008-06-18', '10.A'),
(7, 'Juhász Gergő', '2008-07-25', '10.A'),
(8, 'Kelemen Hanna', '2008-08-30', '10.A'),
(9, 'Lakatos Imre', '2008-09-14', '10.A'),
(10, 'Mészáros Janka', '2008-10-22', '10.A'),
(11, 'Nagy Kevin', '2007-01-05', '11.B'),
(12, 'Oláh Laura', '2007-02-12', '11.B'),
(13, 'Pál Márk', '2007-03-20', '11.B'),
(14, 'Rácz Nóra', '2007-04-28', '11.B'),
(15, 'Sándor Olivér', '2007-05-15', '11.B'),
(16, 'Takács Petra', '2007-06-22', '11.B'),
(17, 'Varga Roland', '2007-07-07', '11.B'),
(18, 'Veres Szonja', '2007-08-19', '11.B'),
(19, 'Zsigmond Tibor', '2007-09-30', '11.B'),
(20, 'Barna Vivien', '2007-10-11', '11.B');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jegyek`
--

CREATE TABLE `jegyek` (
  `id` int(11) NOT NULL,
  `diak_id` int(11) DEFAULT NULL,
  `tantargy_id` int(11) DEFAULT NULL,
  `erdemjegy` int(11) DEFAULT NULL CHECK (`erdemjegy` between 1 and 5),
  `datum` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `jegyek`
--

INSERT INTO `jegyek` (`id`, `diak_id`, `tantargy_id`, `erdemjegy`, `datum`) VALUES
(1, 1, 1, 5, '2024-02-01'),
(2, 1, 1, 4, '2024-02-15'),
(3, 1, 3, 3, '2024-02-10'),
(4, 2, 2, 2, '2024-02-05'),
(5, 2, 8, 5, '2024-02-20'),
(6, 3, 4, 4, '2024-02-11'),
(7, 11, 1, 3, '2024-02-01'),
(8, 11, 9, 5, '2024-02-08'),
(9, 20, 10, 4, '2024-02-12'),
(10, 15, 1, 5, '2024-04-26'),
(11, 12, 2, 1, '2024-04-23'),
(12, 8, 8, 4, '2024-02-12'),
(13, 10, 1, 5, '2024-03-03'),
(14, 13, 5, 1, '2024-03-31'),
(15, 1, 7, 2, '2024-02-26'),
(16, 7, 1, 3, '2024-05-10'),
(17, 18, 9, 4, '2024-02-02'),
(18, 19, 5, 4, '2024-02-27'),
(19, 9, 1, 5, '2024-03-11'),
(20, 20, 1, 1, '2024-02-13'),
(21, 9, 10, 2, '2024-04-03'),
(22, 17, 6, 2, '2024-02-21'),
(23, 15, 2, 3, '2024-04-20'),
(24, 3, 7, 4, '2024-04-10'),
(25, 18, 6, 1, '2024-02-15'),
(26, 4, 4, 3, '2024-03-09'),
(27, 16, 7, 2, '2024-04-07'),
(28, 17, 7, 1, '2024-05-09'),
(29, 12, 7, 1, '2024-04-29'),
(30, 14, 5, 2, '2024-04-08'),
(31, 17, 7, 2, '2024-04-30'),
(32, 12, 7, 3, '2024-04-29'),
(33, 14, 4, 1, '2024-02-09'),
(34, 12, 6, 1, '2024-04-24'),
(35, 14, 8, 3, '2024-05-07'),
(36, 15, 4, 1, '2024-03-10'),
(37, 12, 9, 1, '2024-04-27'),
(38, 13, 6, 1, '2024-03-08'),
(39, 12, 4, 3, '2024-02-01'),
(40, 14, 5, 3, '2024-02-11'),
(41, 15, 5, 3, '2024-04-21'),
(42, 16, 4, 3, '2024-05-01'),
(43, 13, 4, 2, '2024-02-15'),
(44, 12, 9, 2, '2024-02-16'),
(45, 11, 8, 3, '2024-02-04'),
(46, 14, 6, 1, '2024-03-10'),
(47, 17, 9, 1, '2024-05-07'),
(48, 11, 9, 1, '2024-03-08'),
(49, 18, 9, 2, '2024-03-10'),
(50, 17, 4, 3, '2024-03-08'),
(51, 17, 5, 3, '2024-05-24'),
(52, 15, 8, 3, '2024-04-07'),
(53, 18, 5, 2, '2024-04-26'),
(54, 18, 8, 1, '2024-05-03'),
(55, 17, 7, 1, '2024-05-03'),
(56, 11, 4, 1, '2024-05-29'),
(57, 12, 8, 2, '2024-04-29'),
(58, 14, 4, 3, '2024-03-29'),
(59, 15, 7, 1, '2024-04-18'),
(60, 13, 7, 3, '2024-03-31'),
(61, 11, 7, 3, '2024-04-22'),
(62, 16, 7, 2, '2024-03-06');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tanarok`
--

CREATE TABLE `tanarok` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tanszek` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `tanarok`
--

INSERT INTO `tanarok` (`id`, `nev`, `email`, `tanszek`) VALUES
(1, 'Horgas Csaba', 'horgas@iskola.hu', 'Reál'),
(2, 'Vass Edit', 'vass@iskola.hu', 'Humán'),
(3, 'Kovács Gábor', 'kovacs.g@iskola.hu', 'Testnevelés'),
(4, 'Németh Ilona', 'nemeth@iskola.hu', 'Reál'),
(5, 'Szabó László', 'szabo.l@iskola.hu', 'Informatika'),
(6, 'Molnár Krisztina', 'molnar@iskola.hu', 'Idegen nyelv'),
(7, 'Papp Tamás', 'papp@iskola.hu', 'Humán');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tantargyak`
--

CREATE TABLE `tantargyak` (
  `id` int(11) NOT NULL,
  `targy_nev` varchar(50) NOT NULL,
  `tanar_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `tantargyak`
--

INSERT INTO `tantargyak` (`id`, `targy_nev`, `tanar_id`) VALUES
(1, 'Matematika', 1),
(2, 'Fizika', 1),
(3, 'Történelem', 2),
(4, 'Magyar nyelv', 2),
(5, 'Testnevelés', 3),
(6, 'Kémia', 4),
(7, 'Biológia', 4),
(8, 'Informatika', 5),
(9, 'Angol', 6),
(10, 'Földrajz', 7);

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `teljesiskolairiport`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `teljesiskolairiport` (
`Diak_Neve` varchar(100)
,`Osztaly` varchar(10)
,`Tantargy` varchar(50)
,`Tanar_Neve` varchar(100)
,`Jegy` int(11)
,`Datum` date
);

-- --------------------------------------------------------

--
-- Nézet szerkezete `teljesiskolairiport`
--
DROP TABLE IF EXISTS `teljesiskolairiport`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `teljesiskolairiport`  AS SELECT `d`.`nev` AS `Diak_Neve`, `d`.`osztaly` AS `Osztaly`, `t`.`targy_nev` AS `Tantargy`, `tan`.`nev` AS `Tanar_Neve`, `j`.`erdemjegy` AS `Jegy`, `j`.`datum` AS `Datum` FROM (((`jegyek` `j` join `diakok` `d` on(`j`.`diak_id` = `d`.`id`)) join `tantargyak` `t` on(`j`.`tantargy_id` = `t`.`id`)) join `tanarok` `tan` on(`t`.`tanar_id` = `tan`.`id`)) ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `diakok`
--
ALTER TABLE `diakok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `jegyek`
--
ALTER TABLE `jegyek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `diak_id` (`diak_id`),
  ADD KEY `tantargy_id` (`tantargy_id`);

--
-- A tábla indexei `tanarok`
--
ALTER TABLE `tanarok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `tantargyak`
--
ALTER TABLE `tantargyak`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tanar_id` (`tanar_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `diakok`
--
ALTER TABLE `diakok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT a táblához `jegyek`
--
ALTER TABLE `jegyek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT a táblához `tanarok`
--
ALTER TABLE `tanarok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `tantargyak`
--
ALTER TABLE `tantargyak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jegyek`
--
ALTER TABLE `jegyek`
  ADD CONSTRAINT `jegyek_ibfk_1` FOREIGN KEY (`diak_id`) REFERENCES `diakok` (`id`),
  ADD CONSTRAINT `jegyek_ibfk_2` FOREIGN KEY (`tantargy_id`) REFERENCES `tantargyak` (`id`);

--
-- Megkötések a táblához `tantargyak`
--
ALTER TABLE `tantargyak`
  ADD CONSTRAINT `tantargyak_ibfk_1` FOREIGN KEY (`tanar_id`) REFERENCES `tanarok` (`id`);
