namespace GUI_WinFormsListbox
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
            this.listBox_gyumolcsok = new System.Windows.Forms.ListBox();
            this.panel_buttons = new System.Windows.Forms.Panel();
            this.button_delete = new System.Windows.Forms.Button();
            this.button_update = new System.Windows.Forms.Button();
            this.button_insert = new System.Windows.Forms.Button();
            this.dataGridView_erkezesek = new System.Windows.Forms.DataGridView();
            this.panel_buttons.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_erkezesek)).BeginInit();
            this.SuspendLayout();
            // 
            // listBox_gyumolcsok
            // 
            this.listBox_gyumolcsok.Dock = System.Windows.Forms.DockStyle.Left;
            this.listBox_gyumolcsok.FormattingEnabled = true;
            this.listBox_gyumolcsok.ItemHeight = 16;
            this.listBox_gyumolcsok.Location = new System.Drawing.Point(0, 0);
            this.listBox_gyumolcsok.Name = "listBox_gyumolcsok";
            this.listBox_gyumolcsok.Size = new System.Drawing.Size(221, 450);
            this.listBox_gyumolcsok.TabIndex = 0;
            this.listBox_gyumolcsok.SelectedIndexChanged += new System.EventHandler(this.listBox_gyumolcsok_SelectedIndexChanged);
            // 
            // panel_buttons
            // 
            this.panel_buttons.Controls.Add(this.button_delete);
            this.panel_buttons.Controls.Add(this.button_update);
            this.panel_buttons.Controls.Add(this.button_insert);
            this.panel_buttons.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.panel_buttons.Location = new System.Drawing.Point(221, 350);
            this.panel_buttons.Name = "panel_buttons";
            this.panel_buttons.Size = new System.Drawing.Size(862, 100);
            this.panel_buttons.TabIndex = 1;
            // 
            // button_delete
            // 
            this.button_delete.Location = new System.Drawing.Point(636, 22);
            this.button_delete.Name = "button_delete";
            this.button_delete.Size = new System.Drawing.Size(120, 54);
            this.button_delete.TabIndex = 0;
            this.button_delete.Text = "Törlés";
            this.button_delete.UseVisualStyleBackColor = true;
            // 
            // button_update
            // 
            this.button_update.Location = new System.Drawing.Point(353, 22);
            this.button_update.Name = "button_update";
            this.button_update.Size = new System.Drawing.Size(120, 54);
            this.button_update.TabIndex = 0;
            this.button_update.Text = "Módosítás";
            this.button_update.UseVisualStyleBackColor = true;
            // 
            // button_insert
            // 
            this.button_insert.Location = new System.Drawing.Point(70, 22);
            this.button_insert.Name = "button_insert";
            this.button_insert.Size = new System.Drawing.Size(120, 54);
            this.button_insert.TabIndex = 0;
            this.button_insert.Text = "Új";
            this.button_insert.UseVisualStyleBackColor = true;
            // 
            // dataGridView_erkezesek
            // 
            this.dataGridView_erkezesek.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView_erkezesek.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dataGridView_erkezesek.Location = new System.Drawing.Point(221, 0);
            this.dataGridView_erkezesek.Name = "dataGridView_erkezesek";
            this.dataGridView_erkezesek.RowHeadersWidth = 51;
            this.dataGridView_erkezesek.RowTemplate.Height = 24;
            this.dataGridView_erkezesek.Size = new System.Drawing.Size(862, 350);
            this.dataGridView_erkezesek.TabIndex = 2;
            // 
            // FormMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1083, 450);
            this.Controls.Add(this.dataGridView_erkezesek);
            this.Controls.Add(this.panel_buttons);
            this.Controls.Add(this.listBox_gyumolcsok);
            this.Name = "FormMain";
            this.Text = "Gyűmölcs bevételezés";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panel_buttons.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_erkezesek)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox listBox_gyumolcsok;
        private System.Windows.Forms.Panel panel_buttons;
        private System.Windows.Forms.Button button_delete;
        private System.Windows.Forms.Button button_update;
        private System.Windows.Forms.Button button_insert;
        private System.Windows.Forms.DataGridView dataGridView_erkezesek;
    }
}

