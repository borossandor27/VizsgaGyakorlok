using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace UserRegisterGUI
{
    public partial class Form_Main : Form
    {
        BindingList<User> _users = new BindingList<User>();
        string _forrasFajl = "users.csv";

        public Form_Main()
        {
            InitializeComponent();
        }

        private void Form_Main_Load(object sender, EventArgs e)
        {
            _adatokBeolvasasa();
            dataGridView_Felhasznalok.DataSource = _users;
        }
        private void _adatokBeolvasasa()
        {
            if (!System.IO.File.Exists(_forrasFajl))
            {
                Console.WriteLine("A forrás fájl nem található!");
                return;
            }
            using (var sr = new System.IO.StreamReader(_forrasFajl, Encoding.UTF8))
            {
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    var sor = sr.ReadLine();
                    var felhasznalo = new User(sor);
                    _users.Add(felhasznalo);
                }
            }
        }

    }
}
