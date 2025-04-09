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
mkdir backend
cd backend
npm i express mysql2 cors
npm pkg set type=module
cd ..
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm pkg set type=module
npm install axios react-router-dom
cd ..
```

> [!WARNING]  
> Mindkét `package.json`-ban állítsd be `"type": "module"` 
