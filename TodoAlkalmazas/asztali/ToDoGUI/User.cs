using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoGUI
{
    internal class User
    {
        public int user_id;
        public string name;
        public string email;
        public DateTime birthday;
        public int age
        {
            get
            {
                return DateTime.Now.Year - birthday.Year;
            }
        }

        public User()
        {
        }
        public User(int user_id, string name, string email, DateTime birthday)
        {
            this.user_id = user_id;
            this.name = name;
            this.email = email;
            this.birthday = birthday;
        }
        public User(string adatsor)
        {
            string[] adatok = adatsor.Split(';');
            this.user_id = int.Parse(adatok[0]);
            this.name = adatok[1];
            this.email = adatok[2];
            this.birthday = DateTime.Parse(adatok[3]);
        }
        public override string ToString()
        {
            return this.name;
        }
    }
}
