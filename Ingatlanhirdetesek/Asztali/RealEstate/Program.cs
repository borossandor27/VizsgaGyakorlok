using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Configuration;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateGUI
{
    class Program
    {
        static List<Ad> hirdetesek = new List<Ad>();
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;
            hirdetesek = LoadFromCsv("realestates.csv");
            feladat06();
            Console.WriteLine("Program vége");
            Console.ReadLine();
        }

        private static void feladat06()
        {
            double atlag = hirdetesek.Where(x => x.Floors == 0).Average(x => x.Area);
            Console.WriteLine($"1. Földszinti ingatlanok átlagos alapterülete: {atlag.ToString("#,##0.00")} m\u00B2");
        }

        private static List<Ad> LoadFromCsv(string forrasFajl)
        {
            List<Ad> hirdetesek = new List<Ad>();
            using (StreamReader sr=new StreamReader(forrasFajl))
            {
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    hirdetesek.Add(new Ad(sr.ReadLine()));
                }
            }
            return hirdetesek;
        }
    }
}
