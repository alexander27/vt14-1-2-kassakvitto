using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KassaKvitto.Model
{
    public class Receipt
    {
        private double _subtotal;
    
        public double DiscountRate
        {
            
            get
            {
                return _subtotal;
            }
           
            private set
            {
            }
          
        }

        public double MoneyOf
        {
       
            get
            {
                return _subtotal;
            }
          
            private set
            {
            }
        }
        
        public  double Subtotal
        {
            
            public get
            {
                return _subtotal;
            }
             
            private   set
            {
                if(value < 0)
                {
                    throw new ArgumentException("Fel fel");
                }

                else
                {
                    _subtotal = value;
                }
          
            }           
        }

        public double Total
        {
            get
            {
               
            }
                        
            set
            {
                   
            }
         }
   
    
        public  void  Calculate(double subtotal)
        {
            Total = subtotal;
            
            if (Total > 0 && Total < 500)
            {
                DiscountRate = 0;
            }

            if (Total > 500  && Total < 1000)
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

            MoneyOf = Total * DiscountRate;
            Subtotal = Total - MoneyOf;




        }


        public Receipt(double input)
        {
            this.Calculate(input);
        }

    }

}