CREATE DATABASE konyvaruhaz;
USE konyvaruhaz;

CREATE TABLE konyvek (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cim VARCHAR(255) NOT NULL,
    szerzo VARCHAR(255),
    kiado VARCHAR(255),
    kiadas_ev YEAR,
    isbn VARCHAR(20),
    leiras TEXT,
    boritokep VARCHAR(255),
    ar DECIMAL(10,2),
    keszleten BOOLEAN DEFAULT FALSE
);

CREATE TABLE felhasznalok (
    id INT AUTO_INCREMENT PRIMARY KEY,
    felhasznalonev VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    jelszo VARCHAR(255) NOT NULL,
    cim TEXT,
    telefonszam VARCHAR(20)
);

CREATE TABLE rendelesek (
    id INT AUTO_INCREMENT PRIMARY KEY,
    felhaszalo_id INT,
    konyv_id INT,
    mennyiseg INT,
    datum DATE,
    FOREIGN KEY (felhaszalo_id) REFERENCES felhasznalok(id),
    FOREIGN KEY (konyv_id) REFERENCES konyvek(id)
);


INSERT INTO `konyvek` (`id`, `cim`, `szerzo`, `kiado`, `kiadas_ev`, `isbn`, `leiras`, `boritokep`, `ar`, `keszleten`) VALUES
(1, 'A Gyűrűk Ura', 'J.R.R. Tolkien', 'Káner', '1954', '9780261102354', 'Középfölde története...', 'borito1.jpg', 2990.00, 'true'),
(2, '1984', 'George Orwell', 'Europa', '1949', '9780451524935', 'Egy disztópikus jövő...', 'borito2.jpg', 1990.00, 'false'),
(3, 'Az Alkimista', 'Paulo Coelho', 'Kossuth', '1988', '9789630940694', 'Egy pásztorfiú utazása...', 'borito3.jpg', 1490.00, 'true'),
(4, 'Az öreg halász és a tenger', 'Ernest Hemingway', 'Európa', '1952', '9789630754463', 'Egy kubai halász és küzdelme egy hatalmas hal ellen.', 'oreg-halasz-hemingway.jpg', 1500.00, 'true'),
(5, 'A kis herceg', 'Antoine de Saint-Exupéry', 'Móra', '1943', '9789631198765', 'Egy kisfiú utazása különböző bolygók között.', 'B1352406.jpg', 1200.00, 'false'),
(6, 'Büszkeség és balítélet', 'Jane Austen', 'Európa', '2022', '9789632675381', 'Egy angol vidéki társadalom szatirikus ábrázolása.', 'B1442941.jpg', 1800.00, 'true'),
(7, 'A három musketeers', 'Alexandre Dumas', 'Európa', '2023', '9789630793645', 'A francia királyi udvar kalandjai.', '120415558.jpg', 1990.00, 'false'),
(8, 'Kafka a parton', 'Haruki Murakami', 'Geopen Könyvkiadó', '2017', '9789630775873', 'Egy japán író találkozása Franz Kafkával.', 'borito4.jpg', 2200.00, 'true'),
(9, 'Báró Wenckheim hazatér', 'Laszlo Krasznahorkai', 'Magvető', '2006', '9789631434156', 'Krasznahorkai László azon alkotók közé tartozik, akik egyszerre teremtettek sajátos írói világot és az ezt leírni hivatott nyelvet: az utóbbi harminc év egyik legeredetibb magyar írójának életművében egymást feltételezik az isten háta mögötti, menthetetlenül pusztuló, biblikus távlatokat kínáló helyszínek és a végtelen hosszúságú, monologikus körmondatok. A Báró Wenckheim hazatér mindkét jellegzetes vonást hordozza: a meg nem nevezett, de ijesztően ismerős Békés megyei kisváros lakói vérbeli Krasznahorkai-hősök, akik oldalakon átívelő gondolatfolyamokban fűznek széljegyzeteket az elkerülhetetlenül közelítő végítélethez.', 'baro-wenckheim-01-borito.jpg', 2500.00, 'false'),
(10, 'A számolj vissza', 'Stephen King', 'Európa Könyvkiadó', '2016', '9789630799966', 'Stephen King regénye nem pusztán zseniális időutazás és páratlanul izgalmas, váratlan fordulatokban gazdag történet, hanem a véletlenről, a választásainktól és a sorsról szóló tűnődés is. Letehetetlen.', '11-22-63-211861.jpg', 7299.00, 'true'),
(11, 'Az eljövendő világ', 'Aldous Huxley', 'Európa', '1932', '9789630711668', 'A 26. századi Londonban játszódó történet világában a szaporítás, a genetika és a hipnózis hatalmas fejlődést mondhat magáénak, teljesen megváltoztatva az emberi társadalmat, amit kasztokra osztanak fel, rang szerint csökkenő sorrendben: Alfa, Béta, Gamma, Delta, illetve Epszilon. Ezen kasztok mindegyike rendelkezik egy színnel is: az alfák szürke, a béták bordó, a gammák zöld, a delták khaki, az epszilonok fekete színű ruhát viselnek. A leírt társadalom felfogható utópiának is, nagyon ironikus formában: az emberiség gondtalan, egészséges és technológiailag fejlett. Nincsenek többé háborúk és szegénység, mindenki folyamatosan boldog. Azonban azzal, hogy mindezeket elüldözték az emberek életéből, egyben számos dolgot elveszítettek: a családot, a kulturális sokszínűséget, a művészeteket, irodalmat, tudományt, vallást és filozófiát. Ez a társadalom hedonisztikus: a korlátlan szexualitásból és drogokból nyert örömre koncentrál.', 'ID250-51713.jpg', 2100.00, 'false'),
(12, 'Az öreg és a tenger', 'Ernest Hemingway', 'Libri', '2020', '9786155955907', 'Egy kubai halász és küzdelme egy hatalmas hal ellen.', '6321426_4.jpg', 1500.00, 'true');