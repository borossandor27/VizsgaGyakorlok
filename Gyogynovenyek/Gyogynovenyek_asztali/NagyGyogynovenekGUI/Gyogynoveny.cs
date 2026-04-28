using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NagyGyogynovenekGUI
{
    public class Gyogynoveny
    {
        public int Azon { get; set; }
        public string Nev { get; set; }
        public string Fajta { get; set; }
        public int LelohelyId { get; set; }
        public int GyujtesEve { get; set; }
        public string LelohelyNev { get; set; } = string.Empty;
        public string Hasznositas { get; set; }
        public string KepUrl { get; set; } = string.Empty;

        public Gyogynoveny(int azon, string nev, string fajta, int lelohelyId, int gyujtesEve, string hasznositas, string lelohelyNev, string kepUrl)
        {
            Azon = azon;
            Nev = nev;
            Fajta = fajta;
            LelohelyId = lelohelyId;
            GyujtesEve = gyujtesEve;
            Hasznositas = hasznositas;
            LelohelyNev = lelohelyNev;
            KepUrl = kepUrl;
        }
    }
}
