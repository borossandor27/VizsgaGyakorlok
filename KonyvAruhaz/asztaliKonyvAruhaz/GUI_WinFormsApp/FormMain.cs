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
        OpenFileDialog boritokepValaszto = new OpenFileDialog();
        public FormMain()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            beolvasas();
            listBox_Konyvek.DataSource = konyvek;
            numericUpDown_KiadasEve.Maximum = DateTime.Now.Year;
            numericUpDown_KiadasEve.Value = DateTime.Now.Year;
            boritokepValaszto.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyPictures);
            boritokepValaszto.Filter = "Képfájlok (*.jpg;*.jpeg;*.png;*.bmp)|*.jpg;*.jpeg;*.png;*.bmp|Minden fájl (*.*)|*.*";

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

        private void button_Boritokep_Click(object sender, EventArgs e)
        {
            if (boritokepValaszto.ShowDialog() == DialogResult.OK)
            {
                string kepUt = boritokepValaszto.FileName;
                pictureBoxBorito.Image = Image.FromFile(kepUt);
                textBox_Boritokep.Text = boritokepValaszto.SafeFileName;
            }

        }

        private void button_Save_Click(object sender, EventArgs e)
        {
            try
            {
                var ujKonyv = new Konyv
                {
                    konyv_id = konyvek.Max(a => a.konyv_id) + 1,
                    cim = textBox_Cim.Text.Trim(),
                    szerzo = textBox_Szerzo.Text.Trim(),
                    kiado = textBox_Kiado.Text.Trim(),
                    kiadas_ev = (int)numericUpDown_KiadasEve.Value,

                    isbn = textBox_ISBN.Text.Trim(),
                    leiras = textBox_Leiras.Text.Trim(),
                    boritokep = textBox_Boritokep.Text.Trim(),
                    ar = (double)numericUpDown_Ar.Value,
                    keszleten = checkBox_Keszleten.Checked
                };

                konyvek.Add(ujKonyv);
                File.AppendAllText("konyvek.csv", ujKonyv.ToCSV() + Environment.NewLine);

                MessageBox.Show("Könyv sikeresen hozzáadva.");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba a mentéskor: " + ex.Message);
            }
        }
    }
    }
