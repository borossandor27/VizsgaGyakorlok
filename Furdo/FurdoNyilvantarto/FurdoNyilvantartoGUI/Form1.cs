using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySqlConnector;
using System.IO;

namespace FurdoNyilvantartoGUI
{
    public partial class Form1 : Form
    {
        BindingList<Furdo> furdok = new BindingList<Furdo>();
        MySqlConnection _mySqlConnection = null;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            tableLayoutPanel1.BackColor = Color.Transparent;
            panel1.BackColor = Color.Transparent;
            panel2.BackColor = Color.Transparent;
            pictureBox_furdokep.SizeMode = PictureBoxSizeMode.StretchImage;
            dataGridView_furdok.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            MySqlConnectionStringBuilder sb = new MySqlConnectionStringBuilder();
            sb.Server = "localhost";
            sb.Database = "furdo_db";
            sb.Port = 3306;
            sb.UserID = "root";
            sb.Password = "";
            _mySqlConnection = new MySqlConnection(sb.ConnectionString);
            adatbazisbol_olvas();
        }

        private void adatbazisbol_olvas()
        {
            furdok.Clear();
            dataGridView_furdok.DataSource = null;
            try
            {
                _mySqlConnection.Open();
                MySqlCommand cmd = _mySqlConnection.CreateCommand();
                cmd.CommandText = "SELECT furdo.*, varos.nev AS varosNev FROM `furdo` JOIN varos ON furdo.varos_id = varos.id;";
                using (MySqlDataReader reader = cmd.ExecuteReader()) { 
                    while (reader.Read())
                    {
                        Furdo furdo = new Furdo(
                            reader["azon"].ToString(),
                            reader["nev"].ToString(),
                            reader["tipus"].ToString(),
                            reader["medencek"].ToString(),
                            reader["belepodij"].ToString(),
                            reader["varos_id"].ToString(),
                            reader["nyitas_eve"].ToString(),
                            reader["varosNev"].ToString(),
                            (reader["URL"] == DBNull.Value) ? "" : reader["URL"].ToString()
                        );
                        furdok.Add(furdo);
                    }
                reader.Close();
                }
                _mySqlConnection.Close();
                dataGridView_furdok.DataSource = furdok;
            }
            catch (MySqlException ex)
            {
                MessageBox.Show(ex.Message);
                Environment.Exit(0);
            }
        }

        private void dataGridView_furdok_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            Furdo furdo = (Furdo)dataGridView_furdok.CurrentRow.DataBoundItem;
            string kepUrl = furdo.KepUrl;
            if(File.Exists(kepUrl))
            if(kepUrl == "" || String.IsNullOrEmpty(kepUrl))
            {
                pictureBox_furdokep.Image = null;
                return;
            } else if (!File.Exists(kepUrl))
                {
                    pictureBox_furdokep.Image = null;
                    return;
                }
            pictureBox_furdokep.Image = (File.Exists(kepUrl)) ? Image.FromFile(kepUrl) : null;
            label_varosnev.Text = furdo.VarosNev;
        }
    }
}
