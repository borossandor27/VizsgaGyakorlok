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
> [!NOTE]
> A szerver elindításához futtassa a következő parancsot a terminálban:
> ```bash
>  node server.jsx
> ```