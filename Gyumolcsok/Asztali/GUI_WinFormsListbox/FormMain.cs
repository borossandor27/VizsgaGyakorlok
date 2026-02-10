using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GUI_WinFormsListbox
{
    public partial class FormMain : Form
    {
        BindingList<Gyumolcs> gyumolcsok = new BindingList<Gyumolcs>();
        Dictionary<int,Erkezes> erkezesek = new Dictionary<int,Erkezes>();
        public FormMain()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            listBox_gyumolcsok.DataSource = gyumolcsok;
            listBox_gyumolcsok.DisplayMember = "Nev";
            forrasUpdate();
            dataGridView_erkezesek.Width = this.Width - listBox_gyumolcsok.Width - 50;
        }

        private void forrasUpdate()
        {
            gyumolcsok.Clear();
            CsvReader.BetoltGyumolcsok("gyumolcs.csv").ForEach(g => gyumolcsok.Add(g));
            erkezesek.Clear();
            foreach (Erkezes item in CsvReader.BetoltErkezesek("erkezes.csv"))
            {
                gyumolcsok[item.gyumolcsid - 1].Erkezesek.Add(item);
            }
            
         }

        private void listBox_gyumolcsok_SelectedIndexChanged(object sender, EventArgs e)
        {
            Gyumolcs kivalasztott = listBox_gyumolcsok.SelectedItem as Gyumolcs;
            if (kivalasztott != null)
            {
                dataGridView_erkezesek.DataSource = kivalasztott.Erkezesek;
            }
        }
    }
}
