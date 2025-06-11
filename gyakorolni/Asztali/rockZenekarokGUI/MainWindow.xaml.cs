using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using rockZenekarokGUI;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace rockZenekarokGUI
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        List<Zenekar> zenekarok = new List<Zenekar>();
        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            // A kapcsolati sztring lekérése
            string connectionString = App.Configuration.GetConnectionString("MySqlConnection");

            if (string.IsNullOrEmpty(connectionString))
            {
                MessageBox.Show("A 'MySqlConnection' kapcsolati sztring nem található az appsettings.json fájlban.");
                return;
            }

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
                        string stilus_neve=reader.GetString("stilus_neve");
                        zenekarok.Add(new Zenekar(id, nev, stilus_id, orszag, varos, aktiv_evek, tagok, legsikeresebb_album, kep_url, stilus_neve));
                    }
                    reader.Close();
                    ZenekarListBox.ItemsSource = zenekarok;
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
    }
}