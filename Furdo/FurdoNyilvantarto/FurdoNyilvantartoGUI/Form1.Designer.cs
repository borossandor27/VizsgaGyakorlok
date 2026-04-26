namespace FurdoNyilvantartoGUI
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.panel1 = new System.Windows.Forms.Panel();
            this.dataGridView_furdok = new System.Windows.Forms.DataGridView();
            this.button_adatbetoltes = new System.Windows.Forms.Button();
            this.panel2 = new System.Windows.Forms.Panel();
            this.panel3 = new System.Windows.Forms.Panel();
            this.label_varosnev = new System.Windows.Forms.Label();
            this.pictureBox_furdokep = new System.Windows.Forms.PictureBox();
            this.tableLayoutPanel1.SuspendLayout();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_furdok)).BeginInit();
            this.panel2.SuspendLayout();
            this.panel3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_furdokep)).BeginInit();
            this.SuspendLayout();
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.BackColor = System.Drawing.Color.Transparent;
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 500F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle());
            this.tableLayoutPanel1.Controls.Add(this.panel1, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.panel2, 1, 0);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 1;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(1153, 450);
            this.tableLayoutPanel1.TabIndex = 0;
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.Transparent;
            this.panel1.Controls.Add(this.dataGridView_furdok);
            this.panel1.Controls.Add(this.button_adatbetoltes);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(3, 3);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(494, 444);
            this.panel1.TabIndex = 0;
            // 
            // dataGridView_furdok
            // 
            this.dataGridView_furdok.AllowUserToAddRows = false;
            this.dataGridView_furdok.AllowUserToDeleteRows = false;
            this.dataGridView_furdok.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView_furdok.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dataGridView_furdok.Location = new System.Drawing.Point(0, 43);
            this.dataGridView_furdok.Name = "dataGridView_furdok";
            this.dataGridView_furdok.ReadOnly = true;
            this.dataGridView_furdok.RowHeadersWidth = 51;
            this.dataGridView_furdok.RowTemplate.Height = 24;
            this.dataGridView_furdok.Size = new System.Drawing.Size(494, 401);
            this.dataGridView_furdok.TabIndex = 1;
            this.dataGridView_furdok.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView_furdok_CellClick);
            // 
            // button_adatbetoltes
            // 
            this.button_adatbetoltes.Dock = System.Windows.Forms.DockStyle.Top;
            this.button_adatbetoltes.Location = new System.Drawing.Point(0, 0);
            this.button_adatbetoltes.Name = "button_adatbetoltes";
            this.button_adatbetoltes.Size = new System.Drawing.Size(494, 43);
            this.button_adatbetoltes.TabIndex = 0;
            this.button_adatbetoltes.Text = "Adatok betöltése";
            this.button_adatbetoltes.UseVisualStyleBackColor = true;
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.Transparent;
            this.panel2.Controls.Add(this.panel3);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(503, 3);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(647, 444);
            this.panel2.TabIndex = 1;
            // 
            // panel3
            // 
            this.panel3.BackColor = System.Drawing.Color.Transparent;
            this.panel3.Controls.Add(this.pictureBox_furdokep);
            this.panel3.Controls.Add(this.label_varosnev);
            this.panel3.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel3.Location = new System.Drawing.Point(0, 0);
            this.panel3.Margin = new System.Windows.Forms.Padding(80);
            this.panel3.Name = "panel3";
            this.panel3.Padding = new System.Windows.Forms.Padding(100);
            this.panel3.Size = new System.Drawing.Size(647, 444);
            this.panel3.TabIndex = 1;
            // 
            // label_varosnev
            // 
            this.label_varosnev.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.label_varosnev.AutoSize = true;
            this.label_varosnev.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.label_varosnev.ForeColor = System.Drawing.Color.White;
            this.label_varosnev.Location = new System.Drawing.Point(223, 53);
            this.label_varosnev.Name = "label_varosnev";
            this.label_varosnev.Size = new System.Drawing.Size(146, 32);
            this.label_varosnev.TabIndex = 0;
            this.label_varosnev.Text = "Nincs kép!";
            this.label_varosnev.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // pictureBox_furdokep
            // 
            this.pictureBox_furdokep.BackColor = System.Drawing.Color.Transparent;
            this.pictureBox_furdokep.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pictureBox_furdokep.Location = new System.Drawing.Point(100, 100);
            this.pictureBox_furdokep.Margin = new System.Windows.Forms.Padding(50, 110, 50, 110);
            this.pictureBox_furdokep.Name = "pictureBox_furdokep";
            this.pictureBox_furdokep.Size = new System.Drawing.Size(447, 244);
            this.pictureBox_furdokep.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_furdokep.TabIndex = 1;
            this.pictureBox_furdokep.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(1153, 450);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Name = "Form1";
            this.Text = "Öreg fürdők";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_furdok)).EndInit();
            this.panel2.ResumeLayout(false);
            this.panel3.ResumeLayout(false);
            this.panel3.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_furdokep)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Button button_adatbetoltes;
        private System.Windows.Forms.DataGridView dataGridView_furdok;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Label label_varosnev;
        private System.Windows.Forms.PictureBox pictureBox_furdokep;
    }
}

