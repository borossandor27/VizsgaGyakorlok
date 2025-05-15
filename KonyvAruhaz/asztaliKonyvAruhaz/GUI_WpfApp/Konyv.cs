using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GUI_WpfApp
{
    internal class Konyv
    {
        public int konyv_id;
        public string cim;
        public string szerzo;
        public string kiado;
        public int kiadas_ev;
        public string isbn;
        public string leiras;
        public string boritokep;
        public double ar;
        public bool keszleten;

        public Konyv(int konyv_id, string cim, string szerzo, string kiado, int kiadas_ev, string isbn, string leiras, string boritokep, double ar, bool keszleten)
        {
            this.konyv_id = konyv_id;
            this.cim = cim;
            this.szerzo = szerzo;
            this.kiado = kiado;
            this.kiadas_ev = kiadas_ev;
            this.isbn = isbn;
            this.leiras = leiras;
            this.boritokep = boritokep;
            this.ar = ar;
            this.keszleten = keszleten;
        }

        public Konyv(string adatsor)
        {
            string[] adatok = adatsor.Replace('"', ' ').Split(';');
            konyv_id = int.Parse(adatok[0].Trim());
            cim = adatok[1].Trim();
            szerzo = adatok[2].Trim();
            kiado = adatok[3].Trim();
            kiadas_ev = int.Parse(adatok[4].Trim());
            isbn = adatok[5].Trim();
            leiras = adatok[6].Trim();
            boritokep = adatok[7].Trim();
            ar = double.Parse(adatok[8].Trim().Replace('.', ','));
            keszleten = bool.Parse(adatok[9].Trim());
        }

        public Konyv()
        {
        }

        public override string ToString()
        {
            return $"{this.szerzo}: {this.cim}";
        }
        public string ToCSV()
        {
            return $"{this.konyv_id};{this.cim};{this.szerzo};{this.kiado};{this.kiadas_ev};{this.isbn};{this.leiras};{this.boritokep};{this.ar};{this.keszleten.ToString().ToLower()}";
        }
    }
}
