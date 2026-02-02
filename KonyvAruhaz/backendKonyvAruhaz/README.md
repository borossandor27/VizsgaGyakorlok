# Backend alkalmazás

Készítse el az alábbi végpontokat megvalósító RESTful API-t Express.js segítségével:

## Könyvek egyedhez kapcsolódó végpontok

- **GET /books**: Minden könyv lekérdezése
- **GET /books/:id**: Egy konkrét könyv lekérdezése az azonosítója alapján
- **POST /books**: Új könyv hozzáadása
- **PUT /books/:id**: Létező könyv módosítása
- **DELETE /books/:id**: Könyv törlés

## Felhasználókkal kapcsolatos végpontok

- **POST /users**: Új felhasználó regisztrálása
- **POST /users/login**: Bejelentkezés

## Rendelésekkel kapcsolatos végpontok

- **POST /orders**: Új rendelés feladása
- **GET /orders/:userId**: Egy felhasználó összes rendelésének lekérdezése

## Mappa struktúra javaslat

```bash
/backend
├── db.js                ← adatbázis kapcsolat
├── server.js            ← szerver indítás
├── routes
│   ├── books.js         ← könyvek CRUD
│   ├── users.js         ← regisztráció, login
│   └── orders.js        ← rendelések kezelése
└── controllers
    ├── booksController.js
    ├── usersController.js
    └── ordersController.js
```

## Szerver indítása

A szerver elindításához futtassa a következő parancsot a terminálban:

> ```bash
>  node server.js
> ```

A szerver alapértelmezés szerint a `http://localhost:3000` címen lesz elérhető
