// ============================================================
//  Fa.cs  –  NagyFakGUI projektbe másolva
//  (Ha a NagyFak projektet be tudja hivatkozni, ezt a fájlt
//   törölheti és a using NagyFak; sort adja hozzá a Form1.cs-hez)
// ============================================================

namespace NagyFakGUI
{
    public class Fa
    {
        // ── Tulajdonságok ────────────────────────────────────
        public int    Azon         { get; set; }
        public string Faj          { get; set; }
        public int    Kormeret     { get; set; }
        public int    TelepulesId  { get; set; }
        public int    MeresEve     { get; set; }

        // A grafikus feladathoz szükséges extra mező:
        // a JOIN-ból visszakapott település neve
        public string TelepulesNev { get; set; }

        // ── Konstruktor ──────────────────────────────────────
        public Fa(int azon, string faj, int kormeret,
                  int telepulesId, int meresEve,
                  string telepulesNev = "")
        {
            Azon         = azon;
            Faj          = faj;
            Kormeret     = kormeret;
            TelepulesId  = telepulesId;
            MeresEve     = meresEve;
            TelepulesNev = telepulesNev;
        }

        // ── ToString – a ListBox-ban ez jelenik meg ───────────
        public override string ToString()
            => $"{Azon,-6} {Faj}";
    }
}
