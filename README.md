# Gyakorló feladatok
A szakmai vizsga `projekt vizsga-tevékenység ` `adatbázis - backend - frontend` 240 perces gyakorlati vizsgafeladatára felkészülést segítő feladatok 

## [Könyv áruház](./KonyvAruhaz/)

## [Felhasználó nyilvántartás](./UserRegister/)

## [Feladat ütemezés](./TodoAlkalmazas/)

## [Gyümölcsök](./Gyumolcsok/)

## [Névnap kereső](./Nevnapkereso/)

## [Ingatlan hirdetések](./Ingatlanhirdetesek/)

## [Éttermi rendelések](./EttermiRendeles/)

**Ami várhatóan közös minden feladatban:**
```bash
mkdir vizsga
cd vizsga
mkdir forras
mkdir asztali
npm create vite@latest frontend
mkdir backend
cd backend
npm i express mysql2 cors 
cd ../frontend
npm i axios react-router-dom react-dom
```

> [!WARNING]  
> Mindkét `package.json`-ban állítsd be `"type": "module"` 
