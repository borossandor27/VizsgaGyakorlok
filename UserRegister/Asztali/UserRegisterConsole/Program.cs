using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserRegisterConsole
{
        /*
         * A konzolos asztali alkalmazásnak a következő funkciókat kell tartalmaznia:

            - Felhasználók listázása a konzolon ABC sorrendben.
            - Kérjen be egy keresztnevet, és jelenítse meg az összes olyan felhasználót, akiknek a keresztneve tartalmazza a megadott karakterláncot.
            - jelenítse meg a legidősebb felhasználó adatait.
            - listázza ki a március 1. és június 30. között született felhasználókat születési dátum szerint növekvő sorrendben.
        */

    internal class Program
    {
        static string _forrasFajl = "users.csv";
        static List<User> _felhasznalok = new List<User>();

        static void Main(string[] args)
        {
            Console.WriteLine("Progra indulása...");
            _adatokBeolvasasa();
            if (_felhasznalok.Count == 0)
            {
                Console.WriteLine("Nincsenek felhasználók az adatforrásban.");
                return;
            }
            // Felhasználók listázása ABC sorrendben
            feladat01();
            feladat02();
            feladat03();
            feladat04();

            Console.WriteLine("\nProgram vége.");
            Console.ReadLine();

        }

        private static void feladat04()
        {
            Console.WriteLine("\n4. feladat:  március 1. és június 30. között született felhasználók születési dátum szerint növekvő sorrendben\n");
            foreach (var felhasznalo in _felhasznalok.Where(x => x.Birthday.HasValue && x.Birthday.Value.Month >= 3 && x.Birthday.Value.Month <= 6).OrderBy(x => x.Birthday))
            {
                Console.WriteLine($"\t{felhasznalo.Name}\t{felhasznalo.Birthday?.ToString("yyyy.MM.dd")}");
            }
        }

        private static void feladat03()
        {
            Console.WriteLine("\n3. feladat: A legidősebb felhasználó adatai");
            User legidosebbFelhasznalo = _felhasznalok.OrderBy(x => x.Birthday).First();
            Console.WriteLine("\t" + legidosebbFelhasznalo.ToString());
        }

        private static void feladat02()
        {
            Console.WriteLine("\n2. feladat: Keresés keresztnév alapján");
            // Keresztnév bekérése
            Console.Write("\n\tKérek egy keresztnevet:  ");
            string _kapottKeresztnev = Console.ReadLine();
            Console.WriteLine("\n\tA keresett felhasználó(k):\n");
            foreach (var felhasznalo in _felhasznalok.Where(x => x.Name.IndexOf(_kapottKeresztnev, StringComparison.CurrentCultureIgnoreCase) >= 0))
            {
                Console.WriteLine($"\t{felhasznalo.ToString()}");
            }
        }

        private static void feladat01()
        {
            Console.WriteLine("\n1. feladat: Felhasználók ABC sorrendben");
            foreach (var felhasznalo in _felhasznalok.OrderBy(x => x.Name))
            {
                Console.WriteLine($"\t{felhasznalo.Name}");
            }
        }

        private static void _adatokBeolvasasa()
        {
            if (!System.IO.File.Exists(_forrasFajl))
            {
                Console.WriteLine("A forrás fájl nem található!");
                return;
            }
            using (var sr = new System.IO.StreamReader(_forrasFajl, Encoding.UTF8))
            {
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    var sor = sr.ReadLine();
                    var felhasznalo = new User(sor);
                    _felhasznalok.Add(felhasznalo);
                }
            }
        }
    }
}
