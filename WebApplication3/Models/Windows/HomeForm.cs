using SRWebBase.Models.Controls;
using SRWebBase.Models.Enum;
using System.Drawing;
 

namespace WebApplication3.Models.Windows
{
    public class HomeForm : Form
    {
        private Button button1; 
        private Button button2;
        private const int TextBoxSize = 60;
        private const int TMargin = 5;
        int[] formCoordinates = new int[2] { 20, 20 };
        int[,] ints = new int[9, 9] {
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
            { 0, 0, 0, 0, 0, 0, 0, 0, 0 },
        }; 
        
        private  TextBox[,] textBoxGrid = new  TextBox[9, 9];
        public HomeForm() 
        {
            button1 = new Button();
            button2 = new Button();
            // 
            // button1
            // 
            button1.Location = new int[2]{ 698, 21};
            button1.Name = "button1";
            button1.Size = new int[2] { 131, 40 } ;
            button1.Text = "GO";
            button1.Click += button1_Click ;

            // 
            // button1
            // 
            button2.Location = new int[2] { 698, 81 };
            button2.Name = "button1";
            button2.Size = new int[2] { 131, 40 };
            button2.Text = "Clear";
            button2.Click += button2_Click;
            // 
            // Form1
            // 

            Controls.Add(button1);
            Controls.Add(button2);
            this.Size = new int[2] { 900, 620 };
            Name = "Form1";
            Text = "Form1";
            Load +=  Form1_Load ; Load += Form1_Load;
        }
        private void Form1_Load(object? sender, EventObject e)
        { 
            for (int i = 0; i < 9; i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    // 创建新的TextBox
                    TextBox textBox = new TextBox();
                    textBox.FontName = "Yu Gothic UI";
                    textBox.FontSize = 15F;
                    textBox.Location = new int[2] { 5, 5 };
                    textBox.MaxLength = 1; 
                    textBox.Name = "textBox1";
                    textBox.Size = new int[2] { 60, 60 }; 
                    textBox.TextAlign = HorizontalAlignment.Center.ToString();
                    textBox.TextChanged += textBox_TextChanged;
                    if ((i / 3) == 1 || (j / 3) == 1)
                    {
                        textBox.BackColor = Color.CadetBlue;
                    }
                    // 计算TextBox的位置
                    int x = formCoordinates[0] + (TextBoxSize + TMargin) * j;
                    int y = formCoordinates[1] + (TextBoxSize + TMargin) * i;
                    textBox.Location = new int[2] { x, y };

                    // 将TextBox添加到Form和数组中
                    this.Controls.Add(textBox);
                    textBoxGrid[i, j] = textBox;
                }
            }
            ShowInts();
        }
        private void button1_Click(object? sender, EventObject e)
        {
            bool bl = solve();
            ShowInts();
        }
        private void button2_Click(object? sender, EventObject e)
        {
            if(MessageBox!.Show("初期化しｓてもよろしいですか？", "初期化確認") == DialogResult.OK)
            {
                for (int i = 0; i < 9; i++)
                {
                    for (int j = 0; j < 9; j++)
                    {
                        ints[i, j] = 0;
                    }
                }
                ShowInts();
            }
            
        }
        private void textBox_TextChanged(object? sender, EventArgs e)
        {
            for (int i = 0; i < 9; i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    if (textBoxGrid[i, j].Equals(sender))
                    {
                        TextBox textBox = (TextBox)sender;
                        if (string.IsNullOrEmpty(textBox.Text))
                        {
                            ints[i, j] = 0;
                        }
                        else
                        {
                            bool prease = int.TryParse(textBox.Text, out int ntext);
                            if (prease)
                            {
                                ints[i, j] = ntext;
                            }
                            else
                            {
                                textBox.Text = "0";
                            }
                        }
                    }
                }
            } 
        }

        void ShowInts()
        {
            for (int i = 0; i < 9; i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    textBoxGrid[i, j].Text = ints[i, j].ToString();
                }
            }
        }
        private bool isValue(int row, int col, int value)
        {
            // row
            for (int i = 0; i < 9; i++)
            {
                if (i != col)
                {
                    if (ints[row, i] == value)
                    {
                        return false;
                    }
                }
            }
            // col
            for (int i = 0; i < 9; i++)
            {
                if (i != row)
                {
                    if (ints[i, col] == value)
                    {
                        return false;
                    }
                }
            }
            int irow = row / 3 * 3;
            int jcol = col / 3 * 3;

            for (int i = irow; i < irow + 3; i++)
            {
                for (int j = jcol; j < jcol + 3; j++)
                {
                    if (i != row && j != col)
                    {
                        if (ints[i, j] == value)
                        {
                            return false;
                        }
                    }
                }
            }
            return true;

        }
        private bool solve()
        {
            int i = 0;
            int j = 0;
            for (i = 0; i < 9; i++)
            {
                for (j = 0; j < 9; j++)
                {
                    if (ints[i, j] == 0)
                    {
                        for (int v = 1; v <= 9; v++)
                        {
                            //  System.Diagnostics.Debug.WriteLine($">>>>>>>>:  i={i}, j={j}, v={v}");
                            if (isValue(i, j, v))
                            {
                                ints[i, j] = v;
                                if (solve())
                                {
                                    return true;
                                }
                                else
                                {
                                    ints[i, j] = 0;
                                }
                            }
                        }
                        return false;
                    }
                }
            }

            
            return true;
        }

    }
}
