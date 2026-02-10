using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Program
    {
        static List<Sportolo> sportolok = new List<Sportolo>();
        static void Main(string[] args)
        {
            Console.WriteLine("Program indul...");
            string _forrasFajl = "kalapacsvetes.txt";
            sportolok = CsvReading.ReadCsvFile(_forrasFajl);
            feladat04();
            feladat05();
            feladat06();
            feladat07();
            feladat08();
            Console.WriteLine("\nProgram vége!");
            Console.ReadKey();
        }

        private static void feladat08()
        {
            // Magyar versenyzők kiírása fájlba
            List<Sportolo> magyarSportolok = sportolok.Where(a => a.Országkód.Equals("HUN")).ToList();

            using (StreamWriter sw = new StreamWriter("magyarok.txt"))
            {
                foreach (var item in magyarSportolok)
                {
                    sw.WriteLine($"{item.Helyezés};{item.Eredmény};{item.Sportoló};{item.Országkód};{item.Helyszín};{item.Dátum.ToString("yyyy.MM.dd")}");
                }
            }
        }

        private static void feladat07()
        {
            Console.WriteLine("\n7. feladat: Statisztika");
            var statisztika = sportolok.GroupBy(a => a.Országkód)
                                        .Select(b => new
                                        {
                                            Országkód = b.Key,
                                            DobásokSzáma = b.Count(),
                                            ÁtlagosEredmény = b.Average(c => c.Eredmény)
                                        });
            foreach (var item in statisztika)
            {
                Console.WriteLine($"\t{item.Országkód} - {item.DobásokSzáma} dobás");
            }
        }

        private static void feladat06()
        {
            Console.WriteLine("\n6. feladat: Adjon meg egy évszámot: ");
            int kapottEvszam = int.Parse(Console.ReadLine());
            List<Sportolo> szurtSportolok = sportolok.Where(a => a.Dátum.Year == kapottEvszam).ToList();
            if (szurtSportolok.Count == 0)
            {
                Console.WriteLine($"\n\t{kapottEvszam}-ben nem volt dobás eredmény.");
                return;
            }
            else
            {
                Console.WriteLine($"\n\t{kapottEvszam}-ben {szurtSportolok.Count} dobás eredménye található.");
                foreach (var item in szurtSportolok)
                {
                    Console.WriteLine($"\t{item.Sportoló} dobott {item.Eredmény} métert.");
                }
            }
        }

        private static void feladat05()
        {
            Console.WriteLine($"\n5.feladat: A magyar sportolók átlagosan {sportolok.Where(a => a.Országkód.Equals("HUN")).Average(b => b.Eredmény).ToString("0.00")} métert dobtak.");
        }

        private static void feladat04()
        {
            Console.WriteLine($"\n4. feladat: {sportolok.Count} dobás eredménye található.");
        }
    }
}
