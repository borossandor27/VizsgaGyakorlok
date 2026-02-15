using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace WindowsFormsApp1
{
    public partial class FormMain : Form
    {
        BindingList<Gyumolcs> gyumolcsok = new BindingList<Gyumolcs>();
        readonly string _baseUrl = "http://localhost:3000/";
       
        public FormMain()
        {
            InitializeComponent();
        }

        private async void FormMain_Load(object sender, EventArgs e)
        {
            var api = new ApiService<Gyumolcs>(_baseUrl);
            if (!await api.IsApiAvailableAsync())
            {
                MessageBox.Show(
                    "Az API nem érhető el. Ellenőrizd az internetkapcsolatot vagy a címet.",
                    "Kapcsolati hiba",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Warning);
                Environment.Exit(0 );
            }
            else
            {

                await GyumolcsoketBetoltAsync();
                listBox_gyumolcsok.DataSource = gyumolcsok;
                listBox_gyumolcsok.DisplayMember = "Nev";
            }

        }

        private async Task GyumolcsoketBetoltAsync()
        {
            var gyumolcsService = new ApiService<Gyumolcs>(_baseUrl);
            var response = await gyumolcsService.GetAllAsync("gyumolcsok");

            foreach (var item in response)
            {
                gyumolcsok.Add(item);
            }
        }
        


    }
}
