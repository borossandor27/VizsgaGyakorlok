using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class Rendeles
    {
        public int rendelesAzonosito { get; set; }
        public int kategoriaAzonosito { get; set; }
        public string kategoria { get; set; }
        public string etelNeve { get; set; }
        public string etelInfo { get; set; }
        public double egysegAra { get; set; }
        public string etelkepUrl { get; set; }
        public bool rendelheto { get; set; }
        public int rendeltMennyiseg { get; set; }
        public double egysegar { get; set; }
        public string allapot { get; set; }
        public double fizetendo { get; set; }
        public DateTime rendelesIdopontja { get; set; }
        private double _fizetettOsszeg = 0;
        public double fizetettOsszeg { get; set ; }
        public string fizetesModja { get; set; }
        public string fizetesIdeje { get; set; }
        public int asztalSzama { get; set; }
        public string szemelyNeve { get; set; }
        public string szerepkor { get; set; }

        public Rendeles(string beolvasottSor)
        {
            string[] adatok = beolvasottSor.Split(';');
            rendelesAzonosito = int.Parse(adatok[0].Trim('"'));
            kategoriaAzonosito = int.Parse(adatok[1].Trim('"'));
            kategoria = adatok[2].Trim('"');
            etelNeve = adatok[3].Trim('"');
            etelInfo = adatok[4].Trim('"');
            egysegAra = double.Parse(adatok[5].Trim('"').Replace(".",","));
            etelkepUrl = adatok[6].Trim('"');
            rendelheto = bool.Parse(adatok[7].Trim('"'));
            rendeltMennyiseg = int.Parse(adatok[8].Trim('"'));
            egysegar = double.Parse(adatok[9].Trim('"').Replace(".", ","));
            allapot = adatok[10].Trim('"');
            fizetendo = double.Parse(adatok[11].Trim('"').Replace(".", ","));
            rendelesIdopontja = DateTime.Parse(adatok[12].Trim('"'));
            if (!double.TryParse(adatok[13].Trim('"'), out this._fizetettOsszeg)) _fizetettOsszeg = 0;
            fizetesModja = adatok[14].Trim('"');
            fizetesIdeje = adatok[15].Trim('"');
            asztalSzama = int.Parse(adatok[16].Trim('"'));
            szemelyNeve = adatok[17].Trim('"');
            szerepkor = adatok[18].Trim('"');
        }
    }

    

}
