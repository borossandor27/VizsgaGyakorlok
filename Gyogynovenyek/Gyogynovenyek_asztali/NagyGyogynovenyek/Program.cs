using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace NagyGyogynovenyek
{
    internal class Program
    {
        static  List<Gyogynoveny> gyogynovenyek = new List<Gyogynoveny>();
        public static  List<Telepules> telepulesek = new List<Telepules>();
        static void Main(string[] args)
        {
            Console.WriteLine("Program indítva.");
           telepulesek = telepulesekBeolvasása("telepulesek.csv");
            gyogynovenyek = gyogynovenyekBeolvas("gyogynovenyek.csv");
            
            feladat06();
            feladat07();
            feladat08();
            Console.WriteLine("\nA program futtatása befejezve.");
            Console.ReadLine();
        }
        /// <summary>
        /// 8.	Kérjen be a felhasználótól egy hasznosítási kategóriát (pl.: kozmetika). Írja ki a bekért kategória_nev.txt állományba az adott kategóriához tartozó bejegyzésekből a növény nevét és a lelőhely nevét! 
        /// </summary>
        private static void feladat08()
        {
            Console.WriteLine("\n8. feladat:");
            Console.Write("\tKérem, adja meg a hasznosítási kategóriát: ");
            string kategoria = Console.ReadLine();
            var kategoriaNovenyek = gyogynovenyek.FindAll(a => a.Hasznositas.Equals(kategoria));
            if (kategoriaNovenyek.Count > 0)
            {
                using (StreamWriter sw = new StreamWriter($"{kategoria}_novenyek.txt"))
                {
                    foreach (var noveny in kategoriaNovenyek)
                    {
                        sw.WriteLine($"{noveny.Nev} ({noveny.LelohelyNev})");
                    }
                }
                Console.WriteLine($"\tAz eredmények a {kategoria}_novenyek.txt fájlban találhatók.");
            }
            else
            {
                Console.WriteLine($"\tNem található növény az {kategoria} kategóriában.");
            }
        }

        /// <summary>
        /// 7.	Írja ki a képernyőre azt a négy lelőhelyet, ahol a legtöbb gyógyászati célú növény található, a lelőhelyek alatt a minta szerint jelenjenek meg a növények adatai is.
        /// </summary>
        private static void feladat07()
        {
            Console.WriteLine("\n7. feladat:");
            var topLelhelyek = gyogynovenyek.GroupBy(t => t.LelohelyNev).Select(g => new { Lelhely = g.Key, NovenyekSzama = g.Count()}).OrderByDescending(x => x.NovenyekSzama).Take(4).ToArray();
            foreach (var hely in topLelhelyek)
            {
                Console.WriteLine($"\t{hely.Lelhely} ({hely.NovenyekSzama} növény)");
                foreach (var noveny in gyogynovenyek.FindAll(a => a.LelohelyNev.Equals(hely.Lelhely)))
                {
                    Console.WriteLine($"\t- {noveny.Nev} ({noveny.Fajta})");
                }
            }
        }

        /// <summary>
        /// 6.	Határozza meg, melyik a legtöbb feljegyzett növényt tartalmazó lelőhely, és hány növény található ott! 
        /// </summary>
        private static void feladat06()
        {
            Console.WriteLine("\n6. feladat:");
            var legtobbNoveny = gyogynovenyek.GroupBy(t => t.LelohelyNev).Select(g => new { Lelhely = g.Key, NovenyekSzama = g.Count() }).OrderByDescending(x => x.NovenyekSzama).FirstOrDefault();
            Console.WriteLine($"\tA legtöbb feljegyzett növényt tartalmazó lelőhely: {legtobbNoveny.Lelhely}, Növények száma: {legtobbNoveny.NovenyekSzama}");
        }

        private static List<Gyogynoveny> gyogynovenyekBeolvas(string fajl)
        {
            var gyogynovenyek = new List<Gyogynoveny>();
            if (File.Exists(fajl) == false)
            {
                Console.WriteLine("A fájl nem található: " + fajl);
            }
            else
            {
                foreach (var sor in File.ReadAllLines(fajl, Encoding.UTF8).Skip(1))
                {
                    gyogynovenyek.Add(new Gyogynoveny(sor));
                }
            }
            Console.WriteLine("Gyógynövények beolvasva.");
            return gyogynovenyek;
        }

        private static List<Telepules> telepulesekBeolvasása(string fajl)
        {
            var telepulesek = new List<Telepules>();
            if (File.Exists(fajl) == false)
            {
                Console.WriteLine("A fájl nem található: " + fajl);
            }
            else
            {
                foreach (var sor in File.ReadAllLines(fajl, Encoding.UTF8).Skip(1))
                {
                    telepulesek.Add(new Telepules(sor));
                }
            }
            Console.WriteLine("Települések beolvasva.");
            return telepulesek;
        }
    }
}
