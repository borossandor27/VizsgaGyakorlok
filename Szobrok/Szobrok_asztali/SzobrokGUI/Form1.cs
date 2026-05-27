using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace SzobrokGUI
{
    public partial class Form1 : Form
    {
        MySqlConnection conn;
        MySqlCommand cmd;
        BindingList<AdatSor> szobrok = new BindingList<AdatSor>();

        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            dataGridView1.DataSource = null;
            szobrok.Clear();
            string sql = "SELECT szobor.szemely As Szobor, alkoto.nev AS \"Alkotó\", szobor.hely AS \"Település\" FROM `szobor` JOIN kapcsolat ON szobor.id = kapcsolat.szoborid JOIN alkoto ON kapcsolat.alkotoid = alkoto.id WHERE 1;";
            cmd = new MySqlCommand(sql, conn);
            cmd.CommandText = sql;
            try
            {
                conn.Open();
                using (MySqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        szobrok.Add(new AdatSor(dr.GetString("Szobor"), dr.GetString("Alkotó"), dr.GetString("Település")));
                    }
                }

            }
            catch (MySqlException ex)
            {
                MessageBox.Show(ex.Message);
                return;
            }
            finally
            {
                conn.Close();
            }
            dataGridView1.DataSource = szobrok;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
            builder.Server = "localhost";
            builder.UserID = "root";
            builder.Password = "";
            builder.Database = "szobrok";

            conn = new MySqlConnection(builder.ConnectionString);
            dataGridView1.rowsele
        }
    }
}
