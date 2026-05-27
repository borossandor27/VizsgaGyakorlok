using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Konzolos
{
    class Program
    {
        public static List<Szobor> szobrok = null;
        public static Dictionary<int, Alkoto> szoborAlkotok = new Dictionary<int, Alkoto>();
        public static List<Kapcsolat> kapcsolatok = null;
        static void Main(string[] args)
        {
            Console.WriteLine("Program indul...");
            // 5. feladat: alkotok.csv beolvasása
            Console.WriteLine("5. feladat");
            szoborAlkotok = BeolvasAlkotok($"adatForrasok\\alkoto.csv");
            Console.WriteLine("6. feladat");
            kapcsolatok = BeolvasKapcsolatok($"adatForrasok\\kapcsolat.csv");
            szobrok = BeolvasSzobrok($"adatForrasok\\szobor.csv");
            feladat07();
            feladat08();
            feladat09();





            Console.WriteLine("\nProgram vége.");
            Console.ReadLine();
        }

        private static void feladat09()
        {

            // 9. feladat: nem szerinti szűrés és fájlba írás
            Console.WriteLine("\n9. feladat");
            Console.Write("Kérem adja meg a nemet (férfi/nő): ");
            string nemInput = Console.ReadLine()?.Trim().ToLower();

            string nemKod, fajlNev;
            if (nemInput == "nő" || nemInput == "no" || nemInput == "n")
            {
                nemKod = "N";
                fajlNev = "nok.csv";
            }
            else
            {
                nemKod = "F";
                fajlNev = "ferfiak.csv";
            }

            var szurtAlkotok = szoborAlkotok.Where(a => a.Value.Nem == nemKod).Select(a => a.Value).ToList();

            using (StreamWriter sw = new StreamWriter(fajlNev, false, System.Text.Encoding.UTF8))
            {
                foreach (var item in szurtAlkotok)
                {
                    sw.WriteLine();
                    sw.WriteLine("Alkotó: " + item.Nev);
                    sw.WriteLine("Szobrok:");
                    var sajatSzobrok = szobrok.FindAll(sz => sz.Alkoto != null && sz.Alkoto.Id == item.Id);
                    foreach (var sz in sajatSzobrok)
                    {
                        sw.WriteLine($"- {sz.Szemely} ({sz.Hely},{sz.Avatas})");
                    }
                }
            }

            string nemSzo = nemKod == "N" ? "nők" : "férfiak";
            Console.WriteLine($"A {nemSzo} nemű alkotók és szobraik kiírása megtörtént a {fajlNev} fájlba.");

        }

        private static void feladat08()
        {
            // 8. feladat: legfiatalabb alkotó az avatáskor
            Console.WriteLine("\n8. feladat");
            int legkisebbKor = szobrok.Where(sz => sz.Alkoto != null)
                                        .Select(sz => sz.AlkotoKoraKiallitaskor)
                                        .Where(kor => kor >= 0)
                                        .DefaultIfEmpty(int.MaxValue)
                                        .Min();

            var legfiatalabbak = szobrok.Where(sz => sz.Alkoto != null && sz.AlkotoKoraKiallitaskor == legkisebbKor)
                                        .Select(sz => sz.Alkoto)
                                        .Distinct();

            foreach (var alkoto in legfiatalabbak)
            {
                Console.WriteLine($"\tA legfiatalabb alkotó: {alkoto.Nev}, életkor az avatáskor: {legkisebbKor}");
            }
        }

        private static void feladat07()
        {
            // 7. feladat: legtöbb szobrot készítő alkotó(k)
            Console.WriteLine("\n7. feladat");
            var alkotonkentSzobrok = kapcsolatok.GroupBy(a => a.AlkotoId).Select(b => new
            {
                AlkotoId = b.Key,
                SzobrokSzama = b.Count(),
            });

            int maxSzobor = alkotonkentSzobrok.Max(x => x.SzobrokSzama);

            foreach (var elem in alkotonkentSzobrok.Where(x => x.SzobrokSzama == maxSzobor))
            {
                Console.WriteLine($"\n\tA legtöbb szobrot kiállító alkotó: {szoborAlkotok[elem.AlkotoId].Nev}, szobrok száma: {elem.SzobrokSzama}");
                Console.WriteLine("\tSzobrok:");
                foreach (var sz in szobrok.Where(sz => sz.Alkoto != null && sz.Alkoto.Id == elem.AlkotoId))
                {
                    Console.WriteLine($"\t\t- {sz.Szemely} ({sz.Hely}, {sz.Avatas})");
                }
            }
        }

        private static List<Kapcsolat> BeolvasKapcsolatok(string forrasfajl)
        {
            List<Kapcsolat> kapcsolatok = new List<Kapcsolat>();
            using (StreamReader sr = new StreamReader(forrasfajl, Encoding.UTF8))
            {
                string elsoSor = sr.ReadLine(); // fejléc átugrása
                while (!sr.EndOfStream)
                {
                    string sor = sr.ReadLine();
                    var adatok = sor.Split(',');
                    if (adatok.Length == 2 &&
                        int.TryParse(adatok[0], out int szoborId) &&
                        int.TryParse(adatok[1], out int alkotoId))
                    {
                        kapcsolatok.Add(new Kapcsolat(szoborId, alkotoId));
                    }
                }
            }
            Console.WriteLine("\tkapcsolat.csv fájl beolvasása megtörtént.");

            return kapcsolatok;
        }

        private static Dictionary<int, Alkoto> BeolvasAlkotok(string forrasFajl)
        {
            Dictionary<int, Alkoto> alkotok = new Dictionary<int, Alkoto>();
            using (StreamReader sr = new StreamReader(forrasFajl, System.Text.Encoding.UTF8))
            {
                string elsoSor = sr.ReadLine(); // fejléc átugrása
                while (!sr.EndOfStream)
                {
                    string sor = sr.ReadLine();
                    var alkoto = new Alkoto(sor);
                    alkotok[alkoto.Id] = alkoto;
                }
            }
            Console.WriteLine("\talkotok.csv fájl beolvasása megtörtént.");
            return alkotok;
        }

        private static List<Szobor> BeolvasSzobrok(string fajlNev)
        {

            var lista = new List<Szobor>();
            using (StreamReader sr = new StreamReader(fajlNev, System.Text.Encoding.UTF8))
            {
                sr.ReadLine(); // fejléc átugrása
                while (!sr.EndOfStream)
                {
                    string sor = sr.ReadLine();
                    lista.Add(new Szobor(sor));

                }
                Console.WriteLine("\tszobor.csv fájl beolvasása megtörtént.");
                return lista;
            }

        }
    }
}
