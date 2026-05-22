using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

// ============================================================
//  NagyFakGUI – WinForms grafikus alkalmazás
//  2. feladat megoldása
//  Hivatkozza be a NagyFak projektet, vagy másolja ide a Fa osztályt!
// ============================================================

namespace NagyFakGUI
{
    public partial class Form1 : Form
    {
        // ── Adatbázis kapcsolati string ──────────────────────
        private const string ConnStr =
            "Server=localhost;Database=fak_db;Uid=root;Pwd=;CharSet=utf8mb4;";

        // ── Tárolók ─────────────────────────────────────────
        // Fa osztály legyen a NagyFak projektből hivatkozva,
        // vagy hozza létre újra itt (lásd lent a megjegyzést).
        private List<Fa> fakLista = new List<Fa>();

        public Form1()
        {
            InitializeComponent();
            BeallitHatterkep();
        }

        // ── Háttérkép beállítása (farajz.jpg) ───────────────
        // 2. feladat: az ablak háttérképe a farajz.jpg legyen
        private void BeallitHatterkep()
        {
            string kepUt = Path.Combine(
                AppDomain.CurrentDomain.BaseDirectory, "farajz.jpg");

            if (File.Exists(kepUt))
            {
                this.BackgroundImage = Image.FromFile(kepUt);
                // Reszponzív: kép mérete változzon az ablakhoz képest,
                // de a vezérlők ne skálázódjanak → Zoom vagy Stretch
                this.BackgroundImageLayout = ImageLayout.Stretch;
            }
        }

        // ── "Adatok betöltése" gomb kattintás ───────────────
        // 4. feladat
        private void btnBetoltes_Click(object sender, EventArgs e)
        {
            fakLista.Clear();
            lstFak.Items.Clear();

            try
            {
                using (var conn = new MySqlConnection(ConnStr))
                {
                    conn.Open();

                    // JOIN: fa + telepules → telepules nevét is lekérjük
                    string sql = @"
                        SELECT f.azon, f.faj, f.kormeret, f.meres,
                               t.nev AS telepulesNev
                        FROM fa f
                        JOIN telepules t ON f.telepules_id = t.id
                        ORDER BY f.azon";

                    using (var cmd = new MySqlCommand(sql, conn))
                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            var fa = new Fa(
                                azon:          reader.GetInt32("azon"),
                                faj:           reader.GetString("faj"),
                                kormeret:      reader.GetInt32("kormeret"),
                                telepulesId:   0,          // nem kell külön
                                meresEve:      reader.GetInt32("meres"),
                                telepulesNev:  reader.GetString("telepulesNev")
                            );
                            fakLista.Add(fa);

                            // A listában csak: Azon | Faj
                            // (a feladat mintájának megfelelően)
                            lstFak.Items.Add($"{fa.Azon,-6} {fa.Faj}");
                        }
                    }
                }

                // Betöltés után a gomb ne legyen elérhető (4. feladat)
                btnBetoltes.Enabled = false;
            }
            catch (Exception ex)
            {
                MessageBox.Show(
                    "Adatbázis-hiba:\n" + ex.Message,
                    "Hiba",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error);
            }
        }

        // ── Lista elem kiválasztása ──────────────────────────
        // 5. feladat: település neve + kép megjelenítése
        private void lstFak_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (lstFak.SelectedIndex < 0) return;

            Fa kivalasztott = fakLista[lstFak.SelectedIndex];

            // Település neve a "Település:" label alatt
            lblTelepulesErtek.Text = kivalasztott.TelepulesNev;

            // Kép betöltése az img/ mappából
            // Az img/ mappa az .exe mellé kerüljön (Build Action: None, Copy if newer)
            string kepMappa = Path.Combine(
                AppDomain.CurrentDomain.BaseDirectory, "img");

            // Fájlnév: a település neve + .jpg
            // Ha nincs ilyen fájl, a PictureBox üresen marad (feladat szerint)
            string kepFajl = Path.Combine(
                kepMappa,
                kivalasztott.TelepulesNev + ".jpg");

            if (File.Exists(kepFajl))
            {
                // Képet felszabadítjuk, ha már van betöltve
                picTelepules.Image?.Dispose();
                picTelepules.Image = Image.FromFile(kepFajl);
            }
            else
            {
                picTelepules.Image?.Dispose();
                picTelepules.Image = null;   // üres marad
            }
        }

        // ── Ablak átméretezésekor csak a képek skálázódjanak ─
        // 2. feladat: reszponzív – nagyobb ablak esetén
        //             csak a képek mérete változzon
        protected override void OnResize(EventArgs e)
        {
            base.OnResize(e);

            // PictureBox méretezése az ablak jobb feléhez igazítva
            // (a pontos elrendezés az InitializeComponent()-ben van)
        }
    }
}
