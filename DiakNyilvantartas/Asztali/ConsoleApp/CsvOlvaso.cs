using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Globalization;

namespace ConsoleApp
{
    public class CsvOlvaso
    {
        public List<Jegy> Olvas(string fajlNev)
        {
            List<Jegy> jegyek = new List<Jegy>();
            try
            {
                using (StreamReader sr = new StreamReader(fajlNev))
                {
                    string fejlec = sr.ReadLine(); // Fejléc olvasása
                    while (!sr.EndOfStream)
                    {
                        string sor = sr.ReadLine();
                        string[] mezok = sor.Replace("\"","").Split(';');
                        if (mezok.Length == 6)
                        {
                            Jegy jegy = new Jegy
                            {
                                Diak_Neve = mezok[0],
                                Osztaly = mezok[1],
                                Tantargy = mezok[2],
                                Tanar_Neve = mezok[3],
                                ErdemJegy = int.Parse(mezok[4]),
                                Datum = DateTime.ParseExact(mezok[5], "yyyy-MM-dd", CultureInfo.InvariantCulture)
                            };
                            jegyek.Add(jegy);
                        }
                    }
                }
            }
            catch (IOException ex)
            {
                Console.WriteLine(ex.Message);
                Environment.Exit(0);
            }
            
            return jegyek;
        }
    }
}
