using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;

namespace FurdoNyilvantartoGUI
{
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
        public string VarosNev { get; set; }   

        public string KepUrl { get; set; } = string.Empty;

        // ── Konstruktor ──────────────────────────────────────────────
        /// <summary>
        /// CSV sorból létrehozó konstruktor.
        /// Paraméterek: azon, nev, tipus, medencek, belepodij, varos_id, nyitas_eve
        /// </summary>
        public Furdo(string azon, string nev, string tipus,
                     string medencek, string belepodij,
                     string varosId, string nyitasEve, string varosNev, string kepUrl)
        {
            Azon = int.Parse(azon.Trim('"'));
            Nev = nev.Trim('"');
            Tipus = tipus.Trim('"');
            Medencek = int.Parse(medencek.Trim('"'));
            BelepoDij = int.Parse(belepodij.Trim('"'));
            VarosId = int.Parse(varosId.Trim('"'));
            NyitasEve = int.Parse(nyitasEve.Trim('"'));
            VarosNev = varosNev.Trim('"');
            KepUrl = kepUrl.Trim('"');
        }

    }
}
