﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            int x = 0;
            do
            {
                Console.WriteLine(x);
                x++;
            } while (x < 5);

            Console.WriteLine("\nProgram vége");
            Console.ReadLine();
        }
    }
}
