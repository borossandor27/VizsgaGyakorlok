using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateGUI
{
    class Seller

    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }

        public Seller(int id, string name, string phone)
        {
            Id = id;
            Name = name;
            Phone = phone;
        }
    }
}
