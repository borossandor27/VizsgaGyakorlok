using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NagyGyogynovenyek
{
    public class Telepules
    {
        public int Id { get; set; }
        public string Nev { get; set; } = string.Empty;
        public int MegyeId { get; set; }

        public Telepules(string sor)
        {
            var adatok = sor.Replace("\"", "").Split(',');
            Id = int.Parse(adatok[0]);
            Nev = adatok[1];
            MegyeId = int.Parse(adatok[2]);
        }
    }
}
