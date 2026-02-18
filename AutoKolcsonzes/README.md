# AutoKölcsönzés feladat

Egy több telephellyel rendelkező autókölcsönző cég szeretné megoldani a kölcsönzési folyamatot egy új szoftverrel. A cégnek több telephelye van, ahol különböző típusú autókat kínálnak bérlésre. Az ügyfelek online foglalhatnak autókat, és a rendszernek kezelnie kell a foglalásokat, az autók elérhetőségét, valamint a fizetési folyamatot.

## Asztali konzolos feladat

A feladat egy asztali konzolos alkalmazás létrehozása, amely lehetővé teszi a következő műveleteket:

1. **Olvassa be az autók adatait egy fájlból**: Az autók adatai `kolcsonzesek.csv` fájlban vannak tárolva, ahol minden sor egy autó adatait tartalmazza (pl. "kolcsonzes_szama";"ugyfel";"automarka";"automodell";"napi_dij";"mettol";"meddig")
2. **Írassa ki a kölcsönzések számát**: A program számolja meg, hogy hány kölcsönzés történt.
3. **Írassa ki a legdrágább kölcsönzést**: A program keresse meg és jelenítse meg a legdrágább kölcsönzést, azaz azt, amelyik a legmagasabb kölcsonzési díjat eredményezett. (*A kölcsönzési díj a napi díj és a kölcsönzés időtartamának szorzata.*)
4. **Írassa ki a legnépszerűbb autómárkát**: A program határozza meg, hogy melyik autómárka volt a legnépszerűbb a kölcsönzések során. Mely autómárkát kölcsönözték a legtöbbször?
5. **Melyik ügyfél kölcsönözte a legtöbb autót?**: A program határozza meg, hogy melyik ügyfél kölcsönözte a legtöbb autót, és jelenítse meg az ügyfél nevét és a kölcsönzések számát.
6. **Írassa ki a kölcsönzések átlagos időtartamát**: A program számolja ki, hogy átlagosan mennyi ideig tartott egy kölcsönzés.
7. **Írassa ki a kölcsönzések összesített díját**: A program számolja ki, hogy összesen mennyi pénzt fizettek a kölcsönzésekért.
8. **Írassa ki, hogy 2025. év decemberében hány kölcsönzés történt**: A program számolja meg, hogy 2025. decemberében hány kölcsönzés történt.
9. **adott kölcsönző kölcsönzéseinek listázása**: A program kérjen be egy ügyfél nevet, és jelenítse meg az adott ügyfél összes kölcsönzését, beleértve az autó márkáját, modelljét, a kölcsönzés időtartamát és a fizetendő díjat.
10. **Kölcsönző adatainak mentása fájlba**: Az előző művelet után, és mentse el az adott ügyfél összes kölcsönzését egy új fájlba, amelynek neve az ügyfél nevéből származik (pl. "ugyfel_neve_kolcsonzesei.csv").

## Asztali GUI-s feladat

Grafikus felületen valósítsa meg az alábbi funkciókat:

1. **Autók adatainak megjelenítése**: Hozzon létre egy táblázatot, amely megjeleníti az autók adatait a `kolcsonzesek.csv` fájlból.
2. **Új kölcsönzés hozzáadása**: Hozzon létre egy űrlapot, ahol az ügyfelek megadhatják a kölcsönzés adatait (pl. ügyfél neve, autó márkája, modellje, napi díj, kölcsönzés kezdete és vége), majd mentse el ezeket az adatokat a `kolcsonzesek.csv` fájlba.
3. **Kölcsönzések szűrése**: Hozzon létre egy szűrő funkciót, amely lehetővé teszi a kölcsönzések szűrését az ügyfél neve alapján.
4. **Menü létrehozása**: Hozzon létre egy menüt, amely lehetővé teszi a különböző műveletek elérését (pl. kölcsönzések száma, legdrágább kölcsönzés, legnépszerűbb autómárka stb.).
5. **Kölcsönzések statisztikáinak megjelenítése**: Hozzon létre egy külön szekciót, ahol megjelenítheti a kölcsönzések statisztikáit (pl. átlagos időtartam, összesített díj, 2025. decemberi kölcsönzések száma stb.).

## Back-end feladat

Hozzon létre egy RESTful API-t, amely lehetővé teszi a kölcsönzési adatok kezelését. Az API-nak a következő végpontokat kell tartalmaznia:

1. **GET /kolcsonzesek**: Visszaadja az összes kölcsönzést az alábbi formátumban:

   ```json
   [
    {
        "kolcsonzes_szama": 1,
        "ugyfel": "Kovács János",
        "rendszam": "AA-AB-123",
        "automarka": "Volkswagen",
        "automodell": "Golf 8",
        "napi_dij": 18000,
        "mettol": "2025-01-10",
        "meddig": "2025-01-15"
    },
    {
        "kolcsonzes_szama": 15,
        "ugyfel": "Kovács János",
        "rendszam": "AA-AB-123",
        "automarka": "Volkswagen",
        "automodell": "Golf 8",
        "napi_dij": 18000,
        "mettol": "2025-08-10",
        "meddig": "2025-08-15"
    },
    {
        "kolcsonzes_szama": 30,
        "ugyfel": "Kovács János",
        "rendszam": "AA-CD-456",
        "automarka": "Toyota",
        "automodell": "Corolla",
        "napi_dij": 22000,
        "mettol": "2026-02-16",
        "meddig": "2026-02-20"
    },
     ...
   ]
   ```

1. **GET /autok**: Visszaadja az összes autó adatait az alábbi formátumban:

   ```json
   [
    {
        "rendszam": "AA-AB-123",
        "automarka": "Volkswagen",
        "automodell": "Golf 8",
        "napi_dij": 18000
    },
    {
        "rendszam": "AA-CD-456",
        "automarka": "Toyota",
        "automodell": "Corolla",
        "napi_dij": 22000
    },
     ...
   ]
   ```

