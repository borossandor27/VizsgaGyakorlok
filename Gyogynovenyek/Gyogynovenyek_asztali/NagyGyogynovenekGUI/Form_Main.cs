using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using NagyGyogynovenekGUI;
using MySqlConnector;
using System.IO;

namespace NagyGyogynovenekGUI
{
    public partial class Form : System.Windows.Forms.Form
    {
        BindingList<Gyogynoveny> gyogynovenyek = new BindingList<Gyogynoveny>();
        MySqlConnection connection;
        public Form()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
            builder.Server = "localhost";
            builder.UserID = "root";
            builder.Password = "";
            builder.Database = "gyogynovenyek_db";
            builder.Port = 3306;
            connection = new MySqlConnection(builder.ConnectionString);
            tableLayoutPanel1.BackColor=Color.Transparent;
            panel_jobb.BackColor = Color.Transparent;
            panel_keptarto.BackColor = Color.Transparent;
            label_lelohely.BackColor = Color.Transparent;
            pictureBox_lelohely.BackColor = Color.Transparent;
        }

        private void adatbeolvasas()
        {
            string sql = "SELECT gyogynoven.*, lelohely.nev AS lelohelynev FROM gyogynoven join lelohely ON gyogynoven.lelohely_id = lelohely.id;";
            MySqlCommand command = connection.CreateCommand();
            command.CommandText = sql;
            try
            {
                connection.Open();
                using (MySqlDataReader dr = command.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        Gyogynoveny gyogynoveny = new Gyogynoveny(
                            dr.GetInt32("azon"),
                            dr.GetString("nev"),
                            dr.GetString("fajta"),
                            dr.GetInt32("lelohely_id"),
                            dr.GetInt32("gyujtes_eve"),
                            dr.GetString("hasznositas"),
                            dr.GetString("lelohelynev"),
                            dr.GetString("URL")
                        );
                        gyogynovenyek.Add(gyogynoveny);
                    }
                }
            }
            catch (MySqlException ex)
            {
                MessageBox.Show(ex.Message);
                return;
            }
            dataGridView_gyogynovenyek.DataSource = gyogynovenyek;
            dataGridView_gyogynovenyek.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            dataGridView_gyogynovenyek.Columns["LelohelyId"].Visible = false;
            button_adatok_betoltese.Enabled = false;
        }

        private void dataGridView_gyogynovenyek_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            DataGridViewRow row = dataGridView_gyogynovenyek.Rows[e.RowIndex];
            Gyogynoveny gyogynoveny = row.DataBoundItem as Gyogynoveny;
            label_lelohely.Text = gyogynoveny.LelohelyNev;
            if(gyogynoveny.KepUrl != string.Empty && File.Exists(gyogynoveny.KepUrl))
            {
                pictureBox_lelohely.Image = Image.FromFile(gyogynoveny.KepUrl);
            }
        }

        private void button_adatok_betoltese_Click(object sender, EventArgs e)
        {
            adatbeolvasas();
        }
    }
}
