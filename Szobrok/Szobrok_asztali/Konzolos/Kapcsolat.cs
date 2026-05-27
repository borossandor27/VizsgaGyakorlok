using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Konzolos
{
    public class Kapcsolat
    {
        public int SzoborId { get; set; }
        public int AlkotoId { get; set; }

        public Kapcsolat(int szoborId, int alkotoid)
        {
            SzoborId = szoborId;
            AlkotoId = alkotoid;
        }


    }
}
