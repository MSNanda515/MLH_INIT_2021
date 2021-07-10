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
        public MainPage()
        {
            InitializeComponent();
            OnClear(this, null);
        }

        private void OnClear(object sender, EventArgs e)
        {
            firstNo = 0;
            secondNo = 0;
            state = 1;
            this.Result.Text = "0";
        }

        private void NumberClicked(object sender, EventArgs e)
        {
            Button button = (Button)sender;
            int oldNo = Int32.Parse(this.Result.Text);
            int newNo = Int32.Parse(button.Text);
            this.Result.Text = (oldNo + newNo).ToString();
        }
        
    }
}
