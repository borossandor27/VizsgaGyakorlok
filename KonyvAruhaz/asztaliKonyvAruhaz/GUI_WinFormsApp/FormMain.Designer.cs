namespace GUI_WinFormsApp
{
    partial class FormMain
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FormMain));
            this.listBox_Konyvek = new System.Windows.Forms.ListBox();
            this.groupBox_Uj_konyv = new System.Windows.Forms.GroupBox();
            this.pictureBoxBorito = new System.Windows.Forms.PictureBox();
            this.button_Save = new System.Windows.Forms.Button();
            this.checkBox_Keszleten = new System.Windows.Forms.CheckBox();
            this.numericUpDown_Ar = new System.Windows.Forms.NumericUpDown();
            this.button_Boritokep = new System.Windows.Forms.Button();
            this.numericUpDown_KiadasEve = new System.Windows.Forms.NumericUpDown();
            this.textBox_Szerzo = new System.Windows.Forms.TextBox();
            this.label10 = new System.Windows.Forms.Label();
            this.textBox_Cim = new System.Windows.Forms.TextBox();
            this.label9 = new System.Windows.Forms.Label();
            this.textBox_Kiado = new System.Windows.Forms.TextBox();
            this.label8 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.textBox_ISBN = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.textBox_Leiras = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.textBox_Boritokep = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.textBox_Id = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox_Uj_konyv.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBoxBorito)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown_Ar)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown_KiadasEve)).BeginInit();
            this.SuspendLayout();
            // 
            // listBox_Konyvek
            // 
            this.listBox_Konyvek.Dock = System.Windows.Forms.DockStyle.Left;
            this.listBox_Konyvek.FormattingEnabled = true;
            this.listBox_Konyvek.ItemHeight = 16;
            this.listBox_Konyvek.Location = new System.Drawing.Point(0, 0);
            this.listBox_Konyvek.Name = "listBox_Konyvek";
            this.listBox_Konyvek.Size = new System.Drawing.Size(356, 634);
            this.listBox_Konyvek.TabIndex = 0;
            // 
            // groupBox_Uj_konyv
            // 
            this.groupBox_Uj_konyv.Controls.Add(this.pictureBoxBorito);
            this.groupBox_Uj_konyv.Controls.Add(this.button_Save);
            this.groupBox_Uj_konyv.Controls.Add(this.checkBox_Keszleten);
            this.groupBox_Uj_konyv.Controls.Add(this.numericUpDown_Ar);
            this.groupBox_Uj_konyv.Controls.Add(this.button_Boritokep);
            this.groupBox_Uj_konyv.Controls.Add(this.numericUpDown_KiadasEve);
            this.groupBox_Uj_konyv.Controls.Add(this.textBox_Szerzo);
            this.groupBox_Uj_konyv.Controls.Add(this.label10);
            this.groupBox_Uj_konyv.Controls.Add(this.textBox_Cim);
            this.groupBox_Uj_konyv.Controls.Add(this.label9);
            this.groupBox_Uj_konyv.Controls.Add(this.textBox_Kiado);
            this.groupBox_Uj_konyv.Controls.Add(this.label8);
            this.groupBox_Uj_konyv.Controls.Add(this.label7);
            this.groupBox_Uj_konyv.Controls.Add(this.textBox_ISBN);
            this.groupBox_Uj_konyv.Controls.Add(this.label6);
            this.groupBox_Uj_konyv.Controls.Add(this.textBox_Leiras);
            this.groupBox_Uj_konyv.Controls.Add(this.label5);
            this.groupBox_Uj_konyv.Controls.Add(this.textBox_Boritokep);
            this.groupBox_Uj_konyv.Controls.Add(this.label3);
            this.groupBox_Uj_konyv.Controls.Add(this.textBox_Id);
            this.groupBox_Uj_konyv.Controls.Add(this.label1);
            this.groupBox_Uj_konyv.Dock = System.Windows.Forms.DockStyle.Fill;
            this.groupBox_Uj_konyv.Location = new System.Drawing.Point(356, 0);
            this.groupBox_Uj_konyv.Name = "groupBox_Uj_konyv";
            this.groupBox_Uj_konyv.Size = new System.Drawing.Size(964, 634);
            this.groupBox_Uj_konyv.TabIndex = 1;
            this.groupBox_Uj_konyv.TabStop = false;
            this.groupBox_Uj_konyv.Text = "Új könyv";
            // 
            // pictureBoxBorito
            // 
            this.pictureBoxBorito.Location = new System.Drawing.Point(576, 76);
            this.pictureBoxBorito.Name = "pictureBoxBorito";
            this.pictureBoxBorito.Size = new System.Drawing.Size(267, 357);
            this.pictureBoxBorito.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBoxBorito.TabIndex = 25;
            this.pictureBoxBorito.TabStop = false;
            // 
            // button_Save
            // 
            this.button_Save.Image = ((System.Drawing.Image)(resources.GetObject("button_Save.Image")));
            this.button_Save.Location = new System.Drawing.Point(358, 497);
            this.button_Save.Name = "button_Save";
            this.button_Save.Size = new System.Drawing.Size(132, 87);
            this.button_Save.TabIndex = 24;
            this.button_Save.TextImageRelation = System.Windows.Forms.TextImageRelation.ImageBeforeText;
            this.button_Save.UseVisualStyleBackColor = true;
            this.button_Save.Click += new System.EventHandler(this.button_Save_Click);
            // 
            // checkBox_Keszleten
            // 
            this.checkBox_Keszleten.AutoSize = true;
            this.checkBox_Keszleten.Location = new System.Drawing.Point(391, 350);
            this.checkBox_Keszleten.Name = "checkBox_Keszleten";
            this.checkBox_Keszleten.Size = new System.Drawing.Size(87, 20);
            this.checkBox_Keszleten.TabIndex = 23;
            this.checkBox_Keszleten.Text = "Készleten";
            this.checkBox_Keszleten.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.checkBox_Keszleten.UseVisualStyleBackColor = true;
            // 
            // numericUpDown_Ar
            // 
            this.numericUpDown_Ar.Location = new System.Drawing.Point(221, 349);
            this.numericUpDown_Ar.Maximum = new decimal(new int[] {
            100000,
            0,
            0,
            0});
            this.numericUpDown_Ar.Minimum = new decimal(new int[] {
            100,
            0,
            0,
            0});
            this.numericUpDown_Ar.Name = "numericUpDown_Ar";
            this.numericUpDown_Ar.Size = new System.Drawing.Size(120, 22);
            this.numericUpDown_Ar.TabIndex = 22;
            this.numericUpDown_Ar.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.numericUpDown_Ar.ThousandsSeparator = true;
            this.numericUpDown_Ar.Value = new decimal(new int[] {
            100,
            0,
            0,
            0});
            // 
            // button_Boritokep
            // 
            this.button_Boritokep.Location = new System.Drawing.Point(30, 402);
            this.button_Boritokep.Name = "button_Boritokep";
            this.button_Boritokep.Size = new System.Drawing.Size(164, 40);
            this.button_Boritokep.TabIndex = 21;
            this.button_Boritokep.Text = "Borítókép választás";
            this.button_Boritokep.UseVisualStyleBackColor = true;
            this.button_Boritokep.Click += new System.EventHandler(this.button_Boritokep_Click);
            // 
            // numericUpDown_KiadasEve
            // 
            this.numericUpDown_KiadasEve.Location = new System.Drawing.Point(221, 216);
            this.numericUpDown_KiadasEve.Maximum = new decimal(new int[] {
            1900,
            0,
            0,
            0});
            this.numericUpDown_KiadasEve.Minimum = new decimal(new int[] {
            1900,
            0,
            0,
            0});
            this.numericUpDown_KiadasEve.Name = "numericUpDown_KiadasEve";
            this.numericUpDown_KiadasEve.Size = new System.Drawing.Size(120, 22);
            this.numericUpDown_KiadasEve.TabIndex = 20;
            this.numericUpDown_KiadasEve.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.numericUpDown_KiadasEve.Value = new decimal(new int[] {
            1900,
            0,
            0,
            0});
            // 
            // textBox_Szerzo
            // 
            this.textBox_Szerzo.Location = new System.Drawing.Point(221, 75);
            this.textBox_Szerzo.Name = "textBox_Szerzo";
            this.textBox_Szerzo.Size = new System.Drawing.Size(260, 22);
            this.textBox_Szerzo.TabIndex = 19;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(43, 81);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(48, 16);
            this.label10.TabIndex = 18;
            this.label10.Text = "Szerzo";
            // 
            // textBox_Cim
            // 
            this.textBox_Cim.Location = new System.Drawing.Point(221, 122);
            this.textBox_Cim.Name = "textBox_Cim";
            this.textBox_Cim.Size = new System.Drawing.Size(260, 22);
            this.textBox_Cim.TabIndex = 17;
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(43, 125);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(30, 16);
            this.label9.TabIndex = 16;
            this.label9.Text = "Cím";
            // 
            // textBox_Kiado
            // 
            this.textBox_Kiado.Location = new System.Drawing.Point(221, 168);
            this.textBox_Kiado.Name = "textBox_Kiado";
            this.textBox_Kiado.Size = new System.Drawing.Size(257, 22);
            this.textBox_Kiado.TabIndex = 15;
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(43, 171);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(42, 16);
            this.label8.TabIndex = 14;
            this.label8.Text = "Kiadó";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(43, 222);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(75, 16);
            this.label7.TabIndex = 12;
            this.label7.Text = "Kiadás éve";
            // 
            // textBox_ISBN
            // 
            this.textBox_ISBN.Location = new System.Drawing.Point(221, 264);
            this.textBox_ISBN.Name = "textBox_ISBN";
            this.textBox_ISBN.Size = new System.Drawing.Size(257, 22);
            this.textBox_ISBN.TabIndex = 11;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(43, 270);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(38, 16);
            this.label6.TabIndex = 10;
            this.label6.Text = "ISBN";
            // 
            // textBox_Leiras
            // 
            this.textBox_Leiras.Location = new System.Drawing.Point(221, 311);
            this.textBox_Leiras.Name = "textBox_Leiras";
            this.textBox_Leiras.Size = new System.Drawing.Size(257, 22);
            this.textBox_Leiras.TabIndex = 9;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(43, 311);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(44, 16);
            this.label5.TabIndex = 8;
            this.label5.Text = "Leírás";
            // 
            // textBox_Boritokep
            // 
            this.textBox_Boritokep.Location = new System.Drawing.Point(233, 411);
            this.textBox_Boritokep.Name = "textBox_Boritokep";
            this.textBox_Boritokep.ReadOnly = true;
            this.textBox_Boritokep.Size = new System.Drawing.Size(257, 22);
            this.textBox_Boritokep.TabIndex = 7;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(43, 355);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(67, 16);
            this.label3.TabIndex = 4;
            this.label3.Text = "Könyv ára";
            // 
            // textBox_Id
            // 
            this.textBox_Id.Location = new System.Drawing.Point(221, 37);
            this.textBox_Id.Name = "textBox_Id";
            this.textBox_Id.ReadOnly = true;
            this.textBox_Id.Size = new System.Drawing.Size(100, 22);
            this.textBox_Id.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(43, 43);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(18, 16);
            this.label1.TabIndex = 0;
            this.label1.Text = "id";
            // 
            // FormMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1320, 634);
            this.Controls.Add(this.groupBox_Uj_konyv);
            this.Controls.Add(this.listBox_Konyvek);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "FormMain";
            this.Text = "Konyvek";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox_Uj_konyv.ResumeLayout(false);
            this.groupBox_Uj_konyv.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBoxBorito)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown_Ar)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown_KiadasEve)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox listBox_Konyvek;
        private System.Windows.Forms.GroupBox groupBox_Uj_konyv;
        private System.Windows.Forms.TextBox textBox_Szerzo;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.TextBox textBox_Cim;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.TextBox textBox_Kiado;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.TextBox textBox_ISBN;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox textBox_Leiras;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox textBox_Boritokep;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox textBox_Id;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.NumericUpDown numericUpDown_KiadasEve;
        private System.Windows.Forms.NumericUpDown numericUpDown_Ar;
        private System.Windows.Forms.Button button_Boritokep;
        private System.Windows.Forms.CheckBox checkBox_Keszleten;
        private System.Windows.Forms.Button button_Save;
        private System.Windows.Forms.PictureBox pictureBoxBorito;
    }
}

