using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GUI_WinFormsApp
{
    
    public partial class FormMain : Form
    {
        List<Konyv> konyvek = new List<Konyv>();
        private Dictionary<string, Control> inputMezok = new Dictionary<string, Control>();
        public FormMain()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            beolvasas();
            UjKonyvUrlapLetrehozasa();
            listBox_Konyvek.DataSource = konyvek;
            numericUpDown_KiadasEve.Value = DateTime.Now.Year;
            OpenFileDialog boritokepValaszto = new OpenFileDialog();
            boritokepValaszto.Filter = "Képfájlok (*.jpg;*.jpeg;*.png;*.bmp)|*.jpg;*.jpeg;*.png;*.bmp|Minden fájl (*.*)|*.*";

        }
        private void UjKonyvUrlapLetrehozasa()
        {
            string[] mezok = { "cim", "szerzo", "kiado", "kiadas_ev", "isbn", "leiras", "boritokep", "ar", "keszleten" };
            int y = 30;

            foreach (var mezo in mezok)
            {
                var label = new Label
                {
                    Text = mezo.Replace('_', ' ').ToUpper(),
                    Location = new Point(10, y),
                    AutoSize = true
                };
                groupBox_Uj_konyv.Controls.Add(label);

                Control input;
                if (mezo == "keszleten")
                {
                    input = new CheckBox { Location = new Point(150, y - 3) };
                }
                else
                {
                    input = new TextBox { Location = new Point(150, y), Width = 200 };
                }

                input.Name = $"input_{mezo}";
                inputMezok[mezo] = input;
                groupBox_Uj_konyv.Controls.Add(input);

                y += 30;
            }

            var btnMentes = new Button
            {
                Text = "Mentés",
                Location = new Point(150, y + 10)
            };
             groupBox_Uj_konyv.Controls.Add(btnMentes);
        }
        private void beolvasas()
        {
            string inputFajl = "konyvek.csv";
            using (StreamReader sr = new StreamReader(inputFajl))
            {
                sr.ReadLine();
                while (!sr.EndOfStream)
                {
                    konyvek.Add(new Konyv(sr.ReadLine()));
                }
            }
        }
    }
}
