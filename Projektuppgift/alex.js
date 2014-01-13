"use strict";

var Desktop = {
    open: false,
    
    init: function()
    {
        var icon = document.getElementById("icon");
        icon.onclick = function()
        {
            if (!Desktop.open)
            {
                Desktop.openGallery();
                Desktop.open = true;
            }
        }
    },
    
    openGallery: function()
    {
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
			var closeLink = document.createElement("a");
			closeLink.setAttribute("href", "#");
			closeLink.setAttribute("id", "closeImg");
			closeLink.appendChild(closeImg);
			header.appendChild(closeLink);
			
		/*	var icon = document.createElement("img");
			icon.setAttribute("src", "pics/jord.jpg");
			icon.setAttribute("id", "icon");
			header.appendChild(icon);
		*/	
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
	
      //   var borderBackground = document.createElement("div");
    //    borderBackground.id = "borderbackground";
     
      //  document.body.appendChild(borderBackground);
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4)
            {
                if (xhr.status >=200 && xhr.status < 300 || xhr.status === 304)
                {
                    var read = JSON.parse(xhr.responseText);
                 
                 
                   for (var i = 0; i < read.length; i++){
                    
                var imgDiv = document.createElement("div");
        		 imgDiv.setAttribute("class", "imgDiv");
        		 imgDiv.setAttribute("id", i);
        		 middle.appendChild(imgDiv);
        		 
        		 
        		 var lotsOfPics = document.createElement("img");
        		 lotsOfPics.setAttribute("class", "lotsOfPics");
        		 lotsOfPics.setAttribute("src", [i].fileName);
        		 imgDiv.appendChild(lotsOfPics);
     
        		 
        		 var piclink = document.createElement("a");
        		 piclink.setAttribute("href", "#");
				 piclink.setAttribute("class", "piclink");
				 middle.appendChild(piclink);
				 piclink.appendChild(imgDiv);
				 
				 
				 lotsOfPics.onclick = function(e){
				 	
				 	var imgId = e.target.parentNode.getAttribute("id");
				 	
        				console.log(read[imgId].fileName);
  
        
        				document.body.style.background = "url(pics/"+ read[imgId].fileName +")";
        
        		}
				 
        		 	var width = 0;
			var height = 0;
        		 //hämtar ut storlek på varje och jämför om den du har är större än dän som du får...
        		 
        		 if(width < read[i].thumbWidth){
        				width = read[i].thumbWidth;
        			}
        			if(height < read[i].thumbHeight){
        				height = read[i].thumbHeight;
        				
        			}
        		 
        		}
                    
				 	var imgDivs = document.getElementsByClassName("imgDiv");
        		
        		for ( i = 0; i < imgDivs.length; i++){
        			
        			imgDivs[i].style.width = width + "px";
        			imgDivs[i].style.height = height + "px";
        		}
			
                   /* 
                    var thumbWidthArray = [];
                    var thumbHeightArray = [];
                    
                        for (var x = 0; x < obj.length; x++)
                        {
                            thumbWidthArray[x] = obj[x].thumbWidth;
                            thumbHeightArray[x] = obj[x].thumbHeight;
                        }
                        
                    thumbWidthArray.sort(function (a,b){return b-a});
                    thumbHeightArray.sort(function (a,b){return b-a});

                    var maxThumbWidth = thumbWidthArray[0];
                    var maxThumbHeight = thumbHeightArray[0];
                    console.log(maxThumbWidth);
                    
                    borderBackground.style.width = (maxThumbWidth * 4) + 20 + 40 + 6 + "px";
                    popup.style.width = (maxThumbWidth * 4) + 20 + 40 + "px";
                    header.style.width = (maxThumbWidth * 4) + 20 + 40 + "px";
                    footer.style.width = (maxThumbWidth * 4) + 20 + 40 + "px";

                    
                        for (x = 0; x < obj.length; x++)
                        {
                    
                            var box = document.createElement("div");
                            box.id = x;
                            box.style.width = maxThumbWidth + 20 + "px";
                            box.style.height = maxThumbHeight + 20 + "px";
                            box.style.backgroundColor = "#ff5667";
                            box.style['border-radius'] = "5px";
                            box.style['margin-left'] = "10px";
                            box.style['margin-top'] = "10px";
                            box.style['float'] = "left";
                            var thumbWidth = obj[x].thumbWidth;
                            var thumbHeight = obj[x].thumbHeight;
                            var marginWidth = (((maxThumbWidth + 20) - thumbWidth) / 2);
                            var marginHeight = (((maxThumbHeight + 20) - thumbHeight) / 2);
                            popup.insertBefore(box, popup.lastChild);
                    
                        }
                        
                        
                    
                    var image = document.createElement("img");
                    image.src = obj[0].thumbURL;
                    image.style['margin-left'] = marginWidth + "px";
                    image.style['margin-top'] = marginHeight + "px";
                    
                
                    box.appendChild(image);
                    
                    popup.insertBefore(box, popup.lastChild);
                    
                }
                
                else
                {
                    console.log("Läsfel");
                    */
                };
            }
      
        }
      
        	
        
    
    
 /*   closeLink: function()
    {
        var gallery = document.getElementById("borderbackground");
        gallery.remove();
          Desktop.open = false;
    };
    */
         xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
    }
        
}


window.onload = function() {
    Desktop.init();
}