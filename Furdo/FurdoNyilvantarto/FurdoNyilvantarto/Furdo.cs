using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace FurdoNyilvantarto
{
    /// <summary>
    /// Egyetlen fürdőt reprezentáló osztály.
    /// </summary>
    public class Furdo
    {
        // ── Tulajdonságok ────────────────────────────────────────────
        public int Azon { get; set; }
        public string Nev { get; set; }
        public string Tipus { get; set; }
        public int Medencek { get; set; }
        public int BelepoDij { get; set; }
        public int VarosId { get; set; }
        public int NyitasEve { get; set; }
        public string VarosNev { get; set; }   // varos.csv alapján töltjük ki

        // ── Konstruktor ──────────────────────────────────────────────
        /// <summary>
        /// CSV sorból létrehozó konstruktor.
        /// Paraméterek: azon, nev, tipus, medencek, belepodij, varos_id, nyitas_eve
        /// </summary>
        public Furdo(string azon, string nev, string tipus,
                     string medencek, string belepodij,
                     string varosId, string nyitasEve)
        {
            Azon = int.Parse(azon.Trim('"'));
            Nev = nev.Trim('"');
            Tipus = tipus.Trim('"');
            Medencek = int.Parse(medencek.Trim('"'));
            BelepoDij = int.Parse(belepodij.Trim('"'));
            VarosId = int.Parse(varosId.Trim('"'));
            NyitasEve = int.Parse(nyitasEve.Trim('"'));
            VarosNev = "";
        }

        // ── Statikus betöltő metódus ─────────────────────────────────
        /// <summary>
        /// Beolvassa a furdo.csv fájlt és visszaadja a Furdo objektumok listáját.
        /// </summary>
        /// <param name="fajlNev">A betöltendő CSV fájl neve/elérési útja.</param>
        /// <returns>List&lt;Furdo&gt;</returns>
        public static List<Furdo> Beolvas(string fajlNev)
        {
            var lista = new List<Furdo>();

            // UTF-8 BOM-os fájlokat is helyesen kezeli
            var sorok = File.ReadAllLines(fajlNev, Encoding.UTF8);

            for (int i = 1; i < sorok.Length; i++)   // az 1. sor fejléc
            {
                if (string.IsNullOrWhiteSpace(sorok[i])) continue;

                var mezok = sorok[i].Split(',');
                if (mezok.Length < 7) continue;

                lista.Add(new Furdo(
                    mezok[0], mezok[1], mezok[2],
                    mezok[3], mezok[4], mezok[5], mezok[6]
                ));
            }

            return lista;
        }

        // ── ToString ────────────────────────────────────────────────
        public override string ToString()
        {
            return $"{Azon,3}  {Nev,-40}  {Tipus,-14}  " +
                   $"{BelepoDij,5} Ft  {NyitasEve}  {VarosNev}";
        }
    }
}
