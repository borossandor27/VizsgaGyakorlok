using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rockZenekarokGUI
{
    internal class Zenekar
    {
        public int id;
        public string nev;
        public int stilus_id;
        public string orszag;
        public string varos;
        public string aktiv_evek;
        public string tagok;
        public string legsikeresebb_album;
        public string kep_url;
        public int megalakulas_eve;
        public int felbomlas_eve = 0;
        public string stilus_neve;

        public Zenekar(string adatsor)
        {
            string[] adatok = adatsor.Split(';');
            this.id = int.Parse(adatok[0]);
            this.nev = adatok[1];
            this.stilus_id = int.Parse(adatok[2]);
            this.orszag = adatok[3];
            this.varos = adatok[4];
            this.aktiv_evek = adatok[5];
            this.tagok = adatok[6];
            this.legsikeresebb_album = adatok[7];
            this.kep_url = adatok[8];
            string[] evek = adatok[5].Split('–');
            this.megalakulas_eve = int.Parse(evek[0]);
            if (!int.TryParse(evek[1], out this.felbomlas_eve))
            {
                this.felbomlas_eve = DateTime.Now.Year;
            }
        }

        public Zenekar(int id, string nev, int stilus_id, string orszag, string varos, string aktiv_evek, string tagok, string legsikeresebb_album, string kep_url, string stilus_neve)
        {
            this.id = id;
            this.nev = nev;
            this.stilus_id = stilus_id;
            this.orszag = orszag;
            this.varos = varos;
            this.aktiv_evek = aktiv_evek;
            this.tagok = tagok;
            this.legsikeresebb_album = legsikeresebb_album;
            this.kep_url = kep_url;
            this.stilus_neve = stilus_neve;
            string[] evek = aktiv_evek.Split('–');
            this.megalakulas_eve = int.Parse(evek[0]);
            if (!int.TryParse(evek[1], out this.felbomlas_eve))
            {
                this.felbomlas_eve = DateTime.Now.Year;
            }
        }
        public override string ToString()
        {
            return $"{this.nev} ({this.megalakulas_eve})";
        }
    }
}
