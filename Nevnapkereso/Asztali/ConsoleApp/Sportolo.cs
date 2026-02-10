using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class Sportolo
    {
        public int Helyezés { get; set; }
        public double Eredmény { get; set; }
        public string Sportoló { get; set; }
        public string Országkód { get; set; }
        public string Helyszín { get; set; }
        public DateTime Dátum { get; set; }

        public Sportolo(int helyezés, double eredmény, string sportoló, string országkód, string helyszín, DateTime dátum)
        {
            Helyezés = helyezés;
            Eredmény = eredmény;
            Sportoló = sportoló;
            Országkód = országkód;
            Helyszín = helyszín;
            Dátum = dátum;
        }
    }
}
