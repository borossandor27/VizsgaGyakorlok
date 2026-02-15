using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fuggohidak
{
    internal class CsvOlvaso
    {
        

        public List<Fuggohid> readFromCSV(string fajlNev)
        {
            List<Fuggohid> _fuggohidak = new List<Fuggohid>();
            if (fajlNev == null)
            {
                new ArgumentNullException("A fájl neve nem lehet null.");
            }
            if (!System.IO.File.Exists(fajlNev))
            {
                new ArgumentNullException("A megadott fájl nem létezik.");
            }
            using (StreamReader sr = new StreamReader(fajlNev, Encoding.UTF8))
            {
                string fejlec = sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    string[] adatok = sr.ReadLine().Split('\t');
                    _fuggohidak.Add(new Fuggohid(int.Parse(adatok[0]), adatok[1], adatok[2], adatok[3], int.Parse(adatok[4]), int.Parse(adatok[5])));
                }
            }
            return _fuggohidak;
        }
    }
}
