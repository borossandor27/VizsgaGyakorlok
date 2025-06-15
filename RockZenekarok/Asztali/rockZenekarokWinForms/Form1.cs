using System;
using System.Collections.Generic;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace rockZenekarokWinForms
{
    public partial class Form1 : Form
    {
        List<Zenekar> zenekarok = new List<Zenekar>();
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
        private void LoadData()
        {
            // A kapcsolati sztring összeállítása
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder
            {
                Server = "localhost", // vagy a megfelelő szerver címe
                Database = "rock_zenekarok_70s", // az adatbázis neve
                UserID = "root", // az adatbázis felhasználója
                Password = "", // az adatbázis jelszava
                Port = 3306, // a MySQL alapértelmezett portja
                SslMode = MySqlSslMode.None // SSL mód beállítása, ha szükséges
            };
            string connectionString = builder.ConnectionString;

            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();
                    //MessageBox.Show("Sikeresen csatlakozva a MySQL adatbázishoz!");


                    string query = "SELECT zenekarok.id,`nev`,`stilus_id`,`orszag`,`varos`,`aktiv_evek`,`tagok`,`legsikeresebb_album`,`kep_url`, stilusok.stilus_neve FROM `zenekarok` JOIN stilusok ON zenekarok.stilus_id=stilusok.id;";
                    MySqlCommand command = new MySqlCommand(query, connection);
                    MySqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        int id = reader.GetInt32("id");
                        string nev = reader.GetString("nev");
                        int stilus_id = reader.GetInt32("stilus_id");
                        string orszag = reader.GetString("orszag");
                        string varos = reader.GetString("varos");
                        string aktiv_evek = reader.GetString("aktiv_evek");
                        string tagok = reader.GetString("tagok");
                        string legsikeresebb_album = reader.GetString("legsikeresebb_album");
                        string kep_url = reader.GetString("kep_url");
                        string stilus_neve = reader.GetString("stilus_neve");
                        zenekarok.Add(new Zenekar(id, nev, stilus_id, orszag, varos, aktiv_evek, tagok, legsikeresebb_album, kep_url, stilus_neve));
                    }
                    reader.Close();
                    listBox_Zenekarok.DataSource = zenekarok;
                }
            }
            catch (MySqlException ex)
            {
                MessageBox.Show($"Hiba a MySQL csatlakozás során: {ex.Message}");
            }
            catch (System.Exception ex)
            {
                MessageBox.Show($"Általános hiba: {ex.Message}");
            }
        }

        private void button_LoadData_Click(object sender, EventArgs e)
        {
            LoadData();
            button_LoadData.Enabled = false;
            button_LoadData.Visible = false;
        }

        private void listBox_Zenekarok_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox_Zenekarok.SelectedIndex<0)
            {
                return;
            }
            Zenekar selectedZenekar = (Zenekar)listBox_Zenekarok.SelectedItem;
            pictureBox_ZenekarKepe.ImageLocation = selectedZenekar.kep_url;
            pictureBox_ZenekarKepe.Load(); // Kép betöltése a PictureBox-ba
            label_AktivEvek.Text = selectedZenekar.felbomlas_eve-selectedZenekar.megalakulas_eve + " év";
        }
    }
}
