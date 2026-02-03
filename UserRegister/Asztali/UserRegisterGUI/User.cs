using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserRegisterGUI
{
    public class User
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime? Birthday { get; set; }
        public string EmailAddress { get; set; }
        public User(string inputSor)
        {
            string[] _adatok = inputSor.Split(';');
            Id = long.Parse(_adatok[0].Replace("\"", ""));
            Name = _adatok[1].Replace("\"", "");
            string _tempDatum = _adatok[3].Replace("\"", "");
            Birthday = DateTime.Parse(_tempDatum);
            EmailAddress = _adatok[2];
        }
        override public string ToString()
        {
            return $"{Id}; {Name}; {Birthday?.ToString("yyyy.MM.dd")}; {EmailAddress}";
        }
    }
}
