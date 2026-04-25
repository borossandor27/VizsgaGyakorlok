# Fürdők Nyilvántartó Rendszer – Vizsgaanyagok

## Mappaszerkezet

```
vizsgaanyagok/
├── adatbazisok/
│   ├── furdo_db.sql     ← MySQL importálható szkript (táblák + adatok)
│   ├── furdo.csv        ← CSV adatforrás (45 fürdő)
│   └── varos.csv        ← CSV adatforrás (25 város)
├── kepek/               ← IDE kell a 10 db kép: 1.jpg … 10.jpg
├── bootstrap/           ← IDE kell: bootstrap.min.css + bootstrap.bundle.min.js
├── reszponziv/          ← Reszponzív HTML oldalak (1. részfeladat)
│   ├── index.html
│   ├── furdok.html
│   ├── hozzaadas.html
│   ├── kepek.html
│   └── css/
│       └── style.css
└── leiras.md            ← Adatbázis dokumentáció

megoldasok/
├── FurdoNyilvantarto/   ← C# konzol megoldás
│   ├── Furdo.cs
│   └── Program.cs
├── backend/             ← Node.js + Express REST API
│   ├── server.js
│   └── package.json
└── frontend/            ← React frontend
    ├── package.json
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── components/
    │       ├── Kezdolap.jsx
    │       ├── FurdokLista.jsx
    │       ├── UjFurdo.jsx
    │       └── KepekKezeles.jsx
    └── public/
        └── (bootstrap/ és kepek/ ide másolandó)
```

## Gyors indítás

### 1. Adatbázis importálása
```bash
# phpMyAdmin vagy Workbench segítségével importálja:
adatbazisok/furdo_db.sql
```

### 2. Backend
```bash
cd megoldasok/backend
npm install
node server.js
# → http://localhost:5000
```

### 3. React frontend
```bash
cd megoldasok/frontend
npm install
# Másolja a bootstrap/ mappát a public/ alá
npm run dev
# → http://localhost:5173
```

### 4. C# konzol
```
Visual Studio / Rider:
- Nyissa meg a FurdoNyilvantarto mappát
- Adja hozzá a furdo.csv és varos.csv fájlokat a projekt gyökerébe
- Futtassa a Program.cs-t
```

### 5. Reszponzív HTML
```
- Másolja a bootstrap/ mappát a reszponziv/ mellé
- Másolja a kepek/ mappát a reszponziv/ mellé
- Nyissa meg a reszponziv/index.html fájlt böngészőben
  (a háttérkép: kepek/10.jpg)
```

## API végpontok

| Metódus | URL                          | Leírás                    |
|---------|------------------------------|---------------------------|
| GET     | /api/furdok                  | Összes fürdő várossal     |
| GET     | /api/varosok                 | Városok listája (dropdown)|
| POST    | /api/furdok                  | Új fürdő rögzítése        |
| DELETE  | /api/furdok/:azon            | Fürdő törlése             |
| PUT     | /api/furdok/:azon/kep        | Képlink módosítása        |
