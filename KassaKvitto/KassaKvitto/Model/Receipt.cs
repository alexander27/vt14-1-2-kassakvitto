using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KassaKvitto.Model
{
    public class Receipt
    {

        private double _subtotal;

        public double DiscountRate { get; private set; }

        public double MoneyOff { get; private set; }

        public double Subtotal
        {

             get
            {
                return _subtotal;
            }



            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentOutOfRangeException();
                }
                else
                {
                    _subtotal = value;
                }
            }


        }

        public double Total { get;private set; }


        public void Calculate(double subtotal)
        {
            Total = subtotal;

            if (Total > 0 && Total < 500)
            {
                DiscountRate = 0;
            }

            if (Total > 500 && Total < 1000)
            {
                DiscountRate = 0.05;
            }

            if (Total > 1000 && Total < 5000)
            {
                DiscountRate = 0.10;
            }

            if (Total > 5000)
            {
                DiscountRate = 0.15;
            }

            MoneyOff = Total * DiscountRate;
            Subtotal = Total - MoneyOff;




        }
        

        public Receipt(double subtotal)
        {
            this.Calculate(subtotal);
        }
        
    }
}