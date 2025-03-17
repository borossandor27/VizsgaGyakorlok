# Éttermi Rendeléskezelő Rendszer

## Feladatleírás
Készíts egy többkomponensű rendeléskezelő rendszert egy étterem számára. A rendszer három fő részből áll:  
- Egy **konzolos C# alkalmazás**, amely lehetővé teszi az adminisztrátor számára az ételek és kategóriák kezelését.
- Egy **grafikus asztali alkalmazás C#-ban (WinForms vagy WPF)**, amely a pincérek számára biztosít felületet az asztalokhoz tartozó rendelések kezelésére.
- Egy **reszponzív weboldal**, amelyen keresztül a vendégek megtekinthetik a menüt és rendelhetnek.

A rendszer egy **REST API-t** használ a rendelési adatok tárolására és lekérdezésére, amely egy **MySQL *(vagy a tanult)* adatbázissal** működik. A weboldal **frontend része HTML, CSS és JavaScript segítségével épül fel**, és a REST API-val kommunikál.

## Az adatbázis felépítése
Az éttermi rendeléskezelő rendszer az alábbi táblákat tartalmazza:

### **1. `Users` – Felhasználók táblája (adminok, pincérek, vendégek)**
Tárolja az adminok és pincérek adatait, valamint az esetleges regisztrált vendégeket.

| oszlopnév | típusa | megjegyzés |
|-----------|-------|-----------|
| `id` | INT, PRIMARY KEY, AUTO_INCREMENT | Egyedi azonosító |
| `name` | VARCHAR(100) | Felhasználó neve |
| `email` | VARCHAR(255), UNIQUE | Egyedi email cím |
| `password` | VARCHAR(255) | Titkosított jelszó |
| `role` | ENUM('admin', 'pincer', 'vendeg') | Felhasználói szerepkör |


### **2. `Categories` – Ételkategóriák (pl. előételek, főételek, desszertek)**
Az ételek kategorizálására szolgál.

| oszlopnév | típusa | megjegyzés |
|-----------|-------|-----------|
| `id` | INT, PRIMARY KEY, AUTO_INCREMENT | Egyedi azonosító |
| `name` | VARCHAR(100), UNIQUE | Kategória neve |


### **3. `MenuItems` – Étlap (ételek, italok)**
Ez a tábla tartalmazza az összes rendelhető ételt.

| oszlopnév | típusa | megjegyzés |
|-----------|-------|-----------|
| `id` | INT, PRIMARY KEY, AUTO_INCREMENT | Egyedi azonosító |
| `name` | VARCHAR(255) | Étel neve |
| `description` | TEXT | Rövid leírás |
| `price` | DECIMAL(10,2) | Ár |
| `category_id` | INT, FOREIGN KEY (`Categories.id`) | Kategória hivatkozás |
| `image_url` | VARCHAR(255) | Kép URL (opcionális) |
| `available` | BOOLEAN DEFAULT TRUE | Elérhetőség jelzése |


### **4. `Tables` – Asztalok táblája**
Az étterem asztalait tárolja, amelyhez rendeléseket lehet kapcsolni.

| oszlopnév | típusa | megjegyzés |
|-----------|-------|-----------|
| `id` | INT, PRIMARY KEY, AUTO_INCREMENT | Egyedi azonosító |
| `table_number` | INT, UNIQUE | Asztalszám |


### **5. `Orders` – Rendelések táblája**
Minden rendelés egy bejegyzés ebben a táblában.

| oszlopnév | típusa | megjegyzés |
|-----------|-------|-----------|
| `id` | INT, PRIMARY KEY, AUTO_INCREMENT | Egyedi rendelési azonosító |
| `table_id` | INT, FOREIGN KEY (`Tables.id`) | Melyik asztalhoz tartozik |
| `user_id` | INT, FOREIGN KEY (`Users.id`) | Melyik felhasználó (vendég/pincér) rögzítette |
| `status` | ENUM('folyamatban', 'elkészült', 'fizetve') | Rendelés állapota |
| `total_price` | DECIMAL(10,2) | Rendelés végösszege |
| `created_at` | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Időbélyeg |


### **6. `OrderItems` – Rendelési tételek (étlap + rendelés kapcsolat)**
Ebben tároljuk, hogy egy adott rendelés milyen ételekből áll.

| oszlopnév | típusa | megjegyzés |
|-----------|-------|-----------|
| `id` | INT, PRIMARY KEY, AUTO_INCREMENT | Egyedi azonosító |
| `order_id` | INT, FOREIGN KEY (`Orders.id`) | Melyik rendeléshez tartozik |
| `menu_item_id` | INT, FOREIGN KEY (`MenuItems.id`) | Melyik ételt tartalmazza |
| `quantity` | INT | Mennyiség |
| `price` | DECIMAL(10,2) | Egységár |


