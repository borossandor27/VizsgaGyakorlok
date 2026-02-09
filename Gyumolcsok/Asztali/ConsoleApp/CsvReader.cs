using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public static class CsvReader
    {
        // Gyümölcsök beolvasása
        public static List<Gyumolcs> BetoltGyumolcsok(string fajlnev)
        {
            List<Gyumolcs> lista = new List<Gyumolcs>();
            // UTF8 kódolás az ékezetek miatt
            using (var sr = new StreamReader(fajlnev, Encoding.UTF8))
            {
                sr.ReadLine(); // Fejléc átugrása
                while (!sr.EndOfStream)
                {
                    string sor = sr.ReadLine();
                    // Idézőjelek eltávolítása és tördelés pontosvessző mentén
                    string[] adatok = sor.Replace("\"", "").Split(';');

                    lista.Add(new Gyumolcs
                    (int.Parse(adatok[0]), 
                    adatok[1], 
                    adatok[2], 
                    adatok[3], 
                    adatok[4], 
                    adatok[5]));
                        
                }
            }
            return lista;
        }

        // Érkezések beolvasása
        public static List<Erkezes> BetoltErkezesek(string fajlnev)
        {
            List<Erkezes> lista = new List<Erkezes>();
            using (var sr = new StreamReader(fajlnev, Encoding.UTF8))
            {
                sr.ReadLine(); // Fejléc átugrása
                while (!sr.EndOfStream)
                {
                    string sor = sr.ReadLine();
                    string[] adatok = sor.Replace("\"", "").Split(';');

                    lista.Add(new Erkezes
                    {
                        gyumolcsid = int.Parse(adatok[0]),
                        Mennyiseg = int.Parse(adatok[1]),
                        // A tizedespont kezelése miatt CultureInfo.InvariantCulture kell
                        Egysegar = double.Parse(adatok[2], CultureInfo.InvariantCulture),
                        ErkezesDatum = DateTime.Parse(adatok[3])
                    });
                }
            }
            return lista;
        }
    }
}
