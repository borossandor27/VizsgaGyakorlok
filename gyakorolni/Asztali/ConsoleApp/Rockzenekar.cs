using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace ConsoleApp
{
    internal class Rockzenekar
    {
        static List<Zenekar> zenekarok;
        static Dictionary<int, string> rockStilusok = new Dictionary<int, string>();
        static void Main(string[] args)
        {
            zenekarok = _adatokBeolvasasa("rockZenekarok.csv");
            List<Zenekar> hatvan_nyolc_utan = zenekarok.FindAll(a => a.megalakulas_eve > 1968);
            Console.WriteLine($"6. feladat: {hatvan_nyolc_utan.Count()} zenekar alakult 1968 után:");
            foreach (var item in hatvan_nyolc_utan)
            {
                Console.Write($"\t{item.nev}");
            }
            stilusok_beolvasasa();
            Console.Write("\n\n8. feladat: Adja meg, melyik zenei stílusra kíváncsi: " );
            string kapott_stilus = Console.ReadLine().Trim();
            List<Zenekar> keresett_stilusu_zenekarok = zenekarok.FindAll(a => a.stilus_id == Azonosito(kapott_stilus));
            Console.Write($"\t{rockStilusok[Azonosito(kapott_stilus)]} stílusú zenekarok: {String.Join("\t",keresett_stilusu_zenekarok.Select(a => a.nev))}");
            Console.WriteLine();
            Console.WriteLine("\nProgram vége!");
            Console.ReadLine();
        }

        private static int Azonosito(string kapott_stilus)
        {
            int key = 0;
            foreach (var item in rockStilusok)
            {
                if (item.Value.ToLower().Equals(kapott_stilus))
                {
                    key = item.Key;
                    break;
                }
            }
            return key;
        }

        private static void stilusok_beolvasasa()
        {
            try
            {
                var lines = File.ReadAllLines("rockStilusok.csv");

                for (int i = 1; i < lines.Length; i++) // első sor a fejléc, ezért i = 1
                {
                    var parts = lines[i].Split(';');

                    if (parts.Length == 2 &&
                        int.TryParse(parts[0], out int id) &&
                        !string.IsNullOrWhiteSpace(parts[1]))
                    {
                        rockStilusok[id] = parts[1].Trim();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Hiba történt: {ex.Message}");
                Environment.Exit(0);
            }
        }

        private static List<Zenekar> _adatokBeolvasasa(string _forrasFajl)
        {
            List<Zenekar> _zenekarok = new List<Zenekar>();
            if (File.Exists(_forrasFajl))
            {

                foreach (string _adatsor in File.ReadAllLines(_forrasFajl).Skip(1))
                {
                    _zenekarok.Add(new Zenekar(_adatsor));
                }
            }
            Console.WriteLine("\n5. feladat: A beolvasás sikeresen megtörtént.");
            return _zenekarok;
        }
    }
}
