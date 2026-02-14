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
            this.dataGridView_gyumolcsok = new System.Windows.Forms.DataGridView();
            this.panel1 = new System.Windows.Forms.Panel();
            this.button_save = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_gyumolcsok)).BeginInit();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // dataGridView_gyumolcsok
            // 
            this.dataGridView_gyumolcsok.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView_gyumolcsok.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dataGridView_gyumolcsok.Location = new System.Drawing.Point(0, 0);
            this.dataGridView_gyumolcsok.Name = "dataGridView_gyumolcsok";
            this.dataGridView_gyumolcsok.RowHeadersWidth = 62;
            this.dataGridView_gyumolcsok.RowTemplate.Height = 28;
            this.dataGridView_gyumolcsok.Size = new System.Drawing.Size(800, 450);
            this.dataGridView_gyumolcsok.TabIndex = 0;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.button_save);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.panel1.Location = new System.Drawing.Point(0, 280);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(800, 170);
            this.panel1.TabIndex = 1;
            // 
            // button_save
            // 
            this.button_save.Location = new System.Drawing.Point(260, 39);
            this.button_save.Name = "button_save";
            this.button_save.Size = new System.Drawing.Size(158, 52);
            this.button_save.TabIndex = 0;
            this.button_save.Text = "Mentes";
            this.button_save.UseVisualStyleBackColor = true;
            // 
            // FormMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.dataGridView_gyumolcsok);
            this.Name = "FormMain";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.FormMain_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_gyumolcsok)).EndInit();
            this.panel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView_gyumolcsok;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Button button_save;
    }
}

