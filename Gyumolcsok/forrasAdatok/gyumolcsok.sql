--
-- Adatbázis: `gyumolcsok`
--
CREATE DATABASE IF NOT EXISTS `gyumolcsok` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `gyumolcsok`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyumolcs`
--

CREATE TABLE `gyumolcs` (
  `gyumolcsid` bigint(20) UNSIGNED NOT NULL,
  `nev` varchar(200) NOT NULL,
  `megjegyzes` varchar(500) DEFAULT NULL,
  `nev_eng` varchar(200) DEFAULT NULL,
  `alt_szoveg` varchar(200) NOT NULL,
  `src` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `gyumolcs`
--

INSERT INTO `gyumolcs` (`gyumolcsid`, `nev`, `megjegyzes`, `nev_eng`, `alt_szoveg`, `src`) VALUES
(1, 'Alma', 'Az alma vagy almafa a rózsafélék családjába tartozó növénynemzetség. Körülbelül 55 faj tartozik ide, melyek többsége Ázsiában, kisebb része Európában és Észak-Amerikában honos. A nemzetségbe tartozó egyedek, vagyis az almafák termésének a neve is alma.', 'apple', 'apple', 'apple.png'),
(2, 'Avokádó', 'Az avokádó a babérfélék családjába tartozó, örökzöld, alacsonyan elágazó, terebélyes ágrendszerű, 10–20 m magas fa. A mexikói fajának a neve Persea gratissima.', 'avocado', 'avocado', 'avocado.png'),
(3, 'Kókuszdió', 'A kókuszpálma az egyszikűek osztályába, a pálmavirágúak rendjébe és a pálmafélék családjába tartozó faj.', 'coconut', 'coconut', 'coconut.png'),
(4, 'Guava', 'A guava egy gyakori trópusi gyümölcs, amelyet számos trópusi és szubtrópusi régióban termesztenek. A közönséges guajava Psidium guajava a mirtuszfélék családjába tartozó kis fa, Mexikóban, Közép-Amerikában, a Karib-térségben és Dél-Amerika északi részén őshonos.', 'guava', 'guava', 'guava.png'),
(5, 'Mézbogyó', 'A mézbogyó a szappanfavirágúak rendjébe, a szappanfafélék családjába tartozó trópusi növényfaj.', 'mamoncillo', 'imoncillo', 'imoncillo.png'),
(6, 'Nagy szapota', 'A Pouteria sapota, a mamey sapote egy Mexikóban és Közép-Amerikában őshonos fafaj. A fát a Karib-térségben is termesztik. Gyümölcsét sok latin-amerikai országban fogyasztják. A gyümölcsből olyan ételeket készítenek, mint a turmix és a fagylalt.', 'mamey_sapote', 'mamey_sapote', 'mamey_sapote.png'),
(7, 'Mangó', 'A mangó (Mangifera indica) a szappanfavirágúak (Sapindales) rendjébe sorolt szömörcefélék (Anacardiaceae) családjában a Mangifera nemzetség típusfaja — édes ízű, egzotikus gyümölcsöt termő fa. Mai neve az indiai man-gay portugál formájából (manga) származik. Az indiaiak szent fája.', 'mango', 'mango', 'mango.png'),
(8, 'Arany alma', 'Az aranyalma  különböző legendákban szerepel, amelyek egy hőst (például Herkulest vagy Făt-Frumost ) ábrázolnak, amint visszahozza az ellenfél által elrejtett vagy ellopott aranyalmákat . Az aranyalma az ír mitológiában a túlvilág ezüstágán is megjelenik ', 'manzana_de_oro', 'manzana_de_aro', 'manzana_de_aro.png'),
(9, 'Papaya', 'A papaja vagy dinnyefa a keresztesvirágúak rendjébe és a dinnyefafélék családjába tartozó faj. Gyümölcse szintén papaja néven ismert.', 'papaya', 'papaya', 'papaya.png'),
(10, 'Passiógyümölcs', 'A passiógyümölcs és a granadilla a Passiflora nemzetség számos növényének gyümölcse. Dél-Amerika szubtrópusi vidékein őshonos Brazília déli részétől Paraguayon át Észak-Argentínáig. A gyümölcsöt héja és magja miatt, valamint gyümölcsléként fogyasztják.', 'passion_fruit', 'passion_fruit', 'passion_fruit.png'),
(11, 'Ananász', 'Az ananász az egyszikűek osztályába, a perjevirágúak rendjébe és a broméliafélék családjába tartozó nemzetség.', 'pineapple', 'pineapple', 'pineapple.png'),
(12, 'Sárkánygyümölcs', 'A pitaja nagyobb és gyakran finomabb is, mint a kaktuszfüge. Húsa fehér, vörös vagy lila; magja kisebb, kevésbé zavarja a gyümölcsevés élvezetét. Héja élvezhetetlen. Illata semleges, íze frissítő és finoman savanykás, egy kicsit az egresére emlékeztet.', 'pitaya', 'pitaya', 'pitaya.png'),
(13, 'Főzőbanán', 'A főzőbanán a Musa nemzetségbe tartozó banánfajták csoportja, amelynek gyümölcseit általában főzéshez használják. Nem fogyasztják nyersen, és általában keményítőtartalmúak. Sok főzési banánt útifűnek vagy „zöld banánnak” neveznek.', 'plantain', 'plantain', 'plantain.png'),
(14, 'Tüskés annóna', 'A szúrszop vagy tüskés annóna a liliomfa-virágúak rendjébe, ezen belül az annónafélék családjába tartozó faj. Nemzetségének a típusfaja.', 'soursop', 'soursop', 'soursop.png'),
(15, 'Csillaggyümölcs', 'A karambola, más néven csillaggyümölcs, az Averrhoa carambola gyümölcse, amely a trópusi Délkelet-Ázsiában őshonos fafaj. Az ehető gyümölcs oldalain jellegzetes gerincek futnak le. Keresztmetszetben vágva csillaghoz hasonlít, így a csillaggyümölcs elnevezést kapja.', 'starfruit', 'starfruit', 'starfruit.png'),
(16, 'Tamarind', 'A tamarindusz a kétszikűek osztályában a hüvelyesek rendjébe sorolt pillangósvirágúak családjának egyik monotipikus nemzetsége; egyetlen faja a többnyire egyszerűen csak tamarindnak nevezett indiai tamarindusz. Neve az arab-indiai tamar és hindi szavakból ered.', 'tamarind', 'tamarind', 'tamarind.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `keszlet`
--

CREATE TABLE `keszlet` (
  `gyumolcsid` bigint(20) UNSIGNED NOT NULL,
  `mennyiseg` int(11) NOT NULL,
  `egysegar` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `gyumolcs`
--
ALTER TABLE `gyumolcs`
  ADD PRIMARY KEY (`gyumolcsid`);

--
-- A tábla indexei `keszlet`
--
ALTER TABLE `keszlet`
  ADD KEY `fk_gyum_keszl` (`gyumolcsid`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `gyumolcs`
--
ALTER TABLE `gyumolcs`
  MODIFY `gyumolcsid` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `keszlet`
--
ALTER TABLE `keszlet`
  ADD CONSTRAINT `fk_gyum_keszl` FOREIGN KEY (`gyumolcsid`) REFERENCES `gyumolcs` (`gyumolcsid`);

