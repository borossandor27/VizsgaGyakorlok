# Projektfeladat: Szoftverfejlesztő és -tesztelő szakma

**Megnevezés:** B) Asztali- és webes szoftverfejlesztés, adatbázis-kezelés  
**Időtartam:** 240 perc  
**Dátum:** 2026. március 12. 9:00  
[cite_start]**Segédeszköz:** kijelölt számítógép, papír, toll, ceruza, lepecsételt pótlap, általános keresésre internet [cite: 1]

---

## A részfeladatok pontszámai

| Feladat részletezése | Asztali (konzolos) | Asztali (grafikus) | Web (backend + frontend) | Összesen |
| :--- | :---: | :---: | :---: | :---: |
| **Elérhető pontszám** | 15 | 10 | 10 + 15 + 15 | 65 |
| **Minimális % (40%)** | | | | 26 pont |

**Értékelési skála:**
- 80-100% : 5
- 60-79% : 4
- 50-59% : 3
- 40-49% : 2
- [cite_start]0-39% : 1 [cite: 1, 2]

---

## Fontos tudnivalók
- [cite_start]Az internetkapcsolatot kizárólag általános keresésre használhatja[cite: 5].
- [cite_start]Mentse munkáját rendszeresen a megadott vizsgakönyvtárba[cite: 8].
- [cite_start]Csak a forráskódot tartalmazó állományok értékelhetők[cite: 11].
- [cite_start]Az adatbázis-fejlesztés értékelése az asztali és a webes részekben történik[cite: 12].

---

## 1. Projekt feladat: Asztali alkalmazás fejlesztése
[cite_start]Magyarország nevezetes fáinak adatait tartalmazó szöveges állományok (CSV) feldolgozása[cite: 17].

### Adatforrások
**fa.csv:**
- `azon`: azonosító (egész)
- `faj`: fajta (szöveg)
- `kormeret`: törzs körmérete
- `telepules_id`: település azonosítója
- [cite_start]`meres`: mérés éve [cite: 25]

**telepules.csv:**
- `id`: azonosító
- `nev`: település neve
- [cite_start]`megyeid`: vármegye azonosítója [cite: 25]

### Feladatok (Konzol - NagyFak)
1.  [cite_start]Hozzon létre egy `Fa` osztályt a megadott mezőkkel (Azon, Faj, Kormeret, Telepulesid, MeresEve, TelepulesNev)[cite: 28].
2.  [cite_start]Készítsen statikus `Beolvas` metódust a fájlok betöltéséhez[cite: 29].
3.  [cite_start]Határozza meg a legnagyobb körméretű fát és települését[cite: 36].
4.  [cite_start]Listázza ki azt a négy települést, ahol a legtöbb nagy körméretű fa található[cite: 37].
5.  [cite_start]Kérjen be egy fafajtát a felhasználótól, és mentse az adatait egy `.txt` fájlba (pl. `Hars.csv`)[cite: 38, 39, 42].

### Feladatok (GUI - NagyFakGUI)
1.  [cite_start]Készítsen reszponzív grafikus felületet `NagyFakGUI` néven[cite: 49, 50].
2.  [cite_start]A háttérkép a `farajz.jpg` legyen[cite: 52].
3.  [cite_start]Csatlakozzon a `fak_db` adatbázishoz[cite: 54].
4.  [cite_start]Az "Adatok betöltése" gombra kattintva töltse be a fák listáját egy ListBox-ba[cite: 55].
5.  [cite_start]A lista elemére kattintva jelenjen meg a település neve és a hozzá tartozó kép az `img` mappából[cite: 55].

---

## 2. Projekt feladat: Webalkalmazás fejlesztése
[cite_start]**Öregfák Nyilvántartó Rendszer**[cite: 56].

### Részek:
1.  [cite_start]**Reszponzív weboldal:** Bootstrap és saját CSS használatával[cite: 57].
2.  [cite_start]**Backend:** Node.js + Express + MySQL REST API[cite: 57].
3.  [cite_start]**Frontend:** Listázás, felvitel, törlés és képlink-módosítás[cite: 57].

### Adatbázis struktúra (fak_db)
- [cite_start]**fa tábla:** `azon`, `faj`, `kormeret`, `telepules_id`, `meres`, `URL` [cite: 63]
- [cite_start]**telepules tábla:** `id`, `nev`, `megyeid` [cite: 63]
- [cite_start]**megye tábla:** `id`, `nev` [cite: 63]

### Weboldal követelmények:
- `index.html` (kezdőlap látványos fejléccel)
- `fak.html` (fák listája)
- `hozzaadas.html` (új fa felvétele)
- [cite_start]`kepek.html` (képlink módosítása) [cite: 8]
- [cite_start]Aktuális menüpont kiemelése: `RGB(100, 100, 160)`, félkövér[cite: 8].