namespace NagyGyogynovenekGUI
{
    partial class Form
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
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.panel_bal = new System.Windows.Forms.Panel();
            this.dataGridView_gyogynovenyek = new System.Windows.Forms.DataGridView();
            this.button_adatok_betoltese = new System.Windows.Forms.Button();
            this.panel_jobb = new System.Windows.Forms.Panel();
            this.panel_keptarto = new System.Windows.Forms.Panel();
            this.pictureBox_lelohely = new System.Windows.Forms.PictureBox();
            this.label_lelohely = new System.Windows.Forms.Label();
            this.tableLayoutPanel1.SuspendLayout();
            this.panel_bal.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_gyogynovenyek)).BeginInit();
            this.panel_jobb.SuspendLayout();
            this.panel_keptarto.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_lelohely)).BeginInit();
            this.SuspendLayout();
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 600F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle());
            this.tableLayoutPanel1.Controls.Add(this.panel_bal, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.panel_jobb, 1, 0);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 1;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(934, 450);
            this.tableLayoutPanel1.TabIndex = 0;
            // 
            // panel_bal
            // 
            this.panel_bal.Controls.Add(this.dataGridView_gyogynovenyek);
            this.panel_bal.Controls.Add(this.button_adatok_betoltese);
            this.panel_bal.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel_bal.Location = new System.Drawing.Point(3, 3);
            this.panel_bal.Name = "panel_bal";
            this.panel_bal.Size = new System.Drawing.Size(594, 444);
            this.panel_bal.TabIndex = 0;
            // 
            // dataGridView_gyogynovenyek
            // 
            this.dataGridView_gyogynovenyek.AllowUserToAddRows = false;
            this.dataGridView_gyogynovenyek.AllowUserToDeleteRows = false;
            this.dataGridView_gyogynovenyek.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView_gyogynovenyek.Dock = System.Windows.Forms.DockStyle.Fill;
            this.dataGridView_gyogynovenyek.Location = new System.Drawing.Point(0, 53);
            this.dataGridView_gyogynovenyek.Name = "dataGridView_gyogynovenyek";
            this.dataGridView_gyogynovenyek.ReadOnly = true;
            this.dataGridView_gyogynovenyek.RowHeadersWidth = 51;
            this.dataGridView_gyogynovenyek.RowTemplate.Height = 24;
            this.dataGridView_gyogynovenyek.Size = new System.Drawing.Size(594, 391);
            this.dataGridView_gyogynovenyek.TabIndex = 2;
            this.dataGridView_gyogynovenyek.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView_gyogynovenyek_CellClick);
            // 
            // button_adatok_betoltese
            // 
            this.button_adatok_betoltese.Dock = System.Windows.Forms.DockStyle.Top;
            this.button_adatok_betoltese.Location = new System.Drawing.Point(0, 0);
            this.button_adatok_betoltese.Name = "button_adatok_betoltese";
            this.button_adatok_betoltese.Size = new System.Drawing.Size(594, 53);
            this.button_adatok_betoltese.TabIndex = 1;
            this.button_adatok_betoltese.Text = "Adatok betöltése";
            this.button_adatok_betoltese.UseVisualStyleBackColor = true;
            this.button_adatok_betoltese.Click += new System.EventHandler(this.button_adatok_betoltese_Click);
            // 
            // panel_jobb
            // 
            this.panel_jobb.Controls.Add(this.panel_keptarto);
            this.panel_jobb.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel_jobb.Location = new System.Drawing.Point(603, 3);
            this.panel_jobb.Name = "panel_jobb";
            this.panel_jobb.Size = new System.Drawing.Size(328, 444);
            this.panel_jobb.TabIndex = 1;
            // 
            // panel_keptarto
            // 
            this.panel_keptarto.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.panel_keptarto.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.panel_keptarto.Controls.Add(this.pictureBox_lelohely);
            this.panel_keptarto.Controls.Add(this.label_lelohely);
            this.panel_keptarto.Location = new System.Drawing.Point(42, 116);
            this.panel_keptarto.Name = "panel_keptarto";
            this.panel_keptarto.Size = new System.Drawing.Size(262, 241);
            this.panel_keptarto.TabIndex = 0;
            // 
            // pictureBox_lelohely
            // 
            this.pictureBox_lelohely.Dock = System.Windows.Forms.DockStyle.Fill;
            this.pictureBox_lelohely.Location = new System.Drawing.Point(0, 52);
            this.pictureBox_lelohely.Name = "pictureBox_lelohely";
            this.pictureBox_lelohely.Size = new System.Drawing.Size(262, 189);
            this.pictureBox_lelohely.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox_lelohely.TabIndex = 1;
            this.pictureBox_lelohely.TabStop = false;
            // 
            // label_lelohely
            // 
            this.label_lelohely.AutoSize = true;
            this.label_lelohely.Dock = System.Windows.Forms.DockStyle.Top;
            this.label_lelohely.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(238)));
            this.label_lelohely.ForeColor = System.Drawing.Color.White;
            this.label_lelohely.Location = new System.Drawing.Point(0, 0);
            this.label_lelohely.Margin = new System.Windows.Forms.Padding(20);
            this.label_lelohely.Name = "label_lelohely";
            this.label_lelohely.Padding = new System.Windows.Forms.Padding(10);
            this.label_lelohely.Size = new System.Drawing.Size(20, 52);
            this.label_lelohely.TabIndex = 0;
            this.label_lelohely.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Form
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = global::NagyGyogynovenekGUI.Properties.Resources.banner_szurke;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(934, 450);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Name = "Form";
            this.Text = "Gyógynövények";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.panel_bal.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView_gyogynovenyek)).EndInit();
            this.panel_jobb.ResumeLayout(false);
            this.panel_keptarto.ResumeLayout(false);
            this.panel_keptarto.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox_lelohely)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Panel panel_bal;
        private System.Windows.Forms.DataGridView dataGridView_gyogynovenyek;
        private System.Windows.Forms.Button button_adatok_betoltese;
        private System.Windows.Forms.Panel panel_jobb;
        private System.Windows.Forms.Panel panel_keptarto;
        private System.Windows.Forms.PictureBox pictureBox_lelohely;
        private System.Windows.Forms.Label label_lelohely;
    }
}

