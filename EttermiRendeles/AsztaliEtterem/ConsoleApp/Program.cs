using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using  ConsoleApp;

namespace ConsoleApp
{
    public class Program
    {
        static List<Rendeles> rendelesek = new List<Rendeles>();
        static CsvReader csvReader = new CsvReader();
        static void Main(string[] args)
        {
            Console.WriteLine("Program indul...");
            rendelesek = csvReader.Beolvas("etteremall.csv");
            feladat01();
            feladat02();
            Console.WriteLine("\nProgram vége!");
            Console.ReadKey();
        }

        private static void feladat02()
        {
            // Listázza ki az összes „fizetve” állapotú rendelést.
            Console.WriteLine("2. feladat: Fizetve állapotú rendelések:");
            foreach (var item in rendelesek.Where(a => a.allapot.Equals("fizetve")))
            {
                Console.WriteLine($"\tasztal: {item.asztalSzama}, {item.rendelesIdopontja.ToLocalTime()} rendelés: {item.etelNeve}");
            }
        }

        private static void feladat01()
        {
            Console.WriteLine("1. feladat: Rendelések száma: " + rendelesek.Count);
        }

    }
}
