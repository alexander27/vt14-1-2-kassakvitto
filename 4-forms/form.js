"use strict";
var validering = {



init: function validering(){
    
    var form = document.getElementById("myForm");    // tar in hela form
    var fieldset = form.elements[0]; //tar in hela fieldset taggen
    var firstName = form.elements["firstName"]; //tar in hela input
    var lastName = form.elements["lastName"];
    var postnumber =form.elements["postNumber"];// tar in input email taggen
    var email = form.elements["email"];
    var select = document.getElementById("pris");
    
    
    var namntext = document.createTextNode("var vänligen fyll i ditt namn")
    var lastnametext = document.createTextNode("var vänligen fyll i ditt efternamn")
    var postnumbertext = document.createTextNode("var vänligen och fyll i ditt postnummmer")
    var emailtext = document.createTextNode("var vänligen och fyll i din mailadress");
    
    
         select = document.getElementById("price"); // tar in hela selection och det som finns i
	    var formlength= form.elements.length; // tar in antalet av vad som finns i form
	

	
	var firstNamediv = document.getElementsByClassName("firstNameDiv")[0];
	var lastNamediv = document.getElementsByClassName("lastNameDiv")[0];
	var postNumberdiv = document.getElementsByClassName("postNumberDiv")[0];
	var eMaildiv = document.getElementsByClassName("eMailDiv")[0];
	var lastNameP = document.getElementById("lastnameratt");
	var postNumberP = document.getElementById("postnumberratt");
	var eMailP = document.getElementById("emailratt");
	var firstNameP = document.createElement("p");
	    lastNameP = document.createElement("p");
	    postNumberP = document.createElement("p");
	     eMailP = document.createElement("p");
	var button = document.getElementById("submitButton");
	var body = document.getElementById("body");
	var pageerror = ["firstname", "lastName", "postNumber", "eMail"];
	
	
	// mina reguljära uttryck
	
	var regPostNumber = /^[0-9]{5}$/; // fem bokstäver mellan 0 och 9
	var regeMail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; // reagerar på @ och .
		checkPageIsValid();
		button.onclick = function(e) {
		
			e.preventDefault();
			createPopup();

		}
	
		firstName.onblur = function (){
			
			if(firstName.value === ""){
		
				this.id = "röd";
				
				firstNameP.appendChild(namntext); // stoppar in min text i min P tag
				firstNameP.setAttribute("class", "firstnamefel"); // Ger klass och namn till min P tag
				firstNamediv.appendChild(firstNameP); // stoppar in P taggen in i diven
				if(pageerror.indexOf("firstname") === (-1)) {
					pageerror.push("firstname");
				}
			}
			else{
				this.id = "grön";
				if (firstNamediv.getElementsByClassName("firstnamefel")[0] != undefined) {
					firstNamediv.removeChild(firstNameP); // tar bort första barnet alltså P taggen
				}
				var index = pageerror.indexOf("firstname");
				if(index !== (-1)) {
					pageerror.splice(index, 1);
				}
			}
			checkPageIsValid();
			console.log(pageerror);
		}
	
		lastName.onblur = function (){
			
			if(lastName.value === ""){
		
				this.id = "röd";
				
				lastNameP.appendChild(lastnametext); 
				lastNameP.setAttribute("class", "lastnamefel"); 
				lastNamediv.appendChild(lastNameP); 
				
				if(pageerror.indexOf("lastName") === (-1)) {
					pageerror.push("lastName");
				}
			}
			else{
				this.id = "grön";
				if (lastNamediv.getElementsByClassName("lastnamefel")[0] != undefined) {
					lastNamediv.removeChild(lastNameP);
				}
				var index = pageerror.indexOf("lastName");
				if(index !== (-1)) {
					pageerror.splice(index, 1);
				}
			}
			checkPageIsValid();
			console.log(pageerror);
		}
	
		postnumber.onblur = function (){
		
			var theFixer = postnumber.value;
				theFixer = theFixer.replace(/^se/g, ""); // rättar till det småfel som en användare skulle kunna göra
				theFixer = theFixer.replace(/^SE/g, "");
				theFixer = theFixer.replace(/-/g, "");
				theFixer = theFixer.replace(/ /g, "");
				
				postnumber.value = theFixer; // Uppdaterar postNumbers värde
			
			if(postnumber.value === "" || !regPostNumber.test(postnumber.value)){
				
				this.id = "röd";
				
				postNumberP.appendChild(postnumbertext);
				postNumberP.setAttribute("class", "postnumberfel");
				postNumberdiv.appendChild(postNumberP);
				
				if(pageerror.indexOf("postNumber") === (-1)) {
					pageerror.push("postNumber");
				}
				
			} else {
				this.id = "grön";
				if (postNumberdiv.getElementsByClassName("postnumberfel")[0] != undefined){
					postNumberdiv.removeChild(postNumberP);
				}
				var index = pageerror.indexOf("postNumber");
				if(index !== (-1)) {
					pageerror.splice(index, 1);
				}
			}
			checkPageIsValid();
			console.log(pageerror);
		}
		
	
		email.onblur = function (){
			
			if(email.value === "" || !regeMail.test(email.value)){
				
				this.id = "röd";
				
				eMailP.appendChild(emailtext);
				eMailP.setAttribute("class", "emailfel");
				eMaildiv.appendChild(eMailP);
		
				if(pageerror.indexOf("eMail") === (-1)) {
					pageerror.push("eMail");
				}
			}
			else{
				
				this.id = "grön";
				if(eMaildiv.getElementsByClassName("emailfel")[0] != undefined){
					eMaildiv.removeChild(eMailP);
		
				}	
				var index = pageerror.indexOf("eMail");
				if(index !== (-1)) {
					pageerror.splice(index, 1);
				}
			}
			checkPageIsValid();
			console.log(pageerror);
		}
	
		var createPopup = function() {
			             
			              // popup rutan
			var popup = document.createElement("div");
			popup.setAttribute("class", "popup");
			
		
				// skickar popup till body
			document.body.appendChild(popup);
		
		
					var popupremover = document.createElement("div");
			popupremover.setAttribute("class", "popupwindow");
				document.body.appendChild(popupremover);
			
				
				// skapar avbrytknappen
			var breakerDiv = document.createElement("div");
			breakerDiv.className = ("breakerDiv");
			var breaker = document.createElement("button");
			breaker.value = "Avbryt";
			var breakertext = document.createTextNode("Avbryt");
			
		
			
			
				// Skickar knappen till rätt tag
			breaker.appendChild(breakertext);
			breakerDiv.appendChild(breaker);
			popupremover.appendChild(breakerDiv);
		
				
				// skicka knappen
			var senderDiv = document.createElement("div");
			senderDiv.className = ("senderDiv");
			var sender = document.createElement("button");
			sender.value = "Skicka";
			var buttontext = document.createTextNode("Skicka");
			
				// skickar in knappen i rätt tag
			sender.appendChild(buttontext);
			senderDiv.appendChild(sender);
			popupremover.appendChild(senderDiv);
			
			
				// skapar resultatet för namn i popup
			var nameResultPtag = document.createElement("p");
			nameResultPtag.id = ("nameResult");
			var nameResult = document.createTextNode("Namn: " + firstName.value);
			nameResultPtag.appendChild(nameResult);
			popupremover.appendChild(nameResultPtag);
			
				// efternamn i popup
			var lastNameResultPtag = document.createElement("p");
			lastNameResultPtag.id = ("lastNameResult");
			var lastNameResult = document.createTextNode("Efternamn: " + lastName.value);
			lastNameResultPtag.appendChild(lastNameResult);
			popupremover.appendChild(lastNameResultPtag);
			
				// postnummer i popup
			var postNumberResultPtag = document.createElement("p");
			postNumberResultPtag.id = ("postNumberResult");
			var postNumberResult = document.createTextNode("Postnummer: " + postnumber.value);
			postNumberResultPtag.appendChild(postNumberResult);
			popupremover.appendChild(postNumberResultPtag);
			
				// email i popup
			var eMailResultPtag = document.createElement("p");
			eMailResultPtag.id = ("eMailResult");
			var eMailResult = document.createTextNode("Email: " + email.value);
			eMailResultPtag.appendChild(eMailResult);
			popupremover.appendChild(eMailResultPtag);
			
				// selector value i popup
			var priceResultPtag = document.createElement("p");
			priceResultPtag.id = ("priceResult");
			var priceResult = document.createTextNode("Prismodell: " + select.value);
			priceResultPtag.appendChild(priceResult);
			popupremover.appendChild(priceResultPtag);
			
			fieldset.disabled=true;
			
			breaker.onclick = function(e){
			
				document.body.removeChild(popup);
				document.body.removeChild(popupremover);
				fieldset.disabled=false;
			}
		
			sender.onclick = function(e){
				fieldset.disabled=false;
				form.submit();
			
			}
		}
		function checkPageIsValid() {
			if (pageerror.length === 0) {
				button.disabled = false;
			} else {
				button.disabled = true;
			};
		}

	}
}
    
    
    
    
    

window.onload = validering.init;
    

    
    
