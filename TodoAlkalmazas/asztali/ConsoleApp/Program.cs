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
        static List<User> users = new List<User>();
        static void Main(string[] args)
        {
            adatokBeolvasasa();
            feladat01();
            feladat02();
            feladat03();
            feladat04();

            Console.WriteLine("\nProgram vége");
            Console.ReadLine();
        }

        private static void feladat03()
        {
            Console.WriteLine("3. feladat");
            // melyik évben hányan születtek?
            foreach (var item in users.GroupBy(a => a.birthday.Year).Select(b => new { evszam = b.Key, fo = b.Count() }))
            {
                Console.WriteLine($"\tév: {item.evszam} = {item.fo}");
            }
        }

        private static void feladat04()
        {
            Console.WriteLine("4. feladat");
        }

        private static void feladat02()
        {
            Console.WriteLine("2. feladat");
            double atlag = users.Average(user => user.age);
            Console.WriteLine($"\tFelhasználók átlag életkora: {atlag.ToString("N2")}");
        }

        private static void feladat01()
        {
            Console.WriteLine("1. feladat");
            foreach (User user in users)
            {
                Console.WriteLine($"\tNév: {user.name}\tkora: {user.age}");
            }
        }

        private static void adatokBeolvasasa()
        {
            string inputFajl = "todousers.csv";
            using (StreamReader sr = new StreamReader(inputFajl))
            {
               string sor=null;
                sr.ReadLine(); // Header line
                while ((sor = sr.ReadLine()) != null)
                {
                    string[] adatok = sor.Split(';');
                    User user = new User();
                    user.user_id = int.Parse(adatok[0]);
                    user.name = adatok[1];
                    user.email = adatok[2];
                    user.birthday = DateTime.Parse(adatok[3]);
                    users.Add(user);
                }
            }
        }
    }
}
