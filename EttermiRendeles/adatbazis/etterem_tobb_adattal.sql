-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Jún 29. 22:43
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
-- Adatbázis: `etterem`
--
CREATE DATABASE IF NOT EXISTS `etterem` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `etterem`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `categories`
--

CREATE TABLE `categories` (
  `category_id` int(10) UNSIGNED NOT NULL COMMENT 'A kategória egyedi azonosítója',
  `name` varchar(100) NOT NULL COMMENT 'A kategória neve (egyedi)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Ételkategóriák, pl. előétel, főétel, desszert';

--
-- A tábla adatainak kiíratása `categories`
--

INSERT INTO `categories` (`category_id`, `name`) VALUES
(3, 'Desszertek'),
(1, 'Előételek'),
(2, 'Főételek'),
(7, 'Frissensült ételek'),
(4, 'Italok'),
(5, 'Levesek'),
(6, 'Saláták'),
(8, 'Vega ételek');

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `etteremall`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `etteremall` (
`rendelesAzonosito` int(10) unsigned
,`kategoriaAzonosito` int(10) unsigned
,`kategoria` varchar(100)
,`etelNeve` varchar(255)
,`etelInfo` text
,`egysegAra` decimal(10,2)
,`etelkepUrl` varchar(255)
,`rendelheto` enum('true','false')
,`rendeltMennyiseg` int(11)
,`egysegar` decimal(10,2)
,`allapot` enum('folyamatban','elkészült','fizetve')
,`fizetendo` decimal(10,2)
,`rendelesIdopontja` timestamp
,`fizetettOsszeg` decimal(10,2)
,`fizetesModja` enum('készpénz','bankkártya','online')
,`fizetesIdeje` timestamp
,`asztalSzama` int(11)
,`szemelyNeve` varchar(100)
,`szerepkor` enum('admin','pincer','vendeg')
);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `menuitems`
--

CREATE TABLE `menuitems` (
  `menuitem_id` int(10) UNSIGNED NOT NULL COMMENT 'Étel/ital egyedi azonosítója',
  `name` varchar(255) NOT NULL COMMENT 'Étel/ital neve',
  `description` text DEFAULT NULL COMMENT 'Leírás az ételről/italról',
  `price` decimal(10,2) NOT NULL COMMENT 'Ár forintban',
  `category_id` int(10) UNSIGNED NOT NULL COMMENT 'Kategória azonosító (hivatkozás a categories táblára)',
  `image_url` varchar(255) DEFAULT NULL COMMENT 'Kép URL-je',
  `available` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'Elérhető-e az étel/ital'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Étlapon szereplő ételek és italok';

--
-- A tábla adatainak kiíratása `menuitems`
--

INSERT INTO `menuitems` (`menuitem_id`, `name`, `description`, `price`, `category_id`, `image_url`, `available`) VALUES
(1, 'Gulyásleves', 'Hagyományos magyar gulyás marhahússal', 1890.00, 1, 'https://example.com/gulyas.jpg', 'true'),
(2, 'Rántott sajt', 'Ropogós panírban sült trappista sajt tartárral', 2290.00, 2, 'https://example.com/sajt.jpg', 'true'),
(3, 'Somlói galuska', 'Házi készítésű desszert csokiöntettel', 1290.00, 3, 'https://example.com/somloi.jpg', 'true'),
(4, 'Ásványvíz', '0.5 liter szénsavmentes ásványvíz', 490.00, 4, 'https://example.com/viz.jpg', 'true'),
(5, 'Gulyásleves extra', 'Gulyás nagy adagban', 2090.00, 1, 'https://example.com/gulyas2.jpg', 'true'),
(6, 'Rántott sajt dupla', 'Dupla adag sajt tartárral', 2590.00, 2, 'https://example.com/sajt2.jpg', 'true'),
(7, 'Somlói deluxe', 'Somlói tejszínhabbal és dióval', 1490.00, 3, 'https://example.com/somloi2.jpg', 'true'),
(8, 'Szódavíz', '0.5 liter szódavíz', 390.00, 4, 'https://example.com/szoda.jpg', 'true'),
(9, 'Halászlé', 'Hagyományos magyar halászlé pontyból', 2490.00, 5, 'https://example.com/halaszle.jpg', 'true'),
(10, 'Bableves', 'Füstölt csülökkel készült bableves', 1990.00, 5, 'https://example.com/bableves.jpg', 'true'),
(11, 'Cézár saláta', 'Jégsaláta, csirkemell, parmezán, kruton', 2190.00, 6, 'https://example.com/caesar.jpg', 'true'),
(12, 'Görög saláta', 'Uborka, paradicsom, feta sajt, olívabogyó', 1890.00, 6, 'https://example.com/greek.jpg', 'true'),
(13, 'Rántott csirke', 'Ropogósra sült csirkemell filé', 2390.00, 7, 'https://example.com/csirke.jpg', 'true'),
(14, 'Sült krumpli', 'Fűszeres sült krumpli házi mártással', 1290.00, 7, 'https://example.com/krumpli.jpg', 'true'),
(15, 'Töltött paprika', 'Zöldpaprika tofuval és bulgurral', 1990.00, 8, 'https://example.com/paprika.jpg', 'true'),
(16, 'Vega burger', 'Bab és quinoa alapú vega burger', 2290.00, 8, 'https://example.com/vegaburger.jpg', 'true'),
(17, 'Palacsinta', 'Házi készítésű édes palacsinta', 890.00, 3, 'https://example.com/palacsinta.jpg', 'true'),
(18, 'Tiramisu', 'Olasz desszert kávéval és mascarpone-val', 1590.00, 3, 'https://example.com/tiramisu.jpg', 'true'),
(19, 'Cola', '0.5 literes üdítő ital', 690.00, 4, 'https://example.com/cola.jpg', 'true'),
(20, 'Narancslé', 'Frissen facsart narancslé', 790.00, 4, 'https://example.com/orange.jpg', 'true');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orderitems`
--

CREATE TABLE `orderitems` (
  `orderitem_id` int(10) UNSIGNED NOT NULL COMMENT 'Rendelési tétel azonosító',
  `order_id` int(10) UNSIGNED NOT NULL COMMENT 'Rendelés azonosító (hivatkozás az orders táblára)',
  `menuItem_id` int(10) UNSIGNED NOT NULL COMMENT 'Étel/ital azonosító (hivatkozás a menuitems táblára)',
  `quantity` int(11) NOT NULL COMMENT 'Rendelt mennyiség',
  `price` decimal(10,2) NOT NULL COMMENT 'Egységár a rendelés pillanatában'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Rendelésekhez tartozó konkrét tételek';

--
-- A tábla adatainak kiíratása `orderitems`
--

INSERT INTO `orderitems` (`orderitem_id`, `order_id`, `menuItem_id`, `quantity`, `price`) VALUES
(1, 1, 1, 1, 1890.00),
(2, 1, 4, 1, 490.00),
(3, 2, 2, 1, 2290.00),
(4, 2, 3, 1, 1290.00),
(5, 2, 4, 1, 490.00),
(6, 3, 2, 1, 2290.00),
(7, 3, 4, 1, 490.00),
(8, 4, 5, 1, 2090.00),
(9, 5, 6, 1, 2590.00),
(10, 5, 7, 1, 1490.00),
(11, 6, 8, 2, 780.00),
(12, 7, 1, 1, 1890.00),
(13, 7, 4, 1, 490.00),
(14, 8, 2, 1, 2290.00),
(15, 8, 3, 1, 1290.00),
(16, 8, 4, 1, 490.00),
(17, 9, 2, 1, 2290.00),
(18, 9, 4, 1, 490.00),
(19, 10, 5, 1, 2090.00),
(20, 11, 6, 1, 2590.00),
(21, 11, 7, 1, 1490.00),
(22, 12, 8, 2, 780.00),
(23, 13, 1, 1, 1890.00),
(24, 13, 4, 1, 490.00),
(25, 14, 2, 1, 2290.00),
(26, 14, 3, 1, 1290.00),
(27, 14, 4, 1, 490.00),
(28, 15, 2, 1, 2290.00),
(29, 15, 4, 1, 490.00),
(30, 16, 5, 1, 2090.00),
(31, 17, 6, 1, 2590.00),
(32, 17, 7, 1, 1490.00),
(33, 18, 8, 2, 780.00),
(34, 19, 11, 1, 2190.00),
(35, 19, 19, 1, 690.00),
(36, 20, 13, 1, 2390.00),
(37, 20, 14, 1, 1290.00),
(38, 21, 15, 1, 1990.00),
(39, 21, 20, 1, 790.00),
(40, 22, 9, 1, 2490.00),
(41, 22, 8, 1, 390.00),
(42, 23, 17, 2, 1780.00),
(43, 23, 4, 1, 490.00);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) UNSIGNED NOT NULL COMMENT 'Rendelés egyedi azonosítója',
  `table_id` int(10) UNSIGNED NOT NULL COMMENT 'Asztal azonosítója',
  `user_id` int(10) UNSIGNED NOT NULL COMMENT 'Felhasználó azonosítója (ki adta le a rendelést)',
  `status` enum('folyamatban','elkészült','fizetve') NOT NULL COMMENT 'Rendelés állapota',
  `total_price` decimal(10,2) NOT NULL COMMENT 'Teljes ár (összesített)',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Rendelés időpontja'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Vendégek rendelései';

--
-- A tábla adatainak kiíratása `orders`
--

INSERT INTO `orders` (`order_id`, `table_id`, `user_id`, `status`, `total_price`, `created_at`) VALUES
(1, 1, 3, 'folyamatban', 2780.00, '2025-06-28 12:22:17'),
(2, 2, 3, 'elkészült', 4170.00, '2025-06-28 12:22:17'),
(3, 3, 3, 'fizetve', 2780.00, '2025-06-28 12:22:17'),
(4, 1, 3, 'folyamatban', 2090.00, '2025-06-28 14:50:36'),
(5, 2, 3, 'elkészült', 4080.00, '2025-06-28 14:50:36'),
(6, 3, 3, 'fizetve', 1880.00, '2025-06-28 14:50:36'),
(7, 1, 3, 'folyamatban', 2780.00, '2025-06-28 10:22:17'),
(8, 2, 3, 'elkészült', 4170.00, '2025-06-28 10:22:17'),
(9, 3, 3, 'fizetve', 2780.00, '2025-06-28 10:22:17'),
(10, 1, 3, 'folyamatban', 2090.00, '2025-06-28 12:50:36'),
(11, 2, 3, 'elkészült', 4080.00, '2025-06-28 12:50:36'),
(12, 3, 3, 'fizetve', 1880.00, '2025-06-28 12:50:36'),
(13, 1, 3, 'folyamatban', 2780.00, '2025-06-28 10:22:17'),
(14, 2, 3, 'elkészült', 4170.00, '2025-06-28 10:22:17'),
(15, 3, 3, 'fizetve', 2780.00, '2025-06-28 10:22:17'),
(16, 1, 3, 'folyamatban', 2090.00, '2025-06-28 12:50:36'),
(17, 2, 3, 'elkészült', 4080.00, '2025-06-28 12:50:36'),
(18, 3, 3, 'fizetve', 1880.00, '2025-06-28 12:50:36'),
(19, 4, 5, 'folyamatban', 3500.00, '2025-06-29 11:15:00'),
(20, 4, 5, 'elkészült', 4200.00, '2025-06-29 11:30:00'),
(21, 5, 6, 'fizetve', 2800.00, '2025-06-29 12:00:00'),
(22, 5, 6, 'folyamatban', 3100.00, '2025-06-29 12:20:00'),
(23, 6, 4, 'elkészült', 1950.00, '2025-06-29 13:00:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(10) UNSIGNED NOT NULL COMMENT 'Fizetés azonosító',
  `order_id` int(10) UNSIGNED NOT NULL COMMENT 'Rendelés azonosító (kapcsolódik az orders táblához)',
  `amount` decimal(10,2) NOT NULL COMMENT 'Fizetett összeg',
  `payment_method` enum('készpénz','bankkártya','online') NOT NULL COMMENT 'Fizetési mód',
  `paid_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Fizetés időpontja'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Kifizetett rendelések adatai';

--
-- A tábla adatainak kiíratása `payments`
--

INSERT INTO `payments` (`payment_id`, `order_id`, `amount`, `payment_method`, `paid_at`) VALUES
(1, 3, 2780.00, 'bankkártya', '2025-06-28 12:22:28'),
(2, 6, 1880.00, 'készpénz', '2025-06-28 14:50:36'),
(3, 9, 2780.00, 'bankkártya', '2025-06-28 10:22:28'),
(4, 12, 1880.00, 'készpénz', '2025-06-28 12:50:36'),
(5, 15, 2780.00, 'bankkártya', '2025-06-28 10:22:28'),
(6, 18, 1880.00, 'készpénz', '2025-06-28 12:50:36'),
(7, 21, 2800.00, 'bankkártya', '2025-06-29 12:05:00'),
(8, 23, 1950.00, 'készpénz', '2025-06-29 13:05:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tables`
--

CREATE TABLE `tables` (
  `table_id` int(10) UNSIGNED NOT NULL COMMENT 'Asztal egyedi azonosítója',
  `table_number` int(11) NOT NULL COMMENT 'Asztal sorszáma a vendégtérben'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Vendéglő asztalainak listája';

--
-- A tábla adatainak kiíratása `tables`
--

INSERT INTO `tables` (`table_id`, `table_number`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL COMMENT 'Felhasználó azonosító',
  `name` varchar(100) NOT NULL COMMENT 'Felhasználó teljes neve',
  `email` varchar(255) NOT NULL COMMENT 'Email-cím (egyedi)',
  `password` varchar(255) NOT NULL COMMENT 'Titkosított jelszó',
  `role` enum('admin','pincer','vendeg') NOT NULL COMMENT 'Felhasználói szerepkör'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Felhasználók: vendégek, pincérek, adminok';

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Kiss Anna', 'anna.kiss@example.com', 'hashed_password_1', 'admin'),
(2, 'Nagy Péter', 'peter.nagy@example.com', 'hashed_password_2', 'pincer'),
(3, 'Szabó Júlia', 'julia.szabo@example.com', 'hashed_password_3', 'vendeg'),
(4, 'Kovács István', 'istvan.kovacs@example.com', 'hashed_password_4', 'pincer'),
(5, 'Tóth Eszter', 'eszter.toth@example.com', 'hashed_password_5', 'vendeg'),
(6, 'Molnár Gábor', 'gabor.molnar@example.com', 'hashed_password_6', 'vendeg'),
(7, 'Farkas Zsuzsa', 'zsuzsa.farkas@example.com', 'hashed_password_7', 'admin'),
(8, 'Varga Miklós', 'miklos.varga@example.com', 'hashed_password_8', 'pincer'),
(9, 'Balogh Katalin', 'katalin.balogh@example.com', 'hashed_password_9', 'vendeg');

-- --------------------------------------------------------

--
-- Nézet szerkezete `etteremall`
--
DROP TABLE IF EXISTS `etteremall`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `etteremall`  AS SELECT `o`.`order_id` AS `rendelesAzonosito`, `c`.`category_id` AS `kategoriaAzonosito`, `c`.`name` AS `kategoria`, `mi`.`name` AS `etelNeve`, `mi`.`description` AS `etelInfo`, `mi`.`price` AS `egysegAra`, `mi`.`image_url` AS `etelkepUrl`, `mi`.`available` AS `rendelheto`, `oi`.`quantity` AS `rendeltMennyiseg`, `oi`.`price` AS `egysegar`, `o`.`status` AS `allapot`, `o`.`total_price` AS `fizetendo`, `o`.`created_at` AS `rendelesIdopontja`, `p`.`amount` AS `fizetettOsszeg`, `p`.`payment_method` AS `fizetesModja`, `p`.`paid_at` AS `fizetesIdeje`, `t`.`table_number` AS `asztalSzama`, `u`.`name` AS `szemelyNeve`, `u`.`role` AS `szerepkor` FROM ((((((`categories` `c` join `menuitems` `mi` on(`c`.`category_id` = `mi`.`category_id`)) join `orderitems` `oi` on(`mi`.`menuitem_id` = `oi`.`menuItem_id`)) join `orders` `o` on(`oi`.`order_id` = `o`.`order_id`)) left join `payments` `p` on(`o`.`order_id` = `p`.`order_id`)) join `tables` `t` on(`o`.`table_id` = `t`.`table_id`)) join `users` `u` on(`o`.`user_id` = `u`.`user_id`)) ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- A tábla indexei `menuitems`
--
ALTER TABLE `menuitems`
  ADD PRIMARY KEY (`menuitem_id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `fk_menuitems_category` (`category_id`);

--
-- A tábla indexei `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`orderitem_id`),
  ADD KEY `fk_orderitems_menuitem` (`menuItem_id`),
  ADD KEY `fk_orderitems_order` (`order_id`);

--
-- A tábla indexei `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_orders_table` (`table_id`),
  ADD KEY `fk_orders_user` (`user_id`);

--
-- A tábla indexei `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `fk_payments_order` (`order_id`);

--
-- A tábla indexei `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`table_id`),
  ADD UNIQUE KEY `table_number` (`table_number`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `menuitems`
--
ALTER TABLE `menuitems`
  ADD CONSTRAINT `fk_menuitems_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `fk_orderitems_menuitem` FOREIGN KEY (`menuItem_id`) REFERENCES `menuitems` (`menuitem_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orderitems_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_table` FOREIGN KEY (`table_id`) REFERENCES `tables` (`table_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `fk_payments_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
