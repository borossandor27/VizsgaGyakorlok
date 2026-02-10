using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp;

namespace ConsoleApp
{
    internal class Program
    {
        static string _gyumolcsFajl = "gyumolcs.csv";
        static string _erkezesFajl = "erkezes.csv";
        static List<Gyumolcs> gyumolcsok;
        static void Main(string[] args)
        {
            Console.WriteLine("Program indul...");
            gyumolcsok = CsvReader.BetoltGyumolcsok(_gyumolcsFajl);
            foreach (Erkezes erkezes in CsvReader.BetoltErkezesek(_erkezesFajl))
            {
                gyumolcsok.Where(g => g.gyumolcsid == erkezes.gyumolcsid).FirstOrDefault().Erkezesek.Add(erkezes);
            }

            // 1.Az összes gyümölcs mennyisége.
            feladat01();

            // 2.Az összes gyümölcs értéke(mennyiség * egységár).
            feladat02();

            // 3.A legdrágább gyümölcs neve és egységára.
            feladat03();

            // 4.Mennyi volt az összértéke az "Alma"(gyumolcsid: 1) érkezéseinek ?
            feladat04();
            // 5.Melyik gyümölcs érkezett a legtöbb alkalommal?
            feladat05();
    // 6.Hány szállítmány érkezett 2026 februárjában?
            feladat06();
            Console.WriteLine("\nProgram vége!");
            Console.ReadKey();
        }

        private static void feladat06()
        {
            Console.WriteLine("\n6. feladat");
            Console.WriteLine($"\t2026 februárjában érkezett szállítmányok száma: {gyumolcsok.Sum(g => g.Erkezesek.Count(e => e.ErkezesDatum.Year == 2026 && e.ErkezesDatum.Month == 2))}");
        }

        private static void feladat05()
        {
            Console.WriteLine("\n5. feladat");
            Gyumolcs legtobbszorErkezett = gyumolcsok.OrderByDescending(g => g.Erkezesek.Count).FirstOrDefault();
            Console.WriteLine($"\tA legtöbbször érkezett gyümölcs neve: \"{legtobbszorErkezett.Nev}\" és érkezéseinek száma: {legtobbszorErkezett.Erkezesek.Count} db");
        }

        private static void feladat04()
        {
            Console.WriteLine("\n4. feladat");
            Console.WriteLine($"\tAz eddig beérkezett \"Alma\"(gyumolcsid: 1) összértéke: {gyumolcsok.Where(a=>a.gyumolcsid==1).FirstOrDefault().OsszErtek}");
        }

        private static void feladat03()
        {
            Console.WriteLine("\n3. feladat");
            double maxEgysegar = gyumolcsok.Max(g => g.MaxEgysegar);
            Gyumolcs legdragabb = gyumolcsok.Where(g => g.MaxEgysegar == maxEgysegar).FirstOrDefault();
            Console.WriteLine($"\tA legdrágább gyümölcs neve: \"{legdragabb.Nev}\" és egységára: {legdragabb.MaxEgysegar.ToString("#,##0")} Ft/kg");
        }

        private static void feladat02()
        {
            Console.WriteLine( "\n2. feladat");
            Console.WriteLine($"\tAz összes gyümölcs értéke(mennyiség * egységár): {gyumolcsok.Sum(a => a.OsszErtek).ToString("#,##0")} Ft");
        }

        private static void feladat01()
        {
            Console.WriteLine("\n1. feladat");
            Console.WriteLine($"\tAz összes gyümölcs mennyisége: {gyumolcsok.Sum(a => a.OsszMennyiseg).ToString("#,##0")} kg");
        }
    }
}
