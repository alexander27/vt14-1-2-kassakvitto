"use strict";

window.onload = function(){

	
	
		
	/*var	fodelsedag =new Date(Date.parse(date)); 
	var nudatum = new Date();
	
	nudatum.setHours(0);
	nudatum.setMinutes(0);
	nudatum.setSeconds(0);
	nudatum.setMilliseconds(0);
	fodelsedag.setHours(0);
	fodelsedag.setMinutes(0);
	fodelsedag.setSeconds(0);
	fodelsedag.setMilliseconds;(0);
				// Din kod här.
*/





 

 var birthday = function(date){

   
      
 var   month = +(month) - 1; // sätter - 1 för att januari räknas som 0
   var day = +(day);
    
    var newDate = new Date(); // hämtar dagens datum.

    var myDate = new Date(newDate.getFullYear(), month, day); // Hämtar datum som användare matat in.

    if (myDate <= newDate) { // Om man redan fyllt år så börjar den räkna på nästa år.

        myDate.setFullYear(myDate.getFullYear()+1); // Så att den förstår att födelsedagen inträffar nästa år.
    }
    else { // Om man inte fyllt år än.

        myDate.setFullYear(myDate.getFullYear()); // Födelsedagen har inte inträffat ¨på det nuvarande året.
    }

    // Omvandlar millisec till dagar. 
    var millisec = 1000 * 60 * 60 * 24;

    // Den angivna datumen minus dagens datum delat med millisec så får du ut antalet dagar tills du fyller år... i "dagar".

    return (Math.ceil((myDate.getTime() - newDate.getTime()) / millisec));
	

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};