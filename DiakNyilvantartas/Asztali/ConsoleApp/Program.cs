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
            f04(); // Szűrt átlag
            f05(); // Szűrt megszámlálás
            /*
             * ### Szélsőérték keresés (Minimum, Maximum)
             */
            f06(); // Maximum
            f07(); // Minimum
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

        private static void f07()
        {
            Console.WriteLine("\n7. feladat:");
        }

        private static void f06()
        {
            Console.WriteLine("\n6. feladat:");
            DateTime maxDatum = jegyek.Max(j => j.Datum);
            Console.WriteLine("\tA legutolsó rögzített érdemjegy(ek):");
            foreach (var jegy in jegyek.Where(j => j.Datum == maxDatum))
            {
                Console.WriteLine($"\t\t { jegy.ErdemJegy} - { jegy.Diak_Neve} - { jegy.Tantargy} - { jegy.Tanar_Neve} - { jegy.Osztaly} - { jegy.Datum.ToString("yyyy-MM-dd")})");
            }
        }

        private static void f05()
        {
            Console.WriteLine("\n5. feladat:");
            int db = jegyek.Where(j => j.Tanar_Neve.Equals("Vass Edit")).Count();
            Console.WriteLine($"\tVass Edit ennyi darab jegyet adott: {db}");
        }

        private static void f04()
        {
            Console.WriteLine("\n4. feladat:");
            double atlag = jegyek.Where(j => j.Tantargy.Equals("Matematika")).Average(j => j.ErdemJegy);
            Console.WriteLine($"\tA \"Matematika\" tantárgyból szerzett jegyek átlaga {atlag}");
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
