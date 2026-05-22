namespace NagyFakGUI
{
    partial class Form1
    {
        private System.ComponentModel.IContainer components = null;

        // ── Vezérlők deklarálása ─────────────────────────────
        private System.Windows.Forms.Label      lblCim;
        private System.Windows.Forms.ListBox    lstFak;
        private System.Windows.Forms.Button     btnBetoltes;
        private System.Windows.Forms.Label      lblTelepulesCim;   // "Település:"
        private System.Windows.Forms.Label      lblTelepulesErtek; // a tényleges név
        private System.Windows.Forms.PictureBox picTelepules;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
                components.Dispose();
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.lblCim            = new System.Windows.Forms.Label();
            this.lstFak            = new System.Windows.Forms.ListBox();
            this.btnBetoltes       = new System.Windows.Forms.Button();
            this.lblTelepulesCim   = new System.Windows.Forms.Label();
            this.lblTelepulesErtek = new System.Windows.Forms.Label();
            this.picTelepules      = new System.Windows.Forms.PictureBox();

            ((System.ComponentModel.ISupportInitialize)(this.picTelepules)).BeginInit();
            this.SuspendLayout();

            // ── Form ─────────────────────────────────────────
            this.Text            = "Rockzenekarok adatai";   // feladatban látható ablakcím
            this.ClientSize      = new System.Drawing.Size(900, 600);
            this.MinimumSize     = new System.Drawing.Size(700, 450);
            this.Font            = new System.Drawing.Font("Segoe UI", 9F);
            this.BackColor       = System.Drawing.Color.FromArgb(30, 30, 30);
            // Háttérkép: Form1.cs-ben töltjük be (BeallitHatterkep)

            // ── Cím label (felső sáv) ─────────────────────────
            this.lblCim.Text      = "Fák adatai:";
            this.lblCim.ForeColor = System.Drawing.Color.White;
            this.lblCim.BackColor = System.Drawing.Color.FromArgb(80, 0, 0, 0);
            this.lblCim.Font      = new System.Drawing.Font("Segoe UI", 11F, System.Drawing.FontStyle.Bold);
            this.lblCim.Location  = new System.Drawing.Point(12, 10);
            this.lblCim.Size      = new System.Drawing.Size(400, 28);
            this.lblCim.Anchor    = System.Windows.Forms.AnchorStyles.Top
                                  | System.Windows.Forms.AnchorStyles.Left;

            // ── ListBox (bal oldal) ───────────────────────────
            // Reszponzív: bal + top + bottom anchored
            this.lstFak.Location  = new System.Drawing.Point(12, 44);
            this.lstFak.Size      = new System.Drawing.Size(400, 460);
            this.lstFak.Font      = new System.Drawing.Font("Consolas", 9F);
            this.lstFak.BackColor = System.Drawing.Color.FromArgb(245, 245, 245);
            this.lstFak.Anchor    = System.Windows.Forms.AnchorStyles.Top
                                  | System.Windows.Forms.AnchorStyles.Bottom
                                  | System.Windows.Forms.AnchorStyles.Left;
            this.lstFak.SelectedIndexChanged += new System.EventHandler(this.lstFak_SelectedIndexChanged);

            // ── "Adatok betöltése" gomb ───────────────────────
            this.btnBetoltes.Text      = "Adatok betöltése";
            this.btnBetoltes.Location  = new System.Drawing.Point(12, 516);
            this.btnBetoltes.Size      = new System.Drawing.Size(160, 32);
            this.btnBetoltes.BackColor = System.Drawing.Color.FromArgb(60, 60, 60);
            this.btnBetoltes.ForeColor = System.Drawing.Color.White;
            this.btnBetoltes.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnBetoltes.Anchor    = System.Windows.Forms.AnchorStyles.Bottom
                                       | System.Windows.Forms.AnchorStyles.Left;
            this.btnBetoltes.Click    += new System.EventHandler(this.btnBetoltes_Click);

            // ── "Település:" felirat ──────────────────────────
            this.lblTelepulesCim.Text      = "Település:";
            this.lblTelepulesCim.ForeColor = System.Drawing.Color.White;
            this.lblTelepulesCim.BackColor = System.Drawing.Color.FromArgb(80, 0, 0, 0);
            this.lblTelepulesCim.Font      = new System.Drawing.Font("Segoe UI", 10F, System.Drawing.FontStyle.Bold);
            this.lblTelepulesCim.Location  = new System.Drawing.Point(430, 10);
            this.lblTelepulesCim.Size      = new System.Drawing.Size(440, 28);
            this.lblTelepulesCim.Anchor    = System.Windows.Forms.AnchorStyles.Top
                                           | System.Windows.Forms.AnchorStyles.Left
                                           | System.Windows.Forms.AnchorStyles.Right;

            // ── Település neve (értéklabel) ───────────────────
            this.lblTelepulesErtek.Text      = "";
            this.lblTelepulesErtek.ForeColor = System.Drawing.Color.White;
            this.lblTelepulesErtek.BackColor = System.Drawing.Color.FromArgb(80, 0, 0, 0);
            this.lblTelepulesErtek.Font      = new System.Drawing.Font("Segoe UI", 10F);
            this.lblTelepulesErtek.Location  = new System.Drawing.Point(430, 40);
            this.lblTelepulesErtek.Size      = new System.Drawing.Size(440, 28);
            this.lblTelepulesErtek.Anchor    = System.Windows.Forms.AnchorStyles.Top
                                             | System.Windows.Forms.AnchorStyles.Left
                                             | System.Windows.Forms.AnchorStyles.Right;

            // ── PictureBox (jobb oldal – kép) ─────────────────
            // Reszponzív: top + bottom + left + right anchored
            // → az ablak átméretezésekor CSAK a kép mérete változik
            this.picTelepules.Location    = new System.Drawing.Point(430, 74);
            this.picTelepules.Size        = new System.Drawing.Size(452, 474);
            this.picTelepules.SizeMode    = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picTelepules.BackColor   = System.Drawing.Color.Transparent;
            this.picTelepules.Anchor      = System.Windows.Forms.AnchorStyles.Top
                                          | System.Windows.Forms.AnchorStyles.Bottom
                                          | System.Windows.Forms.AnchorStyles.Left
                                          | System.Windows.Forms.AnchorStyles.Right;

            // ── Controls hozzáadása ───────────────────────────
            this.Controls.Add(this.lblCim);
            this.Controls.Add(this.lstFak);
            this.Controls.Add(this.btnBetoltes);
            this.Controls.Add(this.lblTelepulesCim);
            this.Controls.Add(this.lblTelepulesErtek);
            this.Controls.Add(this.picTelepules);

            ((System.ComponentModel.ISupportInitialize)(this.picTelepules)).EndInit();
            this.ResumeLayout(false);
        }
    }
}
