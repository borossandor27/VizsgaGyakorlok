namespace Fuggohidak
{
    partial class FormKereses
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
            this.listBox_keresettHidak = new System.Windows.Forms.ListBox();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.label1 = new System.Windows.Forms.Label();
            this.comboBox_orszag = new System.Windows.Forms.ComboBox();
            this.checkBox_kilometeres = new System.Windows.Forms.CheckBox();
            this.button_kereses = new System.Windows.Forms.Button();
            this.button_close = new System.Windows.Forms.Button();
            this.tableLayoutPanel1.SuspendLayout();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 1;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Controls.Add(this.listBox_keresettHidak, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.groupBox1, 0, 1);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 2;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 50F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(577, 450);
            this.tableLayoutPanel1.TabIndex = 0;
            // 
            // listBox_keresettHidak
            // 
            this.listBox_keresettHidak.Dock = System.Windows.Forms.DockStyle.Fill;
            this.listBox_keresettHidak.FormattingEnabled = true;
            this.listBox_keresettHidak.ItemHeight = 16;
            this.listBox_keresettHidak.Location = new System.Drawing.Point(30, 30);
            this.listBox_keresettHidak.Margin = new System.Windows.Forms.Padding(30);
            this.listBox_keresettHidak.Name = "listBox_keresettHidak";
            this.listBox_keresettHidak.Size = new System.Drawing.Size(517, 165);
            this.listBox_keresettHidak.TabIndex = 0;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.button_close);
            this.groupBox1.Controls.Add(this.button_kereses);
            this.groupBox1.Controls.Add(this.checkBox_kilometeres);
            this.groupBox1.Controls.Add(this.comboBox_orszag);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.groupBox1.Location = new System.Drawing.Point(30, 255);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(30);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(15);
            this.groupBox1.Size = new System.Drawing.Size(517, 165);
            this.groupBox1.TabIndex = 1;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Keresés";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(45, 35);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(50, 16);
            this.label1.TabIndex = 0;
            this.label1.Text = "Ország";
            // 
            // comboBox_orszag
            // 
            this.comboBox_orszag.FormattingEnabled = true;
            this.comboBox_orszag.Location = new System.Drawing.Point(101, 32);
            this.comboBox_orszag.Name = "comboBox_orszag";
            this.comboBox_orszag.Size = new System.Drawing.Size(185, 24);
            this.comboBox_orszag.TabIndex = 1;
            this.comboBox_orszag.SelectedIndexChanged += new System.EventHandler(this.comboBox_orszag_SelectedIndexChanged);
            // 
            // checkBox_kilometeres
            // 
            this.checkBox_kilometeres.AutoSize = true;
            this.checkBox_kilometeres.Location = new System.Drawing.Point(48, 83);
            this.checkBox_kilometeres.Name = "checkBox_kilometeres";
            this.checkBox_kilometeres.Size = new System.Drawing.Size(156, 20);
            this.checkBox_kilometeres.TabIndex = 2;
            this.checkBox_kilometeres.Text = "1 km-nél hosszabbak";
            this.checkBox_kilometeres.UseVisualStyleBackColor = true;
            // 
            // button_kereses
            // 
            this.button_kereses.Location = new System.Drawing.Point(71, 116);
            this.button_kereses.Name = "button_kereses";
            this.button_kereses.Padding = new System.Windows.Forms.Padding(10);
            this.button_kereses.Size = new System.Drawing.Size(121, 43);
            this.button_kereses.TabIndex = 3;
            this.button_kereses.Text = "Keresés";
            this.button_kereses.UseVisualStyleBackColor = true;
            // 
            // button_close
            // 
            this.button_close.Location = new System.Drawing.Point(272, 116);
            this.button_close.Name = "button_close";
            this.button_close.Padding = new System.Windows.Forms.Padding(10);
            this.button_close.Size = new System.Drawing.Size(121, 43);
            this.button_close.TabIndex = 3;
            this.button_close.TabStop = false;
            this.button_close.Text = "Bezárás";
            this.button_close.UseVisualStyleBackColor = true;
            this.button_close.Click += new System.EventHandler(this.button_close_Click);
            // 
            // FormKereses
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(577, 450);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Name = "FormKereses";
            this.Text = "FormKereses";
            this.Load += new System.EventHandler(this.FormKereses_Load);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.ListBox listBox_keresettHidak;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button button_close;
        private System.Windows.Forms.Button button_kereses;
        private System.Windows.Forms.CheckBox checkBox_kilometeres;
        private System.Windows.Forms.ComboBox comboBox_orszag;
        private System.Windows.Forms.Label label1;
    }
}