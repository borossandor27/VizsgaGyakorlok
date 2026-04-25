-- epitmeny_db.sql
-- Magyarország épített örökségei - adatbázis létrehozó szkript

CREATE DATABASE IF NOT EXISTS epitmeny_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE epitmeny_db;

DROP TABLE IF EXISTS epitmeny;
DROP TABLE IF EXISTS telepules;

CREATE TABLE telepules (
  id        INT PRIMARY KEY,
  nev       VARCHAR(100) NOT NULL,
  megye_id  INT NOT NULL
);

CREATE TABLE epitmeny (
  azon        INT PRIMARY KEY,
  nev         VARCHAR(150) NOT NULL,
  tipus       VARCHAR(50)  NOT NULL,
  magassag    INT          NOT NULL,
  telepules_id INT         NOT NULL,
  epites_eve  INT          NOT NULL,
  FOREIGN KEY (telepules_id) REFERENCES telepules(id)
);

INSERT INTO telepules VALUES
(1,'Eger',10),(2,'Visegrád',14),(3,'Budapest',1),(4,'Sümeg',20),
(5,'Boldogkő Váralja',7),(6,'Esztergom',14),(7,'Pécs',2),(8,'Pannonhalma',8),
(9,'Tihany',20),(10,'Miskolc',5),(11,'Szigetvár',2),(12,'Kőszeg',19),
(13,'Sárospatak',7),(14,'Füzér',7),(15,'Döbrönte',20),(16,'Csesznek',8),
(17,'Somlóvásárhely',20),(18,'Tata',11),(19,'Drégely Palánk',12),
(20,'Hollókő',12),(21,'Nógrád',12),(22,'Simontornya',17),(23,'Gyula',4),
(24,'Boldva',5),(25,'Ják',19),(26,'Lébény',8),(27,'Sopron',9),
(28,'Zirc',20),(29,'Báta',17),(30,'Győr',8),(31,'Székesfehérvár',7),
(32,'Veszprém',20),(33,'Ópusztaszer',16),(34,'Kecskemét',6);

INSERT INTO epitmeny VALUES
(1,'Egri vár','vár',22,1,1248),
(2,'Visegrádi fellegvár','vár',350,2,1250),
(3,'Budai Vár','vár',167,3,1265),
(4,'Sümegi vár','vár',270,4,1280),
(5,'Boldogkői vár','vár',312,5,1310),
(6,'Esztergomi Bazilika','templom',100,6,1856),
(7,'Pécsi székesegyház','templom',68,7,1009),
(8,'Pannonhalmi Főapátság','kolostor',282,8,996),
(9,'Tihany apátsági templom','templom',115,9,1055),
(10,'Mátyás-templom','templom',80,3,1255),
(11,'Diósgyőri vár','vár',190,10,1325),
(12,'Szigetvári vár','vár',95,11,1420),
(13,'Kőszegi vár','vár',265,12,1260),
(14,'Sárospataki vár','vár',145,13,1390),
(15,'Füzéri vár','vár',552,14,1310),
(16,'Döbröntei vár','vár',180,15,1330),
(17,'Csesznek vára','vár',280,16,1315),
(18,'Somló vára','vár',431,17,1340),
(19,'Tatai vár','vár',130,18,1397),
(20,'Drégely vár','vár',282,19,1295),
(21,'Hollókői vár','vár',240,20,1310),
(22,'Nógrád vár','vár',180,21,1290),
(23,'Simontornyai vár','vár',102,22,1387),
(24,'Gyulai vár','vár',90,23,1405),
(25,'Boldva református templom','templom',45,24,1200),
(26,'Jáki templom','templom',58,25,1256),
(27,'Lébényi román bazilika','templom',52,26,1208),
(28,'Sopronbánfalvai kolostor','kolostor',185,27,1350),
(29,'Zirc apátság','kolostor',215,28,1182),
(30,'Bátai apátság romjai','kolostor',88,29,1140),
(31,'Miskolci Avas torony','torony',80,10,1410),
(32,'Sopron tűztorony','torony',61,27,1676),
(33,'Kőszeg Jurisics tér torony','torony',55,12,1532),
(34,'Esztergomi Várhegy torony','torony',140,6,1300),
(35,'Pozsonyi kapu Győr','kapu',56,30,1600),
(36,'Győri székesegyház','templom',40,30,1630),
(37,'Székesfehérvári bazilika','romkert',95,31,1000),
(38,'Veszprémi Gizella-kápolna','kápolna',75,32,1000),
(39,'Ópusztaszeri emlékmű','emlékmű',25,33,1896),
(40,'Kecskeméti városháza','egyéb',108,34,1897);
