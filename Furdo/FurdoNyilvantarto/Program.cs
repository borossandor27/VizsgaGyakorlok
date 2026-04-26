using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace FurdoNyilvantarto
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;

            // ── 5. feladat: furdo.csv beolvasása ────────────────────
            Console.WriteLine("5. feladat");
            List<Furdo> furdok = Furdo.Beolvas("furdo.csv");
            Console.WriteLine("A furdo.csv fájl tartalmának beolvasása megtörtént");
            Console.WriteLine();

            // ── 6. feladat: varos.csv beolvasása ────────────────────
            Console.WriteLine("6. feladat");
            // varos_id → városnév szótár
            var varosok = new Dictionary<int, string>();
            var varosSorok = File.ReadAllLines("varos.csv", Encoding.UTF8);
            for (int i = 1; i < varosSorok.Length; i++)
            {
                if (string.IsNullOrWhiteSpace(varosSorok[i])) continue;
                var m = varosSorok[i].Split(',');
                if (m.Length < 2) continue;
                int id   = int.Parse(m[0].Trim('"'));
                string nv = m[1].Trim('"');
                varosok[id] = nv;
            }
            // A VarosNev tulajdonság feltöltése
            foreach (var f in furdok)
                if (varosok.ContainsKey(f.VarosId))
                    f.VarosNev = varosok[f.VarosId];

            Console.WriteLine("A varos.csv fájl tartalmának beolvasása megtörtént");
            Console.WriteLine();

            // ── 7. feladat: legdrágább belépőjű fürdő ───────────────
            Console.WriteLine("7. feladat");
            var legdragabb = furdok.OrderByDescending(f => f.BelepoDij).First();
            Console.WriteLine($"A legdrágább belépőjű fürdő a {legdragabb.Nev}, " +
                              $"{legdragabb.VarosNev}ban/ben található, " +
                              $"belépőjegy ára: {legdragabb.BelepoDij} Ft");
            Console.WriteLine();

            // ── 8. feladat: 4 legtöbb fürdőjű város ─────────────────
            Console.WriteLine("8. feladat");
            var top4 = furdok
                .GroupBy(f => f.VarosNev)
                .OrderByDescending(g => g.Count())
                .Take(4);

            foreach (var csoport in top4)
            {
                Console.WriteLine($"{csoport.Key} {csoport.Count()}");
                // Fürdők a csoporton belül belépőjegy szerint csökkenő sorrendben
                foreach (var furdo in csoport.OrderByDescending(f => f.BelepoDij))
                    Console.WriteLine($"  - {furdo.Tipus}: {furdo.Nev} – {furdo.BelepoDij} Ft");
            }
            Console.WriteLine();

            // ── 9. feladat: típus bekérése, fájlba írás ─────────────
            Console.WriteLine("9. feladat");
            Console.Write("Kérem adja meg a fürdő típusát: ");
            string kertTipus = Console.ReadLine()?.Trim() ?? "";

            // Fájlnév: ékezetes karakterek eltávolítása / cseréje
            string fajlNevAlapja = kertTipus
                .Replace("á", "a").Replace("é", "e").Replace("í", "i")
                .Replace("ó", "o").Replace("ö", "o").Replace("ő", "o")
                .Replace("ú", "u").Replace("ü", "u").Replace("ű", "u")
                .Replace(" ", "_");
            string kimenFajl = fajlNevAlapja + ".txt";

            var egyezok = furdok
                .Where(f => f.Tipus.Equals(kertTipus, StringComparison.OrdinalIgnoreCase))
                .OrderBy(f => f.Nev)
                .ToList();

            using (var sw = new StreamWriter(kimenFajl, false, Encoding.UTF8))
            {
                if (egyezok.Count == 0)
                {
                    sw.WriteLine($"Nem található '{kertTipus}' típusú fürdő az adatforrásban.");
                }
                else
                {
                    foreach (var f in egyezok)
                        sw.WriteLine($"{f.Nev}; {f.VarosNev}; {f.BelepoDij}");
                }
            }

            Console.WriteLine($"A {kertTipus} fürdőkről szóló adatok kiírása a {kimenFajl} fájlba megtörtént.");
        }
    }
}
