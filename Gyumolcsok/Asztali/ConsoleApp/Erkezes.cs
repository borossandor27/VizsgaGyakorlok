using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class Erkezes
    {
        public int gyumolcsid { get; set; }
        public int Mennyiseg { get; set; }
        public double Egysegar { get; set; } = 0;
        public DateTime ErkezesDatum { get; set; }

        public double OsszAr
        {
            get
            {
                return Mennyiseg * Egysegar;
            }
        }
    }
}
