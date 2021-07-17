using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace InitCalculator
{
    public partial class MainPage : ContentPage
    {
        private double firstNo, secondNo;
        int state;
        string calOper;
        Button prevButton;
        public MainPage()
        {
            InitializeComponent();
            OnClear(this, null);
        }

        private void OnOperatorClick(object sender, EventArgs e)
        {
            Button button = (Button)sender;
            if (prevButton != null)
            {
                prevButton.BackgroundColor = Color.Orange;
            }
            button.BackgroundColor = Color.Red;
            prevButton = button;
            calOper = button.Text;
        }

        private double doCal()
        {
            double ansVal = 0;
            switch (calOper)
            {
                case "+":
                    ansVal = firstNo + secondNo;
                    break;
                case "-":
                    ansVal = firstNo - secondNo;
                    break;
                case "x":
                    ansVal = firstNo * secondNo;
                    break;
                case "/":
                    ansVal = firstNo / secondNo;
                    break;
            }

            return ansVal;
        }

        private void OnEqualClick(object sender, EventArgs e)
        {
            secondNo = Double.Parse(this.Result1.Text);
            double ansCal = doCal();
            this.Result2.Text = ansCal.ToString();
            firstNo = ansCal;
            this.Result1.Text = "0";
        }

        private void OnClear(object sender, EventArgs e)
        {
            firstNo = 0;
            secondNo = 0;
            state = 1;
            calOper = "";
            prevButton = null;
            this.Result1.Text = "0";
            this.Result2.Text = "0";
        }


        private void NumberClicked(object sender, EventArgs e)
        {
            Button button = (Button)sender;
            int oldNo = Int32.Parse(this.Result1.Text);
            int newNo = Int32.Parse(button.Text);
            this.Result1.Text = (oldNo*10 + newNo).ToString();
        }
        
    }
}
