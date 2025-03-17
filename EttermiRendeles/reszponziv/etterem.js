document.addEventListener("DOMContentLoaded", function () {
    const menuData = [
        {
            "kategoria": "levesek",
            "etelek": [
                { "nev": "Gulyásleves", "ar": 500, "kepUrl": "etelKepek/gulyasleves.jpg" },
                { "nev": "Paradicsomleves", "ar": 400, "kepUrl": "etelKepek/paradicsomleves.jpg" },
                { "nev": "Zöldbableves", "ar": 450, "kepUrl": "etelKepek/zoldbableves.jpg" }
            ]
        },
        {
            "kategoria": "főételek",
            "etelek": [
                { "nev": "Rántott csirke", "ar": 1200, "kepUrl": "etelKepek/rantottcsirke.jpg" },
                { "nev": "Sült csirke", "ar": 1300, "kepUrl": "etelKepek/sultcsirke.jpg" },
                { "nev": "Sült krumpli", "ar": 500, "kepUrl": "etelKepek/sultkrumpli.jpg" }
            ]
        },
        {
            "kategoria": "desszertek",
            "etelek": [
                { "nev": "Palacsinta", "ar": 300, "kepUrl": "etelKepek/palacsinta.jpg" },
                { "nev": "Túrós tészta", "ar": 400, "kepUrl": "etelKepek/turostest.jpg" },
                { "nev": "Tiramisu", "ar": 500, "kepUrl": "etelKepek/tiramisu.jpg" }
            ]
        },
        {
            "kategoria": "italok",
            "etelek": [
                { "nev": "Ásványvíz", "ar": 200, "kepUrl": "etelKepek/asvanyviz.jpg" },
                { "nev": "Coca Cola", "ar": 300, "kepUrl": "etelKepek/cocacola.jpg" },
                { "nev": "Sör", "ar": 400, "kepUrl": "etelKepek/sor.jpg" }
            ]
        },
        {
            "kategoria": "saláták",
            "etelek": [
                { "nev": "Cézár saláta", "ar": 600, "kepUrl": "etelKepek/cezarsalata.jpg" },
                { "nev": "Görög saláta", "ar": 700, "kepUrl": "etelKepek/gorogsalata.jpg" },
                { "nev": "Közép-ázsiai saláta", "ar": 800, "kepUrl": "etelKepek/kozepazsiasalata.jpg" }
            ]
        }
    ];

    const menuContainer = document.getElementById("menu-container");

    // Ételek megjelenítése a JSON alapján
    menuData.forEach(category => {
        // Kategória cím hozzáadása
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category.kategoria.toUpperCase();
        categoryTitle.classList.add("mt-4", "text-center");
        menuContainer.appendChild(categoryTitle);

        const row = document.createElement("div");
        row.setAttribute("id", category.kategoria);
        row.classList.add("row");

        category.etelek.forEach(food => {
            const foodCard = `
                <div class="col-md-4 col-sm-6 mb-4 foodCardDiv">
                    <div class="card">
                        <img src="${food.kepUrl}" class="card-img-top" alt="${food.nev}">
                        <div class="card-body">
                            <h5 class="card-title">${food.nev}</h5>
                            <p class="card-text">${food.ar} Ft</p>
                            <button class="btn btn-success add-to-cart" data-name="${food.nev}" data-price="${food.ar}">Kosárba</button>
                        </div>
                    </div>
                </div>
            `;
            row.innerHTML += foodCard;
        });

        menuContainer.appendChild(row);
    });
    // Kosár kezelése
    const cartList = document.getElementById("cart");
    const foodCards = document.querySelectorAll(".add-to-cart");
    foodCards.forEach(button => {
        button.addEventListener("click", function (event) {
            const itemName = event.target.getAttribute("data-name");
            const itemPrice = event.target.getAttribute("data-price");

            const cartItem = document.createElement("li");
            cartItem.textContent = `${itemName} - ${itemPrice} Ft`;
            cartList.appendChild(cartItem);
        });
    });

    // kategóriák megjelenítése
    const categories = document.getElementById("category-container");
    menuData.forEach(category => {
        const categoryCheckbox = document.createElement("input");
        categoryCheckbox.type = "checkbox";
        categoryCheckbox.id = category.kategoria;
        categoryCheckbox.name = "category";
        categoryCheckbox.value = category.kategoria;
        categories.appendChild(categoryCheckbox);
        const categoryLabel = document.createElement("label");
        categoryLabel.textContent = category.kategoria;
        categoryLabel.htmlFor = category.kategoria;
        categories.appendChild(categoryLabel);

        categoryCheckbox.addEventListener("change", function (event) {
            const categoryRows = document.querySelectorAll(".row");
            categoryRows.forEach(row => {
                if (row.id === event.target.value) {
                    row.classList.toggle("d-none");
                }
            });
        });
    });
});
