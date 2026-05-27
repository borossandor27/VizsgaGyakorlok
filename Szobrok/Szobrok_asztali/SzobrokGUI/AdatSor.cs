using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SzobrokGUI
{
    internal class AdatSor
    {
        public string Szobor { get; set; } = string.Empty;
        public string Alkotó { get; set; } = string.Empty;

        public string Település { get; set; } = string.Empty;

        public AdatSor(string szobor, string alkoto, string telepules)
        {
            Szobor = szobor;
            Alkotó = alkoto;
            Település = telepules;
        }
    }
}
