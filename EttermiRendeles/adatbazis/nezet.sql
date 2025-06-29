CREATE VIEW
    etteremAll AS
SELECT
    mi.name AS etelNeve,
    mi.description AS etelInfo,
    mi.price AS egysegAra,
    c.name AS kategoria,
    mi.image_url AS etelkepUrl,
    mi.available AS rendelheto,
    oi.quantity AS rendeltMennyiseg,
    oi.price AS egysegar,
    o.status AS allapot,
    o.total_price AS fizetendo,
    o.created_at AS rendelesIdopontja,
    p.amount AS fizetettOsszeg,
    p.payment_method AS fizetesModja,
    p.paid_at AS fizetesIdeje,
    t.table_number AS asztalSzama,
    u.name AS szemelyNeve,
    u.role AS szerepkor
FROM
    categories c
    JOIN menuitems mi ON c.category_id = mi.category_id
    JOIN orderitems oi ON mi.menuitem_id = oi.menuitem_id
    JOIN orders o ON oi.order_id = o.order_id
    JOIN payments p ON o.order_id = p.order_id
    JOIN tables t ON o.table_id = t.table_id
    JOIN users u ON o.user_id = u.user_id;