# Könyv áruház
Készítsünk egy olyan webes alkalmazást, ahol a felhasználók kereshetnek könyvek között, részletes információkat kaphatnak róluk, és akár vásárlási lehetőséget is biztosítunk.

# Adatbázis (MySQL)

##	könyvek tábla 
-	konyv_id (auto inkrementáló sorszám)
-	cím
-	szerző
-	kiadó
-	kiadási év
-	ISBN
-	leírás
-	borítókép (fájl elérési útja)
-	ár
-	készleten (logikai érték: igen/nem)

##	felhasználók tábla 
-	user_id (auto inkrementáló sorszám)
-	felhasználónév
-	email
-	jelszó (hash-elve)
-	cím
-	telefonszám

##	rendelések tábla 
-	rendeles_id (auto inkrementáló sorszám)
-	felhasználó_id (idegen kulcs a felhasználók táblára)
-	könyv_id (idegen kulcs a könyvek táblára)
-	mennyiség
-	dátum

# Asztali alkalmazás
## Konzolos
Készítsen konzolos asztali alkalmazást, amely a következő feladatokat megoldja
- Készítsen a `könyvek entitás` adatainak a fogadására képes osztályt
- Olvassa be az adatokat a `konyvek.csv`, `konyvek.json` szövegfájlból vagy a `konyvaruhaz` adatbázisból
- Írassa ki a beolvasott könyvek darabszámát
- Írassa ki azoknak a könyveknek a szerzőjét, címét és árát, amelyeknél a szerző neve tartalmazza az `Ernest` karakter sorozatot.
- Jelenítse meg, melyik kiadónak mennyi könyve szerepel a listában

## GUI
- Készítsen olyan grafikus felüleltű alkalmazást, amely lehetőséget ad új könyv rögzítésére

# Backend - Express.js API
Készítse el az alábbi végpontokat!
##	Könyvekhez kapcsolódó 
-	**GET /books**: Minden könyv lekérdezése
-	**GET /books/:id**: Egy konkrét könyv lekérdezése az azonosítója alapján
-	**POST /books**: Új könyv hozzáadása
-	**PUT /books/:id**: Létező könyv módosítása
-	**DELETE /books/:id**: Könyv törlése

##	Felhasználókkal kapcsolatos
-	**POST /users**: Új felhasználó regisztrálása
-	**POST /users/login**: Bejelentkezés

##	Rendelésekkel kapcsolatos
-	**POST /orders**: Új rendelés feladása
-	**GET /orders/:userId**: Egy felhasználó összes rendelésének lekérdezése

# React frontend
-	**Főoldal**: Keresőmező, népszerű könyvek listája
-	**Könyv részletek**: A könyv adatai, vásárlási gomb
-	**Kosár**: A kosár tartalmának megjelenítése, rendelés feladása
-	**Felhasználói profil**: Személyes adatok módosítása, rendelések megtekintése
-	**Bejelentkezés/regisztráció**: Felhasználói fiók kezelése

# További lehetséges funkciók
-	Kategóriák: A könyveket kategóriák szerint lehet szűrni.
-	Vélemények: A felhasználók értékelhetik a könyveket és írhatnak véleményeket.
-	Ajánlások: A rendszer személyre szabott ajánlásokat tehet a felhasználóknak.
-	Fizetési integráció: Kapcsolat egy fizetési szolgáltatóval (pl. Stripe).
-	Admin felület: A könyvtárak kezelése, statisztikák.

