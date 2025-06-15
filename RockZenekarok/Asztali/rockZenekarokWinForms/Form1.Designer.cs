namespace rockZenekarokWinForms
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
            this.panel1 = new System.Windows.Forms.Panel();
            this.label_AktivEvek = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.button_LoadData = new System.Windows.Forms.Button();
            this.listBox_Zenekarok = new System.Windows.Forms.ListBox();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox_ZenekarKepe = new System.Windows.Forms.PictureBox();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_ZenekarKepe)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.Transparent;
            this.panel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.panel1.Controls.Add(this.label_AktivEvek);
            this.panel1.Controls.Add(this.label2);
            this.panel1.Controls.Add(this.button_LoadData);
            this.panel1.Controls.Add(this.listBox_Zenekarok);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(372, 556);
            this.panel1.TabIndex = 0;
            // 
            // label_AktivEvek
            // 
            this.label_AktivEvek.AutoSize = true;
            this.label_AktivEvek.Font = new System.Drawing.Font("Microsoft Sans Serif", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.label_AktivEvek.ForeColor = System.Drawing.Color.White;
            this.label_AktivEvek.Location = new System.Drawing.Point(137, 371);
            this.label_AktivEvek.Name = "label_AktivEvek";
            this.label_AktivEvek.Size = new System.Drawing.Size(39, 29);
            this.label_AktivEvek.TabIndex = 4;
            this.label_AktivEvek.Text = "23";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(22, 302);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(201, 29);
            this.label2.TabIndex = 3;
            this.label2.Text = "Aktív évek száma:";
            // 
            // button_LoadData
            // 
            this.button_LoadData.Location = new System.Drawing.Point(31, 240);
            this.button_LoadData.Name = "button_LoadData";
            this.button_LoadData.Size = new System.Drawing.Size(177, 44);
            this.button_LoadData.TabIndex = 2;
            this.button_LoadData.Text = "Adatok betöltése";
            this.button_LoadData.UseVisualStyleBackColor = true;
            this.button_LoadData.Click += new System.EventHandler(this.button_LoadData_Click);
            // 
            // listBox_Zenekarok
            // 
            this.listBox_Zenekarok.FormattingEnabled = true;
            this.listBox_Zenekarok.ItemHeight = 16;
            this.listBox_Zenekarok.Location = new System.Drawing.Point(27, 77);
            this.listBox_Zenekarok.Name = "listBox_Zenekarok";
            this.listBox_Zenekarok.Size = new System.Drawing.Size(315, 132);
            this.listBox_Zenekarok.TabIndex = 1;
            this.listBox_Zenekarok.SelectedIndexChanged += new System.EventHandler(this.listBox_Zenekarok_SelectedIndexChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(12, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(256, 29);
            this.label1.TabIndex = 0;
            this.label1.Text = "Rockzenekarok adatai:";
            // 
            // pictureBox_ZenekarKepe
            // 
            this.pictureBox_ZenekarKepe.BackColor = System.Drawing.Color.Transparent;
            this.pictureBox_ZenekarKepe.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pictureBox_ZenekarKepe.Location = new System.Drawing.Point(372, 0);
            this.pictureBox_ZenekarKepe.Name = "pictureBox_ZenekarKepe";
            this.pictureBox_ZenekarKepe.Size = new System.Drawing.Size(780, 556);
            this.pictureBox_ZenekarKepe.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox_ZenekarKepe.TabIndex = 1;
            this.pictureBox_ZenekarKepe.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = global::rockZenekarokWinForms.Properties.Resources.koncert;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(1152, 556);
            this.Controls.Add(this.pictureBox_ZenekarKepe);
            this.Controls.Add(this.panel1);
            this.Name = "Form1";
            this.Text = "Rockzenekarok a 70-es évekből";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_ZenekarKepe)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.PictureBox pictureBox_ZenekarKepe;
        private System.Windows.Forms.Button button_LoadData;
        private System.Windows.Forms.ListBox listBox_Zenekarok;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label_AktivEvek;
        private System.Windows.Forms.Label label2;
    }
}

