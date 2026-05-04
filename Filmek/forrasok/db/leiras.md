# Klasszikus Filmek – Adatbázis dokumentáció

## Adatbázis neve: `klasszikus_filmek`

### `mufajok` tábla
| Mező | Típus | Leírás |
|------|-------|--------|
| id | INT PK | Műfaj azonosítója |
| mufaj_neve | VARCHAR(100) | Műfaj neve (pl. Dráma / Románc) |

### `filmek` tábla
| Mező | Típus | Leírás |
|------|-------|--------|
| id | INT PK | Film azonosítója |
| cim | VARCHAR(200) | A film magyar címe |
| mufaj_id | INT FK | Hivatkozás a mufajok táblára |
| rendezo | VARCHAR(100) | A rendező neve |
| gyartasi_ev | INT | Gyártási év |
| szarmazasi_orszag | VARCHAR(50) | Pl. USA, UK/USA |
| szereplok | TEXT | Főszereplők vesszővel elválasztva |
| legsikeresebb_dijak | VARCHAR(255) | Legfontosabb díjak |
| kep_url | TEXT | Publikus URL a filmplakáthoz |

## Kapcsolat
- `filmek.mufaj_id` → `mufajok.id`  (1:N – egy műfajhoz több film tartozhat)

## API végpontok (backend)
| Metódus | URL | Leírás |
|---------|-----|--------|
| GET | /api/film | Összes film lekérdezése (JOIN-nal) |
| POST | /api/ujfilm | Új film rögzítése |
| GET | /api/mufajok | Összes műfaj lekérdezése |
