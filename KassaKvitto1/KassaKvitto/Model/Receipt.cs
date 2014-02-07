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
            Subtotal = subtotal;

            if (Subtotal < 500)
            {
                DiscountRate = 0;
            }
            else if (Subtotal < 1000)
            {
                DiscountRate = 0.05;
            }
            else if (Subtotal < 5000)
            {
                DiscountRate = 0.10;
            }
            else
            {
                DiscountRate = 0.15;
            }

            MoneyOff = Subtotal * DiscountRate;
            Total = Subtotal - MoneyOff;
        }
        

        public Receipt(double subtotal)
        {
            this.Calculate(subtotal);
        }
        
    }
}