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

namespace RealEstateGUI
{
    public partial class Form1 : Form
    {
        MySqlConnection connection = null;
        MySqlCommand command = null;
        TableLayoutPanel tableLayoutPanel = new TableLayoutPanel();

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            adatbazisKapcsolat();

            ListboxUpdate();


        }

        private void AdatPanelFormazas()
        {
            tableLayoutPanel = new TableLayoutPanel
            {
                Dock = DockStyle.Fill,
                ColumnCount = 2,
                RowCount = 4,
                AutoSize = true
            };

            // Oszlopok beállítása
            tableLayoutPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 35)); // 35% széles első oszlop
            tableLayoutPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 65)); // Maradék második oszlop

            // Sorok beállítása (AutoSize minden sorhoz)
            for (int i = 0; i < 4; i++)
            {
                tableLayoutPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            }

            // Példa vezérlők hozzáadása
            tableLayoutPanel.Controls.Add(new Label { Text = "1. Sor, 1. Oszlop", AutoSize = true }, 0, 0);
            tableLayoutPanel.Controls.Add(new Label { Text = "1. Sor, 2. Oszlop", AutoSize = true }, 1, 0);
            tableLayoutPanel.Controls.Add(new Label { Text = "2. Sor, 1. Oszlop", AutoSize = true }, 0, 1);
            tableLayoutPanel.Controls.Add(new Label { Text = "2. Sor, 2. Oszlop", AutoSize = true }, 1, 1);

            // Harmadik sor egyesített cellája (ColumnSpan = 2)
            Label mergedLabel = new Label
            {
                Text = "3. Sor, Egyesített cella",
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter
            };
            tableLayoutPanel.Controls.Add(mergedLabel, 0, 2);
            tableLayoutPanel.SetColumnSpan(mergedLabel, 2); // Az egész sorra kiterjesztés

            // Negyedik sor (normál két oszlopos)
            tableLayoutPanel.Controls.Add(new Label { Text = "4. Sor, 1. Oszlop", AutoSize = true }, 0, 3);
            tableLayoutPanel.Controls.Add(new Label { Text = "4. Sor, 2. Oszlop", AutoSize = true }, 1, 3);

            // Hozzáadás az űrlaphoz
            this.Controls.Add(tableLayoutPanel);

        }

        private void adatbazisKapcsolat()
        {
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
            builder.Server = "localhost";
            builder.UserID = "root";
            builder.Password = "";
            builder.Database = "ingatlan";
            connection = new MySqlConnection(builder.ConnectionString);
            try
            {
                dbOpen();
                command = connection.CreateCommand();
                dbClose();
            }
            catch (MySqlException ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void dbClose()
        {
            if (connection.State != ConnectionState.Closed)
            {
                connection.Close();
            }
        }

        private void dbOpen()
        {
            if (connection.State != ConnectionState.Open)
            {
                connection.Open();
            }
        }

        private void ListboxUpdate()
        {
            listBoxEladok.Items.Clear();
            try
            {
                dbOpen();
                command.CommandText = "SELECT * FROM `sellers`";
                using (MySqlDataReader dr = command.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        Seller seller = new Seller(dr.GetInt32("id"), dr.GetString("name"), dr.GetString("phone"));
                        listBoxEladok.Items.Add(seller);
                    }
                }
                dbClose();

            }
            catch (MySqlException ex)
            {
                MessageBox.Show(ex.Message);
            }

        }

        private void listBoxEladok_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBoxEladok.SelectedIndex != -1)
            {
                Seller seller = (Seller)listBoxEladok.SelectedItem;
                textBox_EladoNeve.Text = seller.Name;
                textBox_EladoTelefonszama.Text = seller.Phone;
                textBox_HirdetesekSzama.Text = "";
            }
        }

        private void buttonSzamol_Click(object sender, EventArgs e)
        {
            if(listBoxEladok.SelectedIndex < 0)
            {
                return;
            }
            string id = ((Seller)listBoxEladok.SelectedItem).Id.ToString();
            command.CommandText = "SELECT COUNT(*) AS db FROM realestates WHERE realestates.sellerId=" + id;
            try
            {
                dbOpen();
                using (MySqlDataReader dr = command.ExecuteReader())
                {
                    if (dr.Read())
                    {
                        textBox_HirdetesekSzama.Text = dr.GetInt32("db").ToString();
                    }
                }
                dbClose();
            }
            catch (MySqlException ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
