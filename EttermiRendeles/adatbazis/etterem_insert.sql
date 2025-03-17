-- Feltöltés a Users táblába
INSERT INTO Users (name, email, password, role) VALUES
('Admin Felhasználó', 'admin@example.com', 'admin123', 'admin'),
('Pincér János', 'pincer@example.com', 'pincer123', 'pincer'),
('Vendég Gábor', 'vendeg@example.com', 'vendeg123', 'vendeg');

-- Feltöltés a Categories táblába
INSERT INTO Categories (name) VALUES
('Levesek'),
('Főételek'),
('Desszertek'),
('Italok'),
('Saláták');

-- Feltöltés a MenuItems táblába
INSERT INTO MenuItems (name, description, price, category_id, image_url, available) VALUES
('Gulyásleves', 'Hagyományos magyar gulyásleves', 500, 1, 'etelKepek/gulyasleves.jpg', TRUE),
('Paradicsomleves', 'Friss paradicsomleves', 400, 1, 'etelKepek/paradicsomleves.jpg', TRUE),
('Zöldbableves', 'Hagyományos zöldbableves', 450, 1, 'etelKepek/zoldbableves.jpg', TRUE),
('Rántott csirke', 'Ropogós bundában sült csirkemell', 1200, 2, 'etelKepek/rantottcsirke.jpg', TRUE),
('Sült csirke', 'Fűszeres sült csirke', 1300, 2, 'etelKepek/sultcsirke.jpg', TRUE),
('Sült krumpli', 'Frissen sült krumpli', 500, 2, 'etelKepek/sultkrumpli.jpg', TRUE),
('Palacsinta', 'Házi lekváros palacsinta', 300, 3, 'etelKepek/palacsinta.jpg', TRUE),
('Túrós tészta', 'Hagyományos túrós tészta', 400, 3, 'etelKepek/turostest.jpg', TRUE),
('Tiramisu', 'Klasszikus olasz desszert', 500, 3, 'etelKepek/tiramisu.jpg', TRUE),
('Ásványvíz', '0.5L ásványvíz', 200, 4, 'etelKepek/asvanyviz.jpg', TRUE),
('Coca Cola', '0.5L üdítő', 300, 4, 'etelKepek/cocacola.jpg', TRUE),
('Sör', 'Hűtött sör', 400, 4, 'etelKepek/sor.jpg', TRUE),
('Cézár saláta', 'Friss csirkemelles Cézár saláta', 600, 5, 'etelKepek/cezarsalata.jpg', TRUE),
('Görög saláta', 'Friss zöldségekből készült görög saláta', 700, 5, 'etelKepek/gorogsalata.jpg', TRUE),
('Közép-ázsiai saláta', 'Friss, fűszeres közép-ázsiai saláta', 800, 5, 'etelKepek/kozepazsiasalata.jpg', TRUE);

-- Feltöltés a Tables táblába
INSERT INTO Tables (table_number) VALUES
(1),
(2),
(3);

-- Feltöltés a Orders táblába
INSERT INTO Orders (table_id, user_id, status, total_price) VALUES
(1, 2, 'folyamatban', 4000),
(2, 2, 'elkészült', 2500),
(3, 3, 'fizetve', 800);

-- Feltöltés a OrderItems táblába
INSERT INTO OrderItems (order_id, menu_item_id, quantity, price) VALUES
(1, 1, 2, 1000),
(1, 4, 1, 1200),
(2, 7, 2, 600),
(3, 10, 1, 200);

-- Feltöltés a Payments táblába
INSERT INTO Payments (order_id, amount, payment_method) VALUES
(3, 800, 'készpénz');
```
