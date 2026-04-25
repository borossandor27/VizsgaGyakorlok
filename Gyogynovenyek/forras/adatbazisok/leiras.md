# Gyógynövény Nyilvántartó Rendszer – Adatbázis dokumentáció

## Adatbázis neve: `gyogynovenyek_db`

## Táblák

### `megye`
| Mező | Típus | Leírás |
|------|-------|--------|
| id | INT PK | Vármegye azonosítója |
| nev | VARCHAR(100) | Vármegye neve |

### `lelohely`
| Mező | Típus | Leírás |
|------|-------|--------|
| id | INT PK | Lelőhely azonosítója |
| nev | VARCHAR(100) | Lelőhely (település) neve |
| megyeid | INT FK | Kapcsolat a megye táblához |

### `gyogynoven`
| Mező | Típus | Leírás |
|------|-------|--------|
| azon | INT PK | Növény azonosítója |
| nev | VARCHAR(100) | Magyar neve |
| fajta | VARCHAR(150) | Latin tudományos neve |
| lelohely_id | INT FK | Kapcsolat a lelohely táblához |
| gyujtes_eve | INT | A gyűjtés éve |
| hasznositas | VARCHAR(50) | Kategória: gyógyászat / élelmiszer / kozmetika |
| URL | VARCHAR(500) | Képlink (kepek/1.jpg vagy https://...) |

## Kapcsolatok
- `gyogynoven.lelohely_id` → `lelohely.id`
- `lelohely.megyeid` → `megye.id`
