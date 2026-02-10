using System;
using System.Collections.Generic;
using System.IO;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class CsvReading
    {
        public static List<Sportolo> ReadCsvFile(string filePath)
        {
            List<Sportolo> sportolok = new List<Sportolo>();

            if (!System.IO.File.Exists(filePath))
            {
                Console.WriteLine("File not found: " + filePath);
                System.Environment.Exit(0);
            }
            try
            {
                using (var reader = new System.IO.StreamReader(filePath, Encoding.UTF8))
                {
                    string line;
                    reader.ReadLine();
                    while ((line = reader.ReadLine()) != null)
                    {
                        // Assuming CSV is comma-separated
                        var values = line.Split(';');
                        int Helyezés = int.Parse(values[0]);
                        double Eredmény = double.Parse(values[1]);
                        string Sportoló = values[2];
                        string Országkód = values[3];
                        string Helyszín = values[4];
                        DateTime Dátum = DateTime.Parse(values[5]);
                          Sportolo sportolo = new Sportolo(Helyezés, Eredmény, Sportoló, Országkód, Helyszín, Dátum);
                        sportolok.Add(sportolo);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred while reading the file: " + ex.Message);
            }
            return sportolok;
        }
    }
}
