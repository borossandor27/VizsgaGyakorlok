using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Konzolos
{
    public class Szobor
    {
        public int Id { get; set; }
        public string Szemely { get; set; }
        public string Hely { get; set; }
        public int Avatas { get; set; }
        public string Rogzites { get; set; }
        public string KepUrl { get; set; }
        public Alkoto Alkoto { get; set; }
        public int AlkotoKoraKiallitaskor { get { return Alkoto != null ? Avatas - Alkoto.Szulev : -1; } }

        public Szobor(string sor)
        {
            var mezok = sor.Split(',');
            Id = int.Parse(mezok[0]);
            Szemely = mezok[1];
            Hely = mezok[2];
            Avatas = int.Parse(mezok[3]);
            Rogzites = mezok[4];
            KepUrl = mezok.Length > 5 ? mezok[5] : "";
            Kapcsolat kapcsolat = (Kapcsolat)Program.kapcsolatok.Where(k => k.SzoborId == Id).FirstOrDefault();
            if (kapcsolat != null)
            {
                Alkoto = Program.szoborAlkotok.ContainsKey(kapcsolat.AlkotoId) ? Program.szoborAlkotok[kapcsolat.AlkotoId] : null;
            }
            else
            {
                Alkoto = null;
            }
        }

    }
}
