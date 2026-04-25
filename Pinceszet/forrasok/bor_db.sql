-- bor_db.sql
-- Magyarország borvidékei és pincészetei - adatbázis létrehozó szkript

CREATE DATABASE IF NOT EXISTS bor_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE bor_db;

DROP TABLE IF EXISTS pinceszet;
DROP TABLE IF EXISTS telepules;
DROP TABLE IF EXISTS megye;

CREATE TABLE megye (
  id   INT PRIMARY KEY,
  nev  VARCHAR(100) NOT NULL
);

CREATE TABLE telepules (
  id        INT PRIMARY KEY,
  nev       VARCHAR(100) NOT NULL,
  megye_id  INT NOT NULL,
  borvidek  VARCHAR(100) NOT NULL,
  FOREIGN KEY (megye_id) REFERENCES megye(id)
);

CREATE TABLE pinceszet (
  azon          INT PRIMARY KEY AUTO_INCREMENT,
  nev           VARCHAR(150) NOT NULL,
  tipus         VARCHAR(50)  NOT NULL,
  alapitas_eve  INT          NOT NULL,
  telepules_id  INT          NOT NULL,
  URL           VARCHAR(500) NOT NULL DEFAULT '',
  FOREIGN KEY (telepules_id) REFERENCES telepules(id)
);

INSERT INTO megye VALUES
(1,'Budapest és Pest'),(2,'Baranya'),(4,'Bács-Kiskun'),(5,'Fejér'),
(6,'Bács-Kiskun'),(7,'Heves'),(8,'Komárom-Esztergom'),(9,'Veszprém'),
(10,'Heves'),(11,'Komárom-Esztergom'),(14,'Somogy'),(17,'Tolna'),
(20,'Veszprém');

INSERT INTO telepules VALUES
(1,'Villány',2,'Villányi'),
(2,'Eger',10,'Egri'),
(3,'Tokaj',7,'Tokaj'),
(4,'Mád',7,'Tokaj'),
(5,'Szekszárd',17,'Szekszárdi'),
(6,'Pécsvárad',2,'Pécsi'),
(7,'Eger',10,'Egri'),
(8,'Keszthely',20,'Balatoni'),
(9,'Balatonfüred',20,'Balatoni'),
(10,'Somló',20,'Somlói'),
(11,'Neszmély',11,'Neszmélyi'),
(12,'Hajós',4,'Hajós-Bajai'),
(13,'Balatonlelle',14,'Balatoni'),
(14,'Badacsony',20,'Badacsonyi'),
(15,'Etyek',1,'Etyeki-Budai'),
(16,'Etyek',1,'Etyeki-Budai'),
(17,'Mór',5,'Móri');

INSERT INTO pinceszet (azon,nev,tipus,alapitas_eve,telepules_id,URL) VALUES
(1,'Tiffán Ede és Fia Pincészet','családi',1990,1,''),
(2,'Vylyan Szőlőbirtok és Pincészet','nagybirtok',1998,1,''),
(3,'Bock Pincészet','családi',1989,1,''),
(4,'Csányi Pincészet','nagybirtok',1995,2,''),
(5,'Gróf Degenfeld Kastélypince','kastélypince',1997,3,''),
(6,'Tokaj Kereskedőház','szövetkezeti',1990,3,''),
(7,'Disznókő Szőlőbirtok','nagybirtok',1992,4,''),
(8,'Oremus Pincészet','családi',1993,4,''),
(9,'Szepsy Pincészet','családi',1988,4,''),
(10,'Dobogó Pincészet','családi',2000,4,''),
(11,'Gere Attila Pincészet','családi',1991,1,''),
(12,'Malatinszky Kúria és Pincészet','kastélypince',2000,1,''),
(13,'Heimann Pincészet','családi',1992,5,''),
(14,'Takler Pincészet','családi',1994,5,''),
(15,'Vida Péter Pincészete','családi',2002,6,''),
(16,'St. Andrea Szőlőbirtok','nagybirtok',2000,7,''),
(17,'Bolyki Pincészet','családi',1995,7,''),
(18,'Kovács Nimród Winery','családi',2003,7,''),
(19,'Thummerer Pince','családi',1989,7,''),
(20,'Konyári Pincészet','családi',1991,8,''),
(21,'Szeremley Birtok','nagybirtok',1990,8,''),
(22,'Figula Pincészet','családi',1993,9,''),
(23,'Jásdi Pincészet','családi',2001,9,''),
(24,'Tornai Pincészet','nagybirtok',1990,10,''),
(25,'Neszmélyi Szőlőskert','szövetkezeti',1988,11,''),
(26,'Hilltop Neszmély','nagybirtok',1993,11,''),
(27,'Frittmann Testvérek','családi',1998,12,''),
(28,'Sauska Pincészet','nagybirtok',2003,1,''),
(29,'Mérész Erzsébet Pincészete','családi',2005,13,''),
(30,'Pók-Polonyi Pincészet','családi',1997,14,''),
(31,'Patricius Borház','nagybirtok',1999,4,''),
(32,'Château Dereszla','kastélypince',2002,4,''),
(33,'Demeter Zoltán Pincészete','családi',1995,4,''),
(34,'Kikelet Pince','családi',2004,4,''),
(35,'Budaházy Pince','családi',1996,15,''),
(36,'Etyeki Kúria','kastélypince',1993,16,''),
(37,'Haraszthy Pincészet','nagybirtok',1998,16,''),
(38,'Nyakas Pincészet','nagybirtok',1985,16,''),
(39,'Kamocsay Pincészet','családi',1990,17,''),
(40,'Ászár-Neszmély Borvidék Zrt.','szövetkezeti',1982,11,'');
