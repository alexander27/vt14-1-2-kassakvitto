using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KassaKvitto.Model
{
    public class Receipt
    {
        public static int GetTotalAmount(string input)
        {

         private double _subtotal;

        
        public double DisckountRate
        {
            get{
                return _subtotal;
            }
           private set{
            
            }
          
        }

       public double MoneyOf
       {
       get{
       
       }
          private set{
           
           }
       }
        
        public  double Subtotal
            {
              public   get{
                     return _subtotal;
                 
                    }
             private   set{
                            if(value < 0)
                          {
                                throw new ArgumentException("Fel fel");
                          }
                            
                            _subtotal = value;
                          }
          }           
         public double Total
         {
            get{

            }
            set{
               }
         }
    
    
    }
  
}
