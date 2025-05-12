using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Konzolos
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


        public Konyv(string adatsor)
        {
            string[] adatok=adatsor.Replace('"',' ').Split(';');
            this.konyv_id = int.Parse(adatok[0].Trim());
            this.cim = adatok[1].Trim();
            this.szerzo = adatok[2].Trim();
            this.kiado = adatok[3].Trim();
            this.kiadas_ev = int.Parse(adatok[4].Trim());
            this.isbn = adatok[5].Trim();
            this.leiras = adatok[6].Trim();
            this.boritokep = adatok[7].Trim();
            this.ar = double.Parse(adatok[8].Trim().Replace('.', ','));
            this.keszleten = bool.Parse(adatok[9].Trim());
        }
    }
}
