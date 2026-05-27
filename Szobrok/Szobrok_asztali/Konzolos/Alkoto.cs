using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Konzolos
{
    public class Alkoto
    {
        public int Id { get; set; }
        public string Nev { get; set; }
        public string Nem { get; set; }
        public int Szulev { get; set; }
        public string Szulhely { get; set; }

        public Alkoto(string sor)
        {
            string[] mezok = sor.Split(',');
            Id = int.Parse(mezok[0]);
            Nev = mezok[1];
            Nem = mezok[2];
            Szulev = int.Parse(mezok[3]);
            Szulhely = mezok[4];
        }

        
    }
}
