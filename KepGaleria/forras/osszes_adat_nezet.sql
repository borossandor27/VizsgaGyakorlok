-- ============================================================
--  Nézet: osszes_adas_nézet
--  Tartalmazza az összes tábla összes adatát,
--  idegen kulcsok helyett szöveges mezőkkel
-- ============================================================
CREATE OR REPLACE VIEW osszes_adat_nezet AS
SELECT 
    fm.id AS festmeny_id,
    fm.cim AS festmeny_cime,
    f.nev AS festo_neve,
    f.szuletesi_ev AS festo_szuletett,
    f.halal_ev AS festo_meghalt,
    f.nemzetiseg AS festo_nemzetisege,
    k.nev AS korszak_stilus,
    fm.technika,
    fm.elkeszites_eve,
    fm.szelesseg_cm,
    fm.magassag_cm,
    CONCAT(fm.magassag_cm, ' x ', fm.szelesseg_cm, ' cm') AS meret,
    h.nev AS helyszin_neve,
    h.varos,
    h.orszag,
    fm.kep AS kep_fajlnev,
    fm.leiras,
    fm.statusz,
    -- Élő vagy elhunyt állapot (segédmező)
    CASE 
        WHEN f.halal_ev IS NULL THEN 'élő'
        ELSE CONCAT('meghalt ', f.halal_ev)
    END AS festo_allapota
FROM 
    festmenyek fm
    LEFT JOIN festok f ON fm.festo_id = f.id
    LEFT JOIN korszakok k ON fm.korszak_id = k.id
    LEFT JOIN helyszinek h ON fm.helyszin_id = h.id;