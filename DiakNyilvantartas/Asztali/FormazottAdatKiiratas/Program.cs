using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FormazottAdatKiiratas
{
    internal partial class Program
    {
        enum Color { Yellow = 1, Blue, Green };
        static DateTime thisDate = DateTime.Now;
        static void Main(string[] args)
        {

            System.ConsoleColor _currentForegroundColor = Console.ForegroundColor;
            Console.Clear();

            Console.ForegroundColor = System.ConsoleColor.White;
            // Format a negative integer or floating-point number in various ways.
            Console.WriteLine("\nStandard Numeric Format Specifiers\n");
            Console.ForegroundColor = System.ConsoleColor.Yellow;
            Console.WriteLine(
                "\t(C) Currency: . . . . . . . . {0:C}\n" +
                "\t(D) Decimal:. . . . . . . . . {0:D}\n" +
                "\t(E) Scientific: . . . . . . . {1:E}\n" +
                "\t(F) Fixed point:. . . . . . . {1:F}\n" +
                "\t(G) General:. . . . . . . . . {0:G}\n" +
                "\t    (default):. . . . . . . . {0} (default = 'G')\n" +
                "\t(N) Number: . . . . . . . . . {0:N}\n" +
                "\t(N) Number (4 decimal): . . . {0:N4}\n" +
                "\t(N) Number (4 decimal): . . . {1:N4}\n" +
                "\t(N) Number (1 decimal): . . . {1:N1}\n" +
                "\t(P) Percent:. . . . . . . . . {1:P}\n" +
                "\t(R) Round-trip: . . . . . . . {1:R}\n" +
                "\t(X) Hexadecimal:. . . . . . . {0:X}\n",
                -123, -123.45f);

            // Format the current date in various ways.
            Console.ForegroundColor = System.ConsoleColor.White;
            Console.WriteLine("\nStandard DateTime Format Specifiers\n");
            Console.ForegroundColor = System.ConsoleColor.Yellow;
            Console.WriteLine(
                "\t(d) Short date: . . . . . . . {0:d}\n" +
                "\t(D) Long date:. . . . . . . . {0:D}\n" +
                "\t(t) Short time: . . . . . . . {0:t}\n" +
                "\t(T) Long time:. . . . . . . . {0:T}\n" +
                "\t(f) Full date/short time: . . {0:f}\n" +
                "\t(F) Full date/long time:. . . {0:F}\n" +
                "\t(g) General date/short time:. {0:g}\n" +
                "\t(G) General date/long time: . {0:G}\n" +
                "\t    (default):. . . . . . . . {0} (default = 'G')\n" +
                "\t(M) Month:. . . . . . . . . . {0:M}\n" +
                "\t(R) RFC1123:. . . . . . . . . {0:R}\n" +
                "\t(s) Sortable: . . . . . . . . {0:s}\n" +
                "\t(u) Universal sortable: . . . {0:u} (invariant)\n" +
                "\t(U) Universal full date/time: {0:U}\n" +
                "\t(Y) Year: . . . . . . . . . . {0:Y}\n",
                thisDate);

            Console.ReadKey();
        }
    }
}
