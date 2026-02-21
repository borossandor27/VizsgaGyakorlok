using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Program
    {
        static List<Jegy> jegyek = new List<Jegy>();
        static void Main(string[] args)
        {
            Console.WriteLine("Program indul...");
            CsvOlvaso _olvaso = new CsvOlvaso();
            jegyek.AddRange(_olvaso.Olvas("teljesiskolairiport.csv"));
            /*
             * ### Alapvető statisztikák (Összegzés, Megszámlálás, Átlag)
             */
            f01(); // Összegzés
            f02(); // Átlag
            f03(); // Megszámlálás
            /*
             * ### Szélsőérték keresés (Minimum, Maximum)
             */

            /* 
             * ### Eldöntés és Keresés
             */


            /*
             * ### Kiválogatás és Csoportosítás
             */

            /*
             * ### Összetett algoritmusok
             */

            Console.WriteLine("\nProgram vége!");
            Console.ReadKey();
        }

        private static void f03()
        {
            Console.WriteLine("\n3. feladat:");
            int db = jegyek.Where(a => a.Osztaly.Equals("11.B")).Count();
            Console.WriteLine($"\tA 11.B osztályban rögzített érdemjegyek száma {db} db");
        }

        private static void f02()
        {
            Console.WriteLine("\n2. feladat:");
            double atlag = jegyek.Average(j => j.ErdemJegy);
            Console.WriteLine($"\tAz összes jegy átlaga a teljes adatsoron: {atlag.ToString("#,##0.00")}");
        }

        private static void f01()
        {
            Console.WriteLine("\n1. feladat:");
            double osszeg = jegyek.Sum(j => j.ErdemJegy);
            Console.WriteLine($"\tAz összes rögzített érdemjegy összege: {osszeg}");
        }
    }
}
