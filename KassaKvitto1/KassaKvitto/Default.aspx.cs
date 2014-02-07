using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace KassaKvitto
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {

            placeHolder.Visible = true;
            Model.Receipt Receipt = new Model.Receipt(double.Parse(TextBox1.Text));
            
        
            Total.Text=string.Format("{0:c}",Receipt.Total);
            DiscountRate.Text = string.Format("{0:p}", Receipt.DiscountRate);
            MoneyOff.Text=string.Format("{0:c}",Receipt.MoneyOff);
            Subtotal.Text=string.Format("{0:c}",Receipt.Subtotal);
            
        }
    }
}