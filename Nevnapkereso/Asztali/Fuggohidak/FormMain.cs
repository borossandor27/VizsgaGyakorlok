using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Fuggohidak
{
    public partial class FormMain : Form
    {
        BindingList<Fuggohid> _fuggohidak = new BindingList<Fuggohid>();
        public FormMain()
        {
            InitializeComponent();
        }

        private void FormMain_Load(object sender, EventArgs e)
        {
            CsvOlvaso csvOlvaso = new CsvOlvaso();
foreach (Fuggohid fuggohid in csvOlvaso.readFromCSV("fuggohidak.csv"))
            {
                _fuggohidak.Add(fuggohid);
            }
            listBox_hidak.DataSource = _fuggohidak;
            listBox_hidak.DisplayMember = "Hid";
        }

        private void megnyitásToolStripMenuItem_Click(object sender, EventArgs e)
        {
            openFileDialog1.CheckFileExists = true;
            openFileDialog1.CheckPathExists = true;
            openFileDialog1.Filter = "Forrás fájl (*.csv)|*.csv|Szöveges fájl (*.txt)|*.txt|Minden fájl (*.*)|*.*";
            openFileDialog1.FilterIndex = 1;
            openFileDialog1.Title = "Fájl megnyitása";
            openFileDialog1.DefaultExt = "csv";
            string munkaKonyvtar = System.IO.Path.GetDirectoryName(System.Windows.Forms.Application.ExecutablePath);
            openFileDialog1.InitialDirectory = munkaKonyvtar;
            openFileDialog1.RestoreDirectory = true;
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                string fajlNev = openFileDialog1.FileName;
                MessageBox.Show("Megnyitott fájl: " + fajlNev, "Fájl megnyitva", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }
    }
}
