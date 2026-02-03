namespace UserRegisterGUI
{
    partial class Form_Main
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
            this.panel_urlap = new System.Windows.Forms.Panel();
            this.dataGridView_Felhasznalok = new System.Windows.Forms.DataGridView();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_Felhasznalok)).BeginInit();
            this.SuspendLayout();
            // 
            // panel_urlap
            // 
            this.panel_urlap.Dock = System.Windows.Forms.DockStyle.Top;
            this.panel_urlap.Location = new System.Drawing.Point(0, 0);
            this.panel_urlap.Name = "panel_urlap";
            this.panel_urlap.Size = new System.Drawing.Size(800, 171);
            this.panel_urlap.TabIndex = 0;
            // 
            // dataGridView_Felhasznalok
            // 
            this.dataGridView_Felhasznalok.AllowUserToAddRows = false;
            this.dataGridView_Felhasznalok.AllowUserToDeleteRows = false;
            this.dataGridView_Felhasznalok.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.Fill;
            this.dataGridView_Felhasznalok.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView_Felhasznalok.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dataGridView_Felhasznalok.Location = new System.Drawing.Point(0, 171);
            this.dataGridView_Felhasznalok.Name = "dataGridView_Felhasznalok";
            this.dataGridView_Felhasznalok.ReadOnly = true;
            this.dataGridView_Felhasznalok.RowHeadersWidth = 51;
            this.dataGridView_Felhasznalok.RowTemplate.Height = 24;
            this.dataGridView_Felhasznalok.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            this.dataGridView_Felhasznalok.Size = new System.Drawing.Size(800, 279);
            this.dataGridView_Felhasznalok.TabIndex = 1;
            // 
            // Form_Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.dataGridView_Felhasznalok);
            this.Controls.Add(this.panel_urlap);
            this.Name = "Form_Main";
            this.Text = "Felhasználó kezelés";
            this.Load += new System.EventHandler(this.Form_Main_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_Felhasznalok)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel_urlap;
        private System.Windows.Forms.DataGridView dataGridView_Felhasznalok;
    }
}

