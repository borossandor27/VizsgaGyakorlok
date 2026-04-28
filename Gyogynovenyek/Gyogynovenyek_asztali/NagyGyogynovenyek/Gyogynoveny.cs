using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NagyGyogynovenyek;

namespace NagyGyogynovenyek
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

        public Gyogynoveny(string sor)
        {
            var adatok = sor.Replace("\"", "").Split(',');
            Azon = int.Parse(adatok[0]);
            Nev = adatok[1];
            Fajta = adatok[2];
            LelohelyId = int.Parse(adatok[3]);
            LelohelyNev = Program.telepulesek.Where(x => x.Id == LelohelyId).FirstOrDefault()?.Nev ?? string.Empty;
            GyujtesEve = int.Parse(adatok[4]);
            Hasznositas = adatok[5];
        }
    }
}