### **7. `Payments` – Fizetések táblája**
Tárolja a fizetési adatokat.

| oszlopnév | típusa | megjegyzés |
|-----------|-------|-----------|
| `id` | INT, PRIMARY KEY, AUTO_INCREMENT | Egyedi azonosító |
| `order_id` | INT, FOREIGN KEY (`Orders.id`) | Melyik rendeléshez tartozik |
| `amount` | DECIMAL(10,2) | Fizetett összeg |
| `payment_method` | ENUM('készpénz', 'bankkártya', 'online') | Fizetési mód |
| `paid_at` | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Fizetés ideje |


## **Kapcsolatok az adatbázisban**
- **Egy rendelés több tételből állhat** → `Orders` és `OrderItems` kapcsolat.
- **Minden rendelési tétel egy adott étlap elemhez tartozik** → `OrderItems` és `MenuItems` kapcsolat.
- **Minden rendelés egy adott asztalhoz tartozik** → `Orders` és `Tables` kapcsolat.
- **Egy rendelést egy felhasználó *(pincér személyesen vagy vendég online)* rögzíthet** → `Orders` és `Users` kapcsolat.
- **Egy fizetés egy rendeléshez kapcsolódik** → `Payments` és `Orders` kapcsolat.

## **SQL kód az adatbázis létrehozásához**
```sql
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'pincer', 'vendeg') NOT NULL
);

CREATE TABLE Categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE MenuItems (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    image_url VARCHAR(255),
    available BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

CREATE TABLE Tables (
    id INT PRIMARY KEY AUTO_INCREMENT,
    table_number INT UNIQUE NOT NULL
);

CREATE TABLE Orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    table_id INT NOT NULL,
    user_id INT NOT NULL,
    status ENUM('folyamatban', 'elkészült', 'fizetve') NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (table_id) REFERENCES Tables(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE OrderItems (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    menu_item_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(id),
    FOREIGN KEY (menu_item_id) REFERENCES MenuItems(id)
);

CREATE TABLE Payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_method ENUM('készpénz', 'bankkártya', 'online') NOT NULL,
    paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES Orders(id)
);
```

## **1. Konzolos asztali alkalmazás (15 pont)**  
Készíts egy konzolos C# alkalmazást, amely az adminisztrátor számára biztosítja az alábbi funkciókat:  
- Alapvető statisztikák 
    - ételek eladott mennyiség szerint csökkenő sorrendben  
    - 

A konzolos alkalmazás a forrás adatokat megkaphatja a
- a REST API-n keresztül 
- közvetlen adatbázis kapcsolattal
- a források között lévő `etterem.csv` fájlból

## **2. Grafikus asztali alkalmazás (10 pont)**  
Készíts egy **C#-ban írt asztali alkalmazást *(WinForms vagy WPF)***, amelyet a pincérek használnak a rendelések kezelésére:  
- Asztalok azonosítóinak megjelenítése a felületen.  
- Új rendelés rögzítése az asztalokhoz.  
- Rendelések státuszának kezelése *(pl. „Folyamatban”, „Fizetve”)*.  
- Rendelések megtekintése és törlése.  

Az adatok betöltése és mentése történhet:
- a REST API-n keresztül 
- közvetlen adatbázis kapcsolattal
- a források között lévő `etterem.csv` fájlból


## **3. Reszponzív weboldal (10 pont)**  
> [!CAUTION]  
> A reszponzív weboldal az adatbázissal nem kommunikál
Hozz létre egy **reszponzív weboldalt HTML, CSS és JavaScript segítségével**, amely:  
- Megjeleníti az étterem menüjét.  
- Kategóriák szerint szűrhető ételeket tartalmaz.  
- Mobilbarát (Bootstrap vagy saját CSS grid rendszer használata).  



## **4. Backend programozás – REST API (15 pont)**  
Hozz létre egy kiszolgálót, amely egy **MySQL *(vagy a tanult)* adatbázishoz csatlakozik**. Az API-nak az alábbi végpontokat kell biztosítania:  
- **GET /menu** – Az étlap lekérése.  
- **POST /order** – Új rendelés rögzítése.  
- **GET /orders** – Aktív rendelések listázása.  
- **PUT /order/{id}** – Rendelés státuszának frissítése.  
- **DELETE /order/{id}** – Rendelés törlése.  

## **5. Frontend programozás – Webes rendelési felület (15 pont)**  
Készíts egy **HTML, CSS és JavaScript (React vagy Vanilla JS) alapú rendelési felületet**, amely:  
- Lekéri és megjeleníti az étlapot.  
- Lehetővé teszi a vendégek számára az online rendelést.  
- Kommunikál a REST API-val.  
- Megjeleníti a rendelési visszaigazolást.  

