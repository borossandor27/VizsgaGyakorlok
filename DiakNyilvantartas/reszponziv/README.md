# Reszponzív feladat

A reszponzív feladatban egy olyan weboldalt kell készíteni, amely különböző eszközökön (asztali számítógép, tablet, mobiltelefon) is jól jelenik meg. A cél az, hogy a weboldal tartalma és elrendezése alkalmazkodjon a képernyő méretéhez és felbontásához.

## Oldalak részletes leírása

### index.html

Főoldal — héder + navigációs kártyák
Teljes szélességű banner (háttérkép + félátlátszó réteg), rajta az oldal neve és alcím. Két gomb a banneren: „Diákok listája" és „Új diák felvétele". Alatta három egyforma Bootstrap kártya egymás mellé rendezve: Lista, Új diák, Módosítás — mindegyiken rövid leírás és „Megnyitás" gomb.

### lista.html

Diákok listája — táblázat DEMO
Bootstrap navbar az oldalon: Kezdőlap, Diákok listája, Új diák, Módosítás linkekkel. Alatta „Diákok listája" h1 cím és alcím. Reszponzív táblázat legalább 3–4 sorral: Azon, Név, Születési év, Osztály, Település, Kép (vagy „Nincs kép"), Művelet (Törlés gomb). A Törlés gomb piros keretű outline gomb — csak megjelenik, nem végez adatbázis-műveletet. Kék megjegyzés doboz a lap alján.

### új.html

Új diák felvétele — űrlap DEMO
Navbar, majd „Új diák felvétele" cím. Reszponzív űrlap: Név (szöveges input), Születési év + Osztály (egy sorban egymás     mellé), Település (legördülő: Budapest, Debrecen, Pécs, Győr, Miskolc), Fénykép linkje (placeholder: kepek/1.jpg). Kék „Mentés" gomb teljes szélességben. Alul kék megjegyzés doboz: DEMO mentés, nem kerül adatbázisba.

### modositas.html

Osztály módosítása — felület DEMO
Navbar, majd „Osztály módosítása" cím. Két mezős felület: Diák kiválasztása (legördülő: „Válasszon…" + az összes minta-diák neve), Új osztály (legördülő: 9A, 9B, 10A, 10B, 11A, 11B, 12A, 12B). Kék „Mentés" gomb teljes szélességben. Alul kék megjegyzés doboz: módosítás DEMO, nem kerül adatbázisba.

## Technikai követelmények

- Offline Bootstrap 5.3 (helyi fájlból hivatkozva, nem CDN)
- Saját stílusok külön CSS fájlban (pl. stilus.css)
- Minden oldalon azonos Bootstrap navbar a négy oldal linkjeivel
- Reszponzív elrendezés — mobilon is olvasható legyen
- A Mentés / Törlés gombok nem végeznek valódi adatbázis-műveletet (DEMO jelleg)
- A banner háttérképe helyi fájlból töltődjön be (pl. kepek/banner.jpg)
- Érvényes, szemantikus HTML5 jelölés

__NOTE__ Megjegyzés: a lista oldalon szereplő minta-adatokat a diákok közvetlenül HTML-be írják, nem JavaScript generálja — ez az 1. feladat (frontend) célja. A tényleges adatbázis-kapcsolat egy következő feladatban kerül megvalósításra.

## Adatbázis-séma (referencia)

| Mező         | Típus  | Leírás                                  |
| ------------ | ------ | --------------------------------------- |
| azon         | szám   | Egyedi azonosító                        |
| nev          | szöveg | Diák teljes neve                        |
| szuletesi_ev | év     | Születési év (pl. 2006)                 |
| osztaly      | lista  | 9A,9B,10A,10B,11A,11B,12A,12B           |
| telepules    | lista  | Budapest, Debrecen, Pécs, Győr, Miskolc |
| kep          | szöveg | Képlink (pl. kepek/1.jpg) — opcionális  |
