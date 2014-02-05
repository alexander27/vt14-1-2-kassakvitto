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
            
            
            Model.Receipt Receipt = new Model.Receipt(double.Parse(TextBox1.Text));
            Label3.Text=string.Format("{0:c}:{1:p}:{2:c}:{3:c}",Receipt.Total, Receipt.DiscountRate,Receipt.MoneyOff,Receipt.Subtotal);

        }
    }
}