1. **GET /autok/{rendszam}**: Visszaadja a megadott rendszámmal rendelkező autó adatait.
1. **GET /ugyfelek**: Visszaadja az összes ügyfél adatait az alábbi formátumban:

   ```json
   [
    {
        "nev": "Kovács János",
        "email": "kovacs.janos@example.com"
    },
    {
        "nev": "Nagy Anna",
        "email": "nagy.anna@example.com"
    },
     ...
   ]
   ```

1. **GET /ugyfelek/{nev}**: Visszaadja a megadott névvel rendelkező ügyfél adatait.
1. **GET /kolcsonzohelyek**: Visszaadja az összes telephely adatait az alábbi formátumban:

   ```json
   [
    {
        "id": 1,
        "nev": "Budapest Kölcsönző",
        "cim": "Budapest, Fő utca 1."
    },
    {
        "id": 2,
        "nev": "Debrecen Kölcsönző",
        "cim": "Debrecen, Kossuth utca 5."
    },
     ...
   ]
   ```

1. **GET /kolcsonzohelyek/{id}**: Visszaadja a megadott azonosítóval rendelkező telephely adatait.
1. **Get /kolcsonzesek**: Visszaadja az összes kölcsönzést az alábbi formátumban:

   ```json
   [
    {
        "kolcsonzes_szama": 1,
        "ugyfel": "Kovács János",
        "rendszam": "AA-AB-123",
        "automarka": "Volkswagen",
        "automodell": "Golf 8",
        "napi_dij": 18000,
        "mettol": "2025-01-10",
        "meddig": "2025-01-15"
    },
    {
        "kolcsonzes_szama": 15,
        "ugyfel": "Kovács János",
        "rendszam": "AA-AB-123",
        "automarka": "Volkswagen",
        "automodell": "Golf 8",
        "napi_dij": 18000,
        "mettol": "2025-08-10",
        "meddig": "2025-08-15"
    },
    {
        "kolcsonzes_szama": 30,
        "ugyfel": "Kovács János",
        "rendszam": "AA-CD-456",
        "automarka": "Toyota",
        "automodell": "Corolla",
        "napi_dij": 22000,
        "mettol": "2026-02-16",
        "meddig": "2026-02-20"
    },
     ...
   ]
   ```

1. **GET /kolcsonzesek/{id}**: Visszaadja a megadott azonosítóval rendelkező kölcsönzés adatait.
1. **POST /kolcsonzesek**: Lehetővé teszi egy új kölcsönzés hozzáadását. A kérés testének tartalmaznia kell a kölcsönzés adatait (`auto_id`, `kolcsonzo_id`, `ugyfel_id`, `mettol`, `meddig`). pl.:

   ```json
   {
    "auto_id": 1,
    "kolcsonzo_id": 1,
    "ugyfel_id": 1,
    "mettol": "2025-09-01",
    "meddig": "2025-09-05"
   }
   ```

1. **GET /kolcsonzesek/ugyfel/{ugyfel_neve}**: Visszaadja az adott ügyfél összes kölcsönzését.

Az API-nak megfelelő hibakezelést kell biztosítania, például ha egy adott autó vagy ügyfél nem található, akkor egy 404-es hibakódot kell visszaadnia. Emellett a POST végpontnak validálnia kell a bemeneti adatokat, és ha azok érvénytelenek, akkor egy 400-as hibakódot kell visszaadnia.

[Az adatbázist létrehozó SQL fájl itt található.](./forrasok/autokocsonzes.sql)

## Front-end feladat

Hozzon létre egy webes alkalmazást, amely a fenti API-t használja az autókölcsönzési adatok megjelenítésére és kezelésére. Az alkalmazásnak a következő funkciókat kell tartalmaznia:

1. **Autók megjelenítése**: Hozzon létre egy oldalt, ahol megjelenítheti az összes autó adatait. Az autók külön-külön kártyán jelenjenek meg. Minden autóhoz jelenítse meg a márkát, modellt, napi díjat és egy "Részletek" gombot, amely megjeleníti az adott autó részletes adatait.
2. **Új kölcsönzés hozzáadása**: Hozzon létre egy űrlapot, ahol az ügyfelek megadhatják a kölcsönzés adatait (pl. ügyfél neve, autó márkája, modellje, napi díj, kölcsönzés kezdete és vége), majd küldje el ezeket az adatokat a `POST /kolcsonzesek` végpontra.
3. **Kölcsönzések megjelenítése**: Hozzon létre egy oldalt, ahol megjelenítheti az összes kölcsönzés adatait. Minden kölcsönzéshez jelenítse meg az ügyfél nevét, autó márkáját, modelljét, a kölcsönzés időtartamát és a fizetendő díjat.
4. **Kölcsönzések szűrése**: Hozzon létre egy szűrő funkciót, amely lehetővé teszi a kölcsönzések szűrését az ügyfél neve alapján.
5. **Az oldalak közötti navigáció**: Hozzon létre egy navigációs menüt, amely lehetővé teszi a különböző oldalak közötti könnyű navigációt (pl. autók megjelenítése, új kölcsönzés hozzáadása, kölcsönzések megjelenítése stb.).
6. **Fejléc és lábléc**: Hozzon létre egy fejléces és lábléces részt az oldalon, ahol megjelenítheti a cég nevét, logóját és egyéb információkat.

Az alkalmazásnak reszponzívnak kell lennie, hogy különböző eszközökön is jól használható legyen. Emellett biztosítani kell a megfelelő hibakezelést, például ha egy adott autó vagy ügyfél nem található, akkor egy értesítést kell megjeleníteni a felhasználónak.
