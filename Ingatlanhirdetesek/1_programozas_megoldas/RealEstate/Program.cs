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
            feladat08();
            Console.WriteLine("\nProgram vége");
            Console.ReadLine();
        }

        private static void feladat08()
        {
            string gpsMesevar = "47.4164220114023,19.066342425796986";
            Console.WriteLine( "\n2. Mesevár óvodához légvonalban legközelebbi tehermentes ingatlan adatai:" );
            Ad legkozelebbi = hirdetesek.OrderBy(x => x.DistanceTo(gpsMesevar)).First();
            Console.WriteLine($"\tEladó neve\t: {legkozelebbi.Seller.Name}");
            Console.WriteLine($"\tEladó telefonja\t: {legkozelebbi.Seller.Phone}");
            Console.WriteLine($"\tAlapterület\t: {legkozelebbi.Area}");
            Console.WriteLine($"\tSzobák száma\t: {legkozelebbi.Rooms}");
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
