using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GUI_WinFormsListbox
{
    public class Gyumolcs
    {
        public int gyumolcsid { get; set; }
        public string Nev { get; set; }
        public string Megjegyzes { get; set; }
        public string NevEng { get; set; }
        public string AltSzoveg { get; set; }
        public string Src { get; set; }
        public BindingList<Erkezes> Erkezesek { get; set; }
        public int OsszMennyiseg
        {
            get
            {
                return Erkezesek.Sum(e => e.Mennyiseg);
            }
        }

        public int OsszErtek
        {
            get
            {
                return (int)Erkezesek.Sum(e => e.OsszAr);
            }
        }

        public double MaxEgysegar
        {
            get
            {
                return Erkezesek.Max(e => e.Egysegar);
            }
        }
        public Gyumolcs(int _gyumolcsId, string _name, string _megjegyzes,string _nevEng, string _altSzoveg, string _src)
        {
            this.gyumolcsid = _gyumolcsId;
            this.Nev = _name;
            this.Megjegyzes = _megjegyzes;
            this.AltSzoveg = _altSzoveg;
            this.Src = _src;
            this.NevEng = _nevEng;
            this.Erkezesek = new BindingList<Erkezes>();
        }

        override public string ToString()
        {
            return Nev;
        }
    }
}
