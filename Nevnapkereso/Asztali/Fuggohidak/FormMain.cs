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
            textBox_Hossz.TextAlign = HorizontalAlignment.Right;
            textBox_Ev.TextAlign = HorizontalAlignment.Right;
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

        private void kilépésToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("Biztosan kilép?", "Kilépés megerősítése", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
            {
                Application.Exit();
            }
        }

        private void listBox_hidak_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox_hidak.SelectedItem is Fuggohid selectedHid)
            {
                textBox_Orszag.Text = selectedHid.Orszag;
                textBox_Hely.Text = selectedHid.Hely;
                textBox_Hossz.Text = selectedHid.Hossz.ToString("#,##0");
                textBox_Ev.Text = selectedHid.Ev.ToString();
            }
        }

        private void radioButton_2000elott_CheckedChanged(object sender, EventArgs e)
        {
            textBox_hidakSzama.Text = _fuggohidak.Count(h => h.Ev < 2000).ToString();
        }

        private void radioButton_2000utan_CheckedChanged(object sender, EventArgs e)
        {
            textBox_hidakSzama.Text = _fuggohidak.Count(h => h.Ev >= 2000).ToString();
        }

        private void keresésToolStripMenuItem_Click(object sender, EventArgs e)
        {
            FormKereses formKereses = new FormKereses(_fuggohidak);
            this.Hide();
            formKereses.ShowDialog();
            this.Show();
        }
    }
}
