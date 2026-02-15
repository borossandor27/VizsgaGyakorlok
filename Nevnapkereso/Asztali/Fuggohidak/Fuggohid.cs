using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fuggohidak
{
    internal class Fuggohid
    {
        public int Helyezes;
        public string Hid;
        public string Hely;
        public string Orszag;
        public int Hossz;
        public int Ev;

        public Fuggohid(int helyezes, string hid, string hely, string orszag, int hossz, int ev)
        {
            Helyezes = helyezes;
            Hid = hid;
            Hely = hely;
            Orszag = orszag;
            Hossz = hossz;
            Ev = ev;
        }
        override public string ToString()
        {
            return Hid;
        }
    }
}
