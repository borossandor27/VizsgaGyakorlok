-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Ápr 18. 17:55
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
-- Adatbázis: `maraton`
--
CREATE DATABASE IF NOT EXISTS `maraton` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `maraton`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `helyszinek`
--

CREATE TABLE `helyszinek` (
  `id` int(11) NOT NULL,
  `varos` varchar(100) NOT NULL,
  `helyszin_nev` varchar(150) NOT NULL,
  `orszag` varchar(100) NOT NULL DEFAULT 'Magyarország'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `helyszinek`
--

INSERT INTO `helyszinek` (`id`, `varos`, `helyszin_nev`, `orszag`) VALUES
(1, 'Budapest', 'Hősök tere – Városliget', 'Magyarország'),
(2, 'Siófok', 'Balatoni strand, déli főkapu', 'Magyarország'),
(3, 'Debrecen', 'Nagyerdei Stadion', 'Magyarország'),
(4, 'Pécs', 'Széchenyi tér', 'Magyarország'),
(5, 'Miskolc', 'Lillafüred, Palota Szálloda előtt', 'Magyarország'),
(6, 'Győr', 'Széchenyi István Egyetem campus', 'Magyarország');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jelentkezesek`
--

CREATE TABLE `jelentkezesek` (
  `id` int(11) NOT NULL,
  `verseny_id` int(11) NOT NULL,
  `versenyzo_id` int(11) NOT NULL,
  `polo_meret` enum('XS','S','M','L','XL','XXL') NOT NULL,
  `megjegyzes` text DEFAULT NULL,
  `jelentkezve` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `jelentkezesek`
--

INSERT INTO `jelentkezesek` (`id`, `verseny_id`, `versenyzo_id`, `polo_meret`, `megjegyzes`, `jelentkezve`) VALUES
(1, 1, 1, 'S', NULL, '2026-04-18 17:40:59'),
(2, 1, 2, 'L', 'Asztmás, inhalátort hoz magával', '2026-04-18 17:40:59'),
(3, 1, 4, 'XL', NULL, '2026-04-18 17:40:59'),
(4, 2, 3, 'M', NULL, '2026-04-18 17:40:59'),
(5, 2, 5, 'S', 'Vegetáriánus étkezés kérése a célban', '2026-04-18 17:40:59'),
(6, 2, 7, 'M', NULL, '2026-04-18 17:40:59'),
(7, 3, 6, 'L', NULL, '2026-04-18 17:40:59'),
(8, 3, 8, 'XL', 'Kerekesszék-kísérő futó', '2026-04-18 17:40:59'),
(9, 4, 1, 'S', NULL, '2026-04-18 17:40:59'),
(10, 4, 2, 'L', NULL, '2026-04-18 17:40:59'),
(11, 5, 3, 'M', NULL, '2026-04-18 17:40:59'),
(12, 5, 4, 'XL', NULL, '2026-04-18 17:40:59'),
(13, 6, 5, 'S', NULL, '2026-04-18 17:40:59'),
(14, 6, 6, 'L', NULL, '2026-04-18 17:40:59'),
(15, 6, 7, 'M', NULL, '2026-04-18 17:40:59');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `versenyek`
--

CREATE TABLE `versenyek` (
  `id` int(11) NOT NULL,
  `nev` varchar(200) NOT NULL,
  `helyszin_id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `tav_km` decimal(6,3) NOT NULL,
  `nevezesi_dij` int(11) NOT NULL,
  `max_letszam` int(11) NOT NULL,
  `statusz` enum('nyitott','teli','lezart') NOT NULL DEFAULT 'nyitott',
  `leiras` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `versenyek`
--

INSERT INTO `versenyek` (`id`, `nev`, `helyszin_id`, `datum`, `tav_km`, `nevezesi_dij`, `max_letszam`, `statusz`, `leiras`) VALUES
(1, 'Budapest Maraton', 1, '2025-10-12', 42.195, 8500, 5000, 'nyitott', 'A SPAR Budapest Maraton® Fesztivál az ország legnagyobb szabadidősport-eseménye, a járványt megelőzően alkalmanként több mint 30 ezer résztvevő futott, gyalogolt a kétnapos esemény sokszínű kínálatának valamelyik távján, 2024-ben rekordot döntött, több, mint 40 ezren voltunk. Légy részese az élménynek Te is! Budapest első számú, őszi futófesztiváljára a klasszikus maratonisták mellett a rövidebb távos futókat is várjuk, sőt azokat az egyéni indulókat, baráti társaságokat és családokat is, akik talán életükben először kóstolnak bele egy ilyen esemény hangulatába.'),
(2, 'Balatoni Félmaraton', 2, '2025-09-06', 21.097, 5000, 2000, 'teli', 'A Balaton partján futni maga a szabadság és a nyugalom. Az őszi táj színei és a friss levegő feltölt energiával, miközben az év utolsó nagy futásával búcsúztatod el a szezont és készülsz fel a következő év céljaira. Ezen az eseményen garantáltan megtalálod a számításaidat, ugyanis 7 kilométertől egészen a maratoni távig teheted próbára magad – egyénileg, de párosban is. '),
(3, 'Debrecen Futófesztivál', 3, '2025-08-23', 10.000, 3200, 1500, 'nyitott', 'A Debrecen Maraton egy olyan szabadidősport esemény, amelyen a cívisváros nevezetességeit, történelmi épületeit, leghangulatosabb tereit érintve sportolók és lelkes amatőrök együtt élhetik át a futás erejét. Légy részese az elsőnek, és indulj el velünk egy felejthetetlen élményre! '),
(4, 'Pécsi Városvédő Futás', 4, '2025-07-19', 5.000, 2500, 800, 'lezart', 'A verseny célja: a futás népszerűsítése, a téli felkészülés felmérése 25,6 kilométeres távon. A Pécs-Harkány Futóversenyt minden évben megrendezzük, így könnyen összehasonlíthatóak az eredmények. A régió legrégebbi futóversenye kiváló felkészülési lehetőséget nyújt az év fontos versenyeire (maraton, félmaraton). Emellett a Pécs-Harkány Futóverseny lehetőséget biztosít a tömegsport, a versenysport és a vállalati sport részére, fontos szerepe van a közösségépítésben. Az ország minden részéből, sőt a határon túl is érkeznek versenyzők, így a rendezvény turisztikai szempontból is kiemelt jelentőséggel bír, lehetőséget ad Pécs és Harkány, valamint a környékük nevezetességeinek a megismertetése.'),
(5, 'Miskolci Hegyimaraton', 5, '2025-11-02', 42.195, 7800, 3000, 'nyitott', 'A Bükki Hegyi Maraton-Kisgyörgy Ádám Emlékverseny ismét várja a futás szerelmeseit! Ha szereted a kihívásokat, a természetet és a #futás élményét, itt a helyed! A festői Bükk hegységben megrendezett versenyünkön mindenki megtalálja a számára ideális távot.'),
(6, 'Győri Tavaszi Futam', 6, '2025-09-28', 10.000, 2900, 1200, 'teli', 'A versenyszámok abszolút női és férfi 1-3. helyezettjét serleggel, oklevéllel és ajándékkal jutalmazzuk. A versenyszámok női és férfi kor-kategóriáinak 1-3. helyezettjét oklevéllel és ajándékkal jutalmazzuk. A csapatok kor szerint nem kerülnek kategorizálásra. A vegyes csapatokat férfi kategóriában díjazzuk. Az 1-3.helyezett női és férfi csapatokat serleggel jutalmazzuk, továbbá mindegyik csapattag oklevelet és ajándékot kap.\r\nBefutóérem Minden versenyző, aki szintidőn belül teljesíti a távot, befutóérmet kap! Továbbra is egyedi, nívós, fémöntvény éremre számíthattok, gyönyörű vastag szalaggal.\r\nVerseny póló Jó minőségű technikai póló, elől-hátul nyomással. Verseny pólót augusztus 7-ig, a nevezéskor megadott pólóméreteddel tudsz kérni. A póló ára: 3.500 Ft, melyet a rajtcsomaggal vehetsz át. Korlátozott számban a helyszínen is vásárolhatók majd pólók.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `versenyzok`
--

CREATE TABLE `versenyzok` (
  `id` int(11) NOT NULL,
  `nev` varchar(150) NOT NULL,
  `szuletesi_ev` year(4) NOT NULL,
  `nem` enum('ferfi','no') NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefon` varchar(30) DEFAULT NULL,
  `regisztralt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `versenyzok`
--

INSERT INTO `versenyzok` (`id`, `nev`, `szuletesi_ev`, `nem`, `email`, `telefon`, `regisztralt`) VALUES
(1, 'Kovács Anna', '1992', 'no', 'kovacsanna@email.hu', '+36 30 111 2233', '2026-04-18 17:40:59'),
(2, 'Nagy Péter', '1988', 'ferfi', 'nagypeter@email.hu', '+36 20 444 5566', '2026-04-18 17:40:59'),
(3, 'Tóth Eszter', '1995', 'no', 'totheszter@email.hu', NULL, '2026-04-18 17:40:59'),
(4, 'Szabó Bence', '1990', 'ferfi', 'szabobence@email.hu', '+36 70 777 8899', '2026-04-18 17:40:59'),
(5, 'Varga Réka', '1997', 'no', 'vargareka@email.hu', '+36 30 222 3344', '2026-04-18 17:40:59'),
(6, 'Horváth Gábor', '1985', 'ferfi', 'horvathgabor@email.hu', NULL, '2026-04-18 17:40:59'),
(7, 'Kiss Mónika', '2000', 'no', 'kissmoni@email.hu', '+36 20 555 6677', '2026-04-18 17:40:59'),
(8, 'Fekete Dávid', '1993', 'ferfi', 'feketedavid@email.hu', '+36 70 888 9900', '2026-04-18 17:40:59');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `helyszinek`
--
ALTER TABLE `helyszinek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `egy_versenyzo_egy_verseny` (`verseny_id`,`versenyzo_id`),
  ADD KEY `versenyzo_id` (`versenyzo_id`);

--
-- A tábla indexei `versenyek`
--
ALTER TABLE `versenyek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `helyszin_id` (`helyszin_id`);

--
-- A tábla indexei `versenyzok`
--
ALTER TABLE `versenyzok`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `helyszinek`
--
ALTER TABLE `helyszinek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `versenyek`
--
ALTER TABLE `versenyek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `versenyzok`
--
ALTER TABLE `versenyzok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jelentkezesek`
--
ALTER TABLE `jelentkezesek`
  ADD CONSTRAINT `jelentkezesek_ibfk_1` FOREIGN KEY (`verseny_id`) REFERENCES `versenyek` (`id`),
  ADD CONSTRAINT `jelentkezesek_ibfk_2` FOREIGN KEY (`versenyzo_id`) REFERENCES `versenyzok` (`id`);

--
-- Megkötések a táblához `versenyek`
--
ALTER TABLE `versenyek`
  ADD CONSTRAINT `versenyek_ibfk_1` FOREIGN KEY (`helyszin_id`) REFERENCES `helyszinek` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
