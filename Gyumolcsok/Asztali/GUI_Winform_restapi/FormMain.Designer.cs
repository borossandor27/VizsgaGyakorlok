namespace WindowsFormsApp1
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
            this.dataGridView_erkezesek = new System.Windows.Forms.DataGridView();
            this.panel1 = new System.Windows.Forms.Panel();
            this.button_save = new System.Windows.Forms.Button();
            this.listBox_gyumolcsok = new System.Windows.Forms.ListBox();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_erkezesek)).BeginInit();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // dataGridView_erkezesek
            // 
            this.dataGridView_erkezesek.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView_erkezesek.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dataGridView_erkezesek.Location = new System.Drawing.Point(0, 0);
            this.dataGridView_erkezesek.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.dataGridView_erkezesek.Name = "dataGridView_erkezesek";
            this.dataGridView_erkezesek.RowHeadersWidth = 62;
            this.dataGridView_erkezesek.RowTemplate.Height = 28;
            this.dataGridView_erkezesek.Size = new System.Drawing.Size(711, 360);
            this.dataGridView_erkezesek.TabIndex = 0;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.button_save);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.panel1.Location = new System.Drawing.Point(0, 224);
            this.panel1.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(711, 136);
            this.panel1.TabIndex = 1;
            // 
            // button_save
            // 
            this.button_save.Location = new System.Drawing.Point(231, 31);
            this.button_save.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.button_save.Name = "button_save";
            this.button_save.Size = new System.Drawing.Size(140, 42);
            this.button_save.TabIndex = 0;
            this.button_save.Text = "Mentes";
            this.button_save.UseVisualStyleBackColor = true;
            // 
            // listBox_gyumolcsok
            // 
            this.listBox_gyumolcsok.Dock = System.Windows.Forms.DockStyle.Left;
            this.listBox_gyumolcsok.FormattingEnabled = true;
            this.listBox_gyumolcsok.ItemHeight = 16;
            this.listBox_gyumolcsok.Location = new System.Drawing.Point(0, 0);
            this.listBox_gyumolcsok.Name = "listBox_gyumolcsok";
            this.listBox_gyumolcsok.Size = new System.Drawing.Size(120, 224);
            this.listBox_gyumolcsok.TabIndex = 2;
            // 
            // FormMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(711, 360);
            this.Controls.Add(this.listBox_gyumolcsok);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.dataGridView_erkezesek);
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "FormMain";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.FormMain_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_erkezesek)).EndInit();
            this.panel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView_erkezesek;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button button_save;
        private System.Windows.Forms.ListBox listBox_gyumolcsok;
    }
}

