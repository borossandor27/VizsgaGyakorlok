using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Konzolos
{
    internal class Program
    {
        static List<Konyv> konyvek=new List<Konyv>();
        static void Main(string[] args)
        {
            Console.WriteLine("Program elindult...");
            beolvasas();
            feladat01();
            feladat02();
            feladat03();
            Console.WriteLine("Program vége!");
            Console.ReadLine();
        }

        private static void feladat03()
        {
            Console.WriteLine("3. feladat");
            var lista = konyvek.GroupBy(a => a.kiado).Select(b => new { db = b.Count(), kiado=b.Key });
            foreach (var item in lista)
            {
                Console.WriteLine($"\t{item.kiado}: {item.db}");
            }
        }

        private static void feladat02()
        {
            Console.WriteLine("\n2. feladat:");
            //-- Minden könyvet, amelynek szerzőjében az Ernest szerepel
            var lista = konyvek.FindAll(a => a.szerzo.Contains("Ernest"));
            foreach (var item in lista)
            {
                Console.WriteLine($"\t{item.szerzo} - {item.cim}");
            }

        }
        

        private static void feladat01()
        {
            Console.WriteLine("\n1. feladat:");
            Console.WriteLine($"\tKönyvek száma: {konyvek.Count}");
        }

        private static void beolvasas()
        {
            string inputFajl = "konyvek.csv";
            using (StreamReader sr = new StreamReader(inputFajl))
            {
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    konyvek.Add(new Konyv(sr.ReadLine()));
                }
            }
        }
    }
}
