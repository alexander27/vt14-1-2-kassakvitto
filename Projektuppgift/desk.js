"use strict";
var click = {
	
	
	
	init: function(){
	
		var icon = document.getElementById("icon");
		var open = false;
		
		icon.onclick = function(){
			
			if(open === true){
			
			alert("Du har redan öppnat ett fönster");
			
			return false;
				
			}

			open = true;
			
		
			
			var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";

			var container = document.getElementById("container");
			
			var popup = document.createElement("div");
			popup.setAttribute("id", "popup");
			container.appendChild(popup);
			
			var header = document.createElement("div");
			header.setAttribute("id", "header");
			popup.appendChild(header);
			
			var middle = document.createElement("div");
			middle.setAttribute("id", "middle");
			popup.appendChild(middle);
			
			var footer = document.createElement("div");
			footer.setAttribute("id", "footer");
			popup.appendChild(footer);
			
			var closeImg = document.createElement("img");
			closeImg.setAttribute("src", "pics/kryss.png");
			closeImg.setAttribute("id", "kryss");
			var closeLink = document.createElement("a");
			closeLink.setAttribute("href", "#");
			closeLink.setAttribute("id", "closeImg");
			closeLink.appendChild(closeImg);
			header.appendChild(closeLink);
			
			var icon = document.createElement("img");
			icon.setAttribute("src", "pics/boll.png");
			icon.setAttribute("id", "icon1");
			header.appendChild(icon);
			
			var iconText = document.createElement("p");
			iconText.setAttribute("id", "iconText");
			header.appendChild(iconText);
			
			var Ptext = document.createTextNode("Bilder");
			iconText.appendChild(Ptext);
			
			var loader = document.createElement("img");
			loader.setAttribute("src",  "pics/loading.gif")
			loader.setAttribute("id", "loader");
			footer.appendChild(loader);
			
		var	loaderText = document.createTextNode("Laddar...");
			
			var Ploader = document.createElement("p");
			Ploader.setAttribute("id", "Ploader");
			Ploader.appendChild(loaderText);
			footer.appendChild(Ploader);
	
			var width = 0;
			var height = 0;
			
			new Ajax(url, function callback(data){
					
				var recived = data;
				var read = JSON.parse(recived);
				
				 for (var i = 0; i < read.length; i++){
        		 
        		 var imgDiv = document.createElement("div");
        		 imgDiv.setAttribute("class", "imgDiv");
        		 imgDiv.setAttribute("id", i);
        		 middle.appendChild(imgDiv);
        		 
        		 
        		 var lotsOfPics = document.createElement("img");
        		 lotsOfPics.setAttribute("class", "lotsOfPics.");
        		 lotsOfPics.src = read[i].thumbURL;
        	
        		 imgDiv.appendChild(lotsOfPics);
        		 
        		 
        		 
        		 
        		 var piclink = document.createElement("a");
        		 piclink.setAttribute("href", "#");
				 piclink.setAttribute("class", "piclink");
				 middle.appendChild(piclink);
				 piclink.appendChild(imgDiv);
				 
				 
				 lotsOfPics.onclick = function(e){
				 	var imgId = e.target.parentNode.getAttribute("id");
				 	console.log(read[imgId].thumbURL);
				 	document.body.style.background="url("+read[imgId].URL +")";
			
					
				var imgId = e.target.parentNode.getAttribute("id");
				 	
        		
        				
        				document.body.style.background = "url"+ read[i] +")";
        			
        	
        		
					        			
        			
        		}
				 
        		
        		 //hämtar ut storlek på varje och jämför om den du har är större än dän som du får...
        		 
        		 if(width < read[i].thumbWidth){
        				width = read[i].thumbWidth;
        			}
        			if(height < read[i].thumbHeight){
        				height = read[i].thumbHeight;
        			
        		 
        		}
        		//ny foor-loop som sätter storlek beroende på den som kommer från den förra...
        		
        		var imgDivs = document.getElementsByClassName("imgDiv");
        		
        		for ( i = 0; i < imgDivs.length; i++){
        			
        			imgDivs[i].style.width = width +20+ "px";
        			imgDivs[i].style.height = height +20+ "px";
        		/*	imgDivs.style['margin-left'] = "10px";
                    imgDivs.style['margin-top'] = "10px";
                    imgDiv.style['float'] = "left";*/
        			}
        		}
        		
        			 
        			footer.removeChild(loader);
        			footer.removeChild(Ploader);
        			
				closeLink.onclick = function(){
				
				container.removeChild(popup);
				open = false;
				
			};		
			});
		};
	}
};

 window.onload = click.init;
