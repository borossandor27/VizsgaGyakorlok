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
    public partial class FormKereses : Form
    {
        private BindingList<Fuggohid> _fuggohidak;
        private Fuggohid _kivalasztottHid;
        private BindingList<Fuggohid> _keresettHidak = new BindingList<Fuggohid>();

        public FormKereses(BindingList<Fuggohid> fuggohidak)
        {
            InitializeComponent();
            _fuggohidak = fuggohidak;
        }

        private void FormKereses_Load(object sender, EventArgs e)
        {
            comboBox_orszag.Items.AddRange(_fuggohidak.Select(f => f.Orszag).Distinct().ToArray());
        }

        private void comboBox_orszag_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (comboBox_orszag.SelectedIndex >= 0)
            {
                string selectedOrszag = comboBox_orszag.SelectedItem.ToString();
                var keresettHidak = _fuggohidak.Where(f => f.Orszag == selectedOrszag).OrderBy(g => g.Hid).ToList();
                if (checkBox_kilometeres.Checked) {
                    _keresettHidak = new BindingList<Fuggohid>(keresettHidak.Where(f => f.Hossz > 1000).OrderByDescending(g => g.Hossz).ToList());
                }
                if (keresettHidak.Count == 0)
                {
                    MessageBox.Show("Nincs találat a kiválasztott országra.", "Nincs találat", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return;
                }
                _keresettHidak.Clear();
                foreach (var hid in keresettHidak)
                {
                    _keresettHidak.Add(hid);
                }
                listBox_keresettHidak.DataSource = _keresettHidak;
                listBox_keresettHidak.DisplayMember = "Hid";
            }
        }

        private void button_close_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("Biztosan bezárja a keresést?", "Keresés bezárása", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
            {
                this.Close();
            }

        }
    }
}
