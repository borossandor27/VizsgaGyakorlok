# furdo_db – Adatbázis dokumentáció

## Áttekintés

A `furdo_db` adatbázis Magyarország gyógyfürdőit, strandfürdőit és élményfürdőit tartja nyilván, városokhoz és vármegyékhez rendelve.

## Táblák

### `megye` tábla

| Mező | Típus        | Leírás                  |
|------|-------------|-------------------------|
| id   | INT(11) PK  | Vármegye azonosítója     |
| nev  | VARCHAR(100)| Vármegye neve            |

### `varos` tábla

| Mező     | Típus        | Leírás                        |
|----------|-------------|-------------------------------|
| id       | INT(11) PK  | Város azonosítója              |
| nev      | VARCHAR(100)| Város neve                    |
| megye_id | INT(11) FK  | Hivatkozás a megye.id mezőre  |

### `furdo` tábla

| Mező       | Típus        | Leírás                                      |
|------------|-------------|---------------------------------------------|
| azon       | INT(11) PK  | Fürdő egyedi azonosítója                    |
| nev        | VARCHAR(100)| Fürdő neve                                  |
| tipus      | VARCHAR(50) | Fürdő típusa (gyógyfürdő / strand / élményfürdő) |
| medencek   | INT(11)     | Medencék száma                              |
| belepodij  | INT(11)     | Felnőtt belépőjegy ára forintban            |
| varos_id   | INT(11) FK  | Hivatkozás a varos.id mezőre               |
| nyitas_eve | INT(11)     | A fürdő megnyitásának éve                   |
| URL        | VARCHAR(500)| Képlink – a fürdő fényképének elérési útja  |

## Kapcsolatok

```
megye (1) ──── (N) varos (1) ──── (N) furdo
```

## Megjegyzések

- Az `URL` mező értéke üres string (`''`), ha a fürdőhöz nincs kép beállítva.
- Az azon = 1..10 fürdőkhöz a `kepek/1.jpg` … `kepek/10.jpg` képek tartoznak.
- A frontend `3.3 Képek kezelése` feladatban az URL mező PUT végponton keresztül módosítható.

## Használati példa

```sql
-- Összes fürdő várossal együtt
SELECT f.azon, f.nev, f.tipus, f.belepodij, f.nyitas_eve, v.nev AS varos, f.URL
FROM furdo f
JOIN varos v ON f.varos_id = v.id
ORDER BY f.azon;

-- Legdrágább belépőjű fürdő
SELECT f.nev, v.nev AS varos, f.belepodij
FROM furdo f
JOIN varos v ON f.varos_id = v.id
ORDER BY f.belepodij DESC
LIMIT 1;

-- Városok fürdőszám szerint
SELECT v.nev, COUNT(f.azon) AS furdok_szama
FROM varos v
JOIN furdo f ON v.id = f.varos_id
GROUP BY v.id, v.nev
ORDER BY furdok_szama DESC
LIMIT 4;
```
