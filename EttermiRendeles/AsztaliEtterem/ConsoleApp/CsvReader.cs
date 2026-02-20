using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class CsvReader
    {
        List<Rendeles> rendelesek = new List<Rendeles>();

            public List<Rendeles> Beolvas(string fajlNev)
            {
                string[] beolvasottSorok = System.IO.File.ReadAllLines(fajlNev);
                for (int i = 1; i < beolvasottSorok.Length; i++)
                {
                    rendelesek.Add(new Rendeles(beolvasottSorok[i]));
                }
                return rendelesek;
        }
    }
}
