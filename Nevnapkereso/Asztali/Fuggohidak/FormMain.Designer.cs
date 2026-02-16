namespace Fuggohidak
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
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.fájlToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.megnyitásToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.keresésToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.kilépésToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.listBox_hidak = new System.Windows.Forms.ListBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.textBox_Ev = new System.Windows.Forms.TextBox();
            this.textBox_Hossz = new System.Windows.Forms.TextBox();
            this.textBox_Orszag = new System.Windows.Forms.TextBox();
            this.textBox_Hely = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.radioButton_2000utan = new System.Windows.Forms.RadioButton();
            this.radioButton_2000elott = new System.Windows.Forms.RadioButton();
            this.panel2 = new System.Windows.Forms.Panel();
            this.button_exit = new System.Windows.Forms.Button();
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.textBox_hidakSzama = new System.Windows.Forms.TextBox();
            this.menuStrip1.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.panel1.SuspendLayout();
            this.groupBox1.SuspendLayout();
            this.panel2.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fájlToolStripMenuItem,
            this.keresésToolStripMenuItem,
            this.kilépésToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(800, 28);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // fájlToolStripMenuItem
            // 
            this.fájlToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.megnyitásToolStripMenuItem});
            this.fájlToolStripMenuItem.Name = "fájlToolStripMenuItem";
            this.fájlToolStripMenuItem.Size = new System.Drawing.Size(45, 24);
            this.fájlToolStripMenuItem.Text = "Fájl";
            // 
            // megnyitásToolStripMenuItem
            // 
            this.megnyitásToolStripMenuItem.Name = "megnyitásToolStripMenuItem";
            this.megnyitásToolStripMenuItem.Size = new System.Drawing.Size(160, 26);
            this.megnyitásToolStripMenuItem.Text = "Megnyitás";
            this.megnyitásToolStripMenuItem.Click += new System.EventHandler(this.megnyitásToolStripMenuItem_Click);
            // 
            // keresésToolStripMenuItem
            // 
            this.keresésToolStripMenuItem.Name = "keresésToolStripMenuItem";
            this.keresésToolStripMenuItem.Size = new System.Drawing.Size(73, 24);
            this.keresésToolStripMenuItem.Text = "Keresés";
            this.keresésToolStripMenuItem.Click += new System.EventHandler(this.keresésToolStripMenuItem_Click);
            // 
            // kilépésToolStripMenuItem
            // 
            this.kilépésToolStripMenuItem.Name = "kilépésToolStripMenuItem";
            this.kilépésToolStripMenuItem.Size = new System.Drawing.Size(71, 24);
            this.kilépésToolStripMenuItem.Text = "Kilépés";
            this.kilépésToolStripMenuItem.Click += new System.EventHandler(this.kilépésToolStripMenuItem_Click);
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Controls.Add(this.listBox_hidak, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.panel1, 1, 0);
            this.tableLayoutPanel1.Controls.Add(this.groupBox1, 0, 1);
            this.tableLayoutPanel1.Controls.Add(this.panel2, 1, 1);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 28);
            this.tableLayoutPanel1.Margin = new System.Windows.Forms.Padding(10);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 2;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(800, 501);
            this.tableLayoutPanel1.TabIndex = 1;
            this.tableLayoutPanel1.Click += new System.EventHandler(this.kilépésToolStripMenuItem_Click);
            // 
            // listBox_hidak
            // 
            this.listBox_hidak.Dock = System.Windows.Forms.DockStyle.Fill;
            this.listBox_hidak.ForeColor = System.Drawing.Color.Green;
            this.listBox_hidak.FormattingEnabled = true;
            this.listBox_hidak.ItemHeight = 16;
            this.listBox_hidak.Location = new System.Drawing.Point(30, 30);
            this.listBox_hidak.Margin = new System.Windows.Forms.Padding(30);
            this.listBox_hidak.Name = "listBox_hidak";
            this.listBox_hidak.Size = new System.Drawing.Size(340, 190);
            this.listBox_hidak.TabIndex = 0;
            this.listBox_hidak.SelectedIndexChanged += new System.EventHandler(this.listBox_hidak_SelectedIndexChanged);
            // 
            // panel1
            // 
            this.panel1.AutoSize = true;
            this.panel1.Controls.Add(this.textBox_Ev);
            this.panel1.Controls.Add(this.textBox_Hossz);
            this.panel1.Controls.Add(this.textBox_Orszag);
            this.panel1.Controls.Add(this.textBox_Hely);
            this.panel1.Controls.Add(this.label4);
            this.panel1.Controls.Add(this.label3);
            this.panel1.Controls.Add(this.label2);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(420, 20);
            this.panel1.Margin = new System.Windows.Forms.Padding(20);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(360, 210);
            this.panel1.TabIndex = 1;
            // 
            // textBox_Ev
            // 
            this.textBox_Ev.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.textBox_Ev.Location = new System.Drawing.Point(71, 166);
            this.textBox_Ev.Name = "textBox_Ev";
            this.textBox_Ev.Size = new System.Drawing.Size(89, 22);
            this.textBox_Ev.TabIndex = 1;
            // 
            // textBox_Hossz
            // 
            this.textBox_Hossz.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.textBox_Hossz.Location = new System.Drawing.Point(71, 129);
            this.textBox_Hossz.Name = "textBox_Hossz";
            this.textBox_Hossz.Size = new System.Drawing.Size(89, 22);
            this.textBox_Hossz.TabIndex = 1;
            // 
            // textBox_Orszag
            // 
            this.textBox_Orszag.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.textBox_Orszag.Location = new System.Drawing.Point(71, 80);
            this.textBox_Orszag.Name = "textBox_Orszag";
            this.textBox_Orszag.Size = new System.Drawing.Size(266, 22);
            this.textBox_Orszag.TabIndex = 1;
            // 
            // textBox_Hely
            // 
            this.textBox_Hely.ForeColor = System.Drawing.SystemColors.HotTrack;
            this.textBox_Hely.Location = new System.Drawing.Point(74, 37);
            this.textBox_Hely.Name = "textBox_Hely";
            this.textBox_Hely.Size = new System.Drawing.Size(266, 22);
            this.textBox_Hely.TabIndex = 1;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.ForeColor = System.Drawing.SystemColors.ControlDark;
            this.label4.Location = new System.Drawing.Point(3, 172);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(23, 16);
            this.label4.TabIndex = 0;
            this.label4.Text = "Év";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.ForeColor = System.Drawing.SystemColors.ControlDark;
            this.label3.Location = new System.Drawing.Point(3, 129);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(45, 16);
            this.label3.TabIndex = 0;
            this.label3.Text = "Hossz";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.ForeColor = System.Drawing.SystemColors.ControlDark;
            this.label2.Location = new System.Drawing.Point(3, 86);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(50, 16);
            this.label2.TabIndex = 0;
            this.label2.Text = "Ország";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.ForeColor = System.Drawing.SystemColors.ControlDark;
            this.label1.Location = new System.Drawing.Point(3, 43);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(35, 16);
            this.label1.TabIndex = 0;
            this.label1.Text = "Hely";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.textBox_hidakSzama);
            this.groupBox1.Controls.Add(this.radioButton_2000utan);
            this.groupBox1.Controls.Add(this.radioButton_2000elott);
            this.groupBox1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.groupBox1.Location = new System.Drawing.Point(30, 280);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(30);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(340, 191);
            this.groupBox1.TabIndex = 2;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Hidak száma";
            // 
            // radioButton_2000utan
            // 
            this.radioButton_2000utan.AutoSize = true;
            this.radioButton_2000utan.Location = new System.Drawing.Point(26, 72);
            this.radioButton_2000utan.Name = "radioButton_2000utan";
            this.radioButton_2000utan.Size = new System.Drawing.Size(152, 20);
            this.radioButton_2000utan.TabIndex = 0;
            this.radioButton_2000utan.TabStop = true;
            this.radioButton_2000utan.Text = "2000-ben vagy utána";
            this.radioButton_2000utan.UseVisualStyleBackColor = true;
            this.radioButton_2000utan.CheckedChanged += new System.EventHandler(this.radioButton_2000utan_CheckedChanged);
            // 
            // radioButton_2000elott
            // 
            this.radioButton_2000elott.AutoSize = true;
            this.radioButton_2000elott.Location = new System.Drawing.Point(26, 41);
            this.radioButton_2000elott.Name = "radioButton_2000elott";
            this.radioButton_2000elott.Size = new System.Drawing.Size(116, 20);
            this.radioButton_2000elott.TabIndex = 0;
            this.radioButton_2000elott.TabStop = true;
            this.radioButton_2000elott.Text = "2000 előtt épült";
            this.radioButton_2000elott.UseVisualStyleBackColor = true;
            this.radioButton_2000elott.CheckedChanged += new System.EventHandler(this.radioButton_2000elott_CheckedChanged);
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.button_exit);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(480, 330);
            this.panel2.Margin = new System.Windows.Forms.Padding(80);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(240, 91);
            this.panel2.TabIndex = 3;
            // 
            // button_exit
            // 
            this.button_exit.Location = new System.Drawing.Point(59, 22);
            this.button_exit.Name = "button_exit";
            this.button_exit.Padding = new System.Windows.Forms.Padding(10);
            this.button_exit.Size = new System.Drawing.Size(126, 51);
            this.button_exit.TabIndex = 0;
            this.button_exit.Text = "Kilépés";
            this.button_exit.UseVisualStyleBackColor = true;
            this.button_exit.Click += new System.EventHandler(this.kilépésToolStripMenuItem_Click);
            // 
            // openFileDialog1
            // 
            this.openFileDialog1.FileName = "openFileDialog1";
            // 
            // textBox_hidakSzama
            // 
            this.textBox_hidakSzama.Location = new System.Drawing.Point(26, 118);
            this.textBox_hidakSzama.Name = "textBox_hidakSzama";
            this.textBox_hidakSzama.Size = new System.Drawing.Size(100, 22);
            this.textBox_hidakSzama.TabIndex = 1;
            // 
            // FormMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 529);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "FormMain";
            this.Text = "Függőhidak";
            this.Load += new System.EventHandler(this.FormMain_Load);
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.tableLayoutPanel1.ResumeLayout(false);
            this.tableLayoutPanel1.PerformLayout();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.panel2.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem keresésToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem kilépésToolStripMenuItem;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.ListBox listBox_hidak;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.TextBox textBox_Ev;
        private System.Windows.Forms.TextBox textBox_Hossz;
        private System.Windows.Forms.TextBox textBox_Orszag;
        private System.Windows.Forms.TextBox textBox_Hely;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button_exit;
        private System.Windows.Forms.ToolStripMenuItem fájlToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem megnyitásToolStripMenuItem;
        private System.Windows.Forms.OpenFileDialog openFileDialog1;
        private System.Windows.Forms.RadioButton radioButton_2000utan;
        private System.Windows.Forms.RadioButton radioButton_2000elott;
        private System.Windows.Forms.TextBox textBox_hidakSzama;
    }
}

