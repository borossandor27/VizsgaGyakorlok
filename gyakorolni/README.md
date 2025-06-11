# README - Szoftverfejlesztő és -tesztelő vizsgafeladat

## 📝 Projekt leírás
Ez a projekt egy 1970-es évekbeli rockzenekarok adatait kezelő alkalmazás, amely három fő részből áll:
1. Konzolos alkalmazás (C#)
2. Grafikus asztali alkalmazás
3. Webes alkalmazás (Node.js backend + React frontend)

## 📂 Projekt struktúra
```
szoftverfejleszto-vizsga/
├── Rockzenekar/               # Konzolos alkalmazás (C#)
├── rockZenekarokGUI/          # Grafikus alkalmazás
├── Vezeteknev_Keresztnev_backend/  # Node.js backend
├── Vezeteknev_Keresztnev_frontend/ # React frontend
└── dokumentacio/              # Vizsgadokumentumok
```

## 🎯 Feladatok

### 1. Konzolos alkalmazás (15 pont)
- Zenekar osztály implementálása
- Adatbetöltés CSV fájlból
- Zenekarok szűrése alapítási év szerint
- Zenei stílus azonosító keresése
- Interaktív menürendszer

### 2. Grafikus alkalmazás (10 pont)
- Reszponzív ablak megjelenítés
- Adatbázis kapcsolat (MySQL)
- Zenekarok listázása
- Aktív évek számításának megjelenítése
- Képbetöltés URL alapján

### 3. Webes alkalmazás (40 pont)
#### Backend (Node.js)
- REST API végpontok:
  - `/api/zenekar` - Zenekarok listázása
  - `/api/ujzenekar` - Új zenekar hozzáadása
  - `/api/stilus` - Zenei stílusok listázása
- MySQL adatbázis integráció
- Hibakezelés és validáció

#### Frontend (React)
- Reszponzív felület Bootstrap segítségével
- Zenekarok megjelenítése kártyákon
- Új zenekar hozzáadása űrlapon
- Aktív évek számítása
- Navigációs menü

## 🔧 Futtatási útmutató

### Konzolos alkalmazás
1. Nyissa meg a `Rockzenekar.sln` fájlt Visual Studio-ban
2. Indítsa el a programot (F5)

### Grafikus alkalmazás
1. Nyissa meg a `rockZenekarokGUI.sln` fájlt Visual Studio-ban
2. Ellenőrizze az adatbázis kapcsolatot
3. Indítsa el a programot (F5)

### Webes alkalmazás
#### Backend
```bash
cd Vezeteknev_Keresztnev_backend
npm install
npm start
```

#### Frontend
```bash
cd Vezeteknev_Keresztnev_frontend
npm install
npm start
```

## 📋 Követelmények
- .NET 5.0 vagy újabb
- Node.js 14.x vagy újabb
- MySQL 8.0 vagy újabb
- Visual Studio 2019/2022 (opcionális)

## 📊 Adatbázis séma
```sql
CREATE TABLE zenekarok (
  id INT PRIMARY KEY,
  nev VARCHAR(100),
  stilus_id INT,
  orszag VARCHAR(50),
  varos VARCHAR(50),
  aktiv_evek VARCHAR(50),
  tagok TEXT,
  legsikeresebb_album VARCHAR(100),
  kep_url TEXT
);

CREATE TABLE stilusok (
  id INT PRIMARY KEY,
  stilus_neve VARCHAR(100)
);
```

## 📬 Leadási útmutató
1. Tömörítse a projektmappákat:
   - `Vezeteknev_Keresztnev_backend.zip`
   - `Vezeteknev_Keresztnev_frontend.zip`
2. Mellékelje a dokumentációt
3. Ellenőrizze, hogy minden fájl megfelelően működik

## 📞 Kapcsolat
Probléma esetén forduljon a vizsgafelügyelőhöz.

**Sikeres munkát kívánunk!** 🚀