namespace RealEstateGUI
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
            this.listBoxEladok = new System.Windows.Forms.ListBox();
            this.panelAdatok = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.buttonSzamol = new System.Windows.Forms.Button();
            this.textBox_EladoNeve = new System.Windows.Forms.TextBox();
            this.textBox_EladoTelefonszama = new System.Windows.Forms.TextBox();
            this.textBox_HirdetesekSzama = new System.Windows.Forms.TextBox();
            this.panelAdatok.SuspendLayout();
            this.SuspendLayout();
            // 
            // listBoxEladok
            // 
            this.listBoxEladok.Dock = System.Windows.Forms.DockStyle.Left;
            this.listBoxEladok.FormattingEnabled = true;
            this.listBoxEladok.ItemHeight = 16;
            this.listBoxEladok.Location = new System.Drawing.Point(0, 0);
            this.listBoxEladok.Name = "listBoxEladok";
            this.listBoxEladok.Size = new System.Drawing.Size(212, 450);
            this.listBoxEladok.TabIndex = 0;
            this.listBoxEladok.SelectedIndexChanged += new System.EventHandler(this.listBoxEladok_SelectedIndexChanged);
            // 
            // panelAdatok
            // 
            this.panelAdatok.Controls.Add(this.textBox_HirdetesekSzama);
            this.panelAdatok.Controls.Add(this.textBox_EladoTelefonszama);
            this.panelAdatok.Controls.Add(this.textBox_EladoNeve);
            this.panelAdatok.Controls.Add(this.buttonSzamol);
            this.panelAdatok.Controls.Add(this.label3);
            this.panelAdatok.Controls.Add(this.label2);
            this.panelAdatok.Controls.Add(this.label1);
            this.panelAdatok.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panelAdatok.Location = new System.Drawing.Point(212, 0);
            this.panelAdatok.Name = "panelAdatok";
            this.panelAdatok.Size = new System.Drawing.Size(464, 450);
            this.panelAdatok.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(22, 20);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(76, 16);
            this.label1.TabIndex = 0;
            this.label1.Text = "Eladó neve";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(22, 57);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(129, 16);
            this.label2.TabIndex = 0;
            this.label2.Text = "Eladó telefonszáma:";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(22, 164);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(116, 16);
            this.label3.TabIndex = 1;
            this.label3.Text = "Hirdetések száma";
            // 
            // buttonSzamol
            // 
            this.buttonSzamol.Location = new System.Drawing.Point(25, 97);
            this.buttonSzamol.Name = "buttonSzamol";
            this.buttonSzamol.Size = new System.Drawing.Size(412, 40);
            this.buttonSzamol.TabIndex = 2;
            this.buttonSzamol.Text = "Hirdetések betöltése";
            this.buttonSzamol.UseVisualStyleBackColor = true;
            this.buttonSzamol.Click += new System.EventHandler(this.buttonSzamol_Click);
            // 
            // textBox_EladoNeve
            // 
            this.textBox_EladoNeve.Location = new System.Drawing.Point(159, 20);
            this.textBox_EladoNeve.Name = "textBox_EladoNeve";
            this.textBox_EladoNeve.Size = new System.Drawing.Size(278, 22);
            this.textBox_EladoNeve.TabIndex = 3;
            // 
            // textBox_EladoTelefonszama
            // 
            this.textBox_EladoTelefonszama.Location = new System.Drawing.Point(159, 57);
            this.textBox_EladoTelefonszama.Name = "textBox_EladoTelefonszama";
            this.textBox_EladoTelefonszama.Size = new System.Drawing.Size(278, 22);
            this.textBox_EladoTelefonszama.TabIndex = 3;
            // 
            // textBox_HirdetesekSzama
            // 
            this.textBox_HirdetesekSzama.Location = new System.Drawing.Point(159, 162);
            this.textBox_HirdetesekSzama.Name = "textBox_HirdetesekSzama";
            this.textBox_HirdetesekSzama.Size = new System.Drawing.Size(278, 22);
            this.textBox_HirdetesekSzama.TabIndex = 3;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(676, 450);
            this.Controls.Add(this.panelAdatok);
            this.Controls.Add(this.listBoxEladok);
            this.Name = "Form1";
            this.Text = "Ingatlanok";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panelAdatok.ResumeLayout(false);
            this.panelAdatok.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox listBoxEladok;
        private System.Windows.Forms.Panel panelAdatok;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button buttonSzamol;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox textBox_EladoTelefonszama;
        private System.Windows.Forms.TextBox textBox_EladoNeve;
        private System.Windows.Forms.TextBox textBox_HirdetesekSzama;
    }
}

