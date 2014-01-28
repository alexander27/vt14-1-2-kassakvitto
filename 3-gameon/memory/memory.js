"use strict";

var Memory =  {
 
    myArray :[],
    
    rows:2 ,
    columns: 3,
    arraycheck: [],
    arraycheckid: [],
    imagesshown: 0,
    foundpairs: 0,
         x:0,
    turns: 0,

	//hej
init : function (e){
   
 
    
this.myArray = RandomGenerator.getPictureArray(this.rows,this.columns);
},


getPitcure:function()
{
    return this.myArray;
},


showPicture : function(id)
{
	var lastelement = Memory.arraycheckid.length-1;
	
	if(Memory.arraycheckid[lastelement] != id) {		//kontroll om man klickar på samma
		Memory.imagesshown++;
		
		var image = document.getElementById(id);
		image.firstChild.src="pics/" + Memory.myArray[id] + ".png";		// om man klickar visas motsvarande bild från arrayen
		Memory.arraycheck.push(Memory.myArray[id]);	//Bild nummret
		Memory.arraycheckid.push(id);//	// kollar positionsnr man klickat på

	    lastelement = Memory.arraycheck.length-1; // sista klicket och bildvädet sparas
	    
							//																		//är samma
	    if(Memory.imagesshown == 2 && Memory.arraycheck.length > 1 && (Memory.arraycheck[lastelement] == Memory.arraycheck[lastelement-1]))
	    {
	    	Memory.turns++;
			image.firstChild.src = "pics/" + Memory.myArray[id] + ".png";
			image.value = 1;
			  
			var prior = document.getElementById([Memory.arraycheckid[lastelement-1]]);
			prior.firstChild.src = "pics/" +Memory.myArray[id] + ".png";
			prior.value=1;
			Memory.imagesshown= 0;
			  
			Memory.foundpairs++;
			console.log(Memory.imagesshown);
	    }
	    
	    if(Memory.foundpairs == Memory.myArray.length /2)
		{
		    var text = document.createElement("p");
		    text.innerHTML = "Grattis! Du klarade det på " +Memory.turns +" "+ "försök";
		    var cont = document.getElementById("content");
		    cont.appendChild(text);
	    }
	
	    else{
	        								//om två bilder visas  plusas med ett
			if(Memory.imagesshown ==2) {
		        
		        Memory.turns++;
		        
		        setTimeout(function(){
		      
                    if (image.value === 0){			//kollar så att bilden inte ingår i tidigare hittad par
                       
	                    image.firstChild.src = "pics/0.png";
	                    var imagebefore = document.getElementById(Memory.arraycheckid[Memory.arraycheckid.length-2]);
	                    imagebefore.firstChild.src = "pics/0.png";
                        
                        Memory.imagesshown = Memory.imagesshown-2;
                    }
                    else{
                        image.firstChild.src="pics/"+ Memory.myArray[id] + ".png";
                   	}
                    Memory.arraycheckid = [];
                    Memory.arraycheck = [];
                    Memory.imagesshown = 0;
	                
	            },1000);
	        }
	    }
	}
},


drawPicture : function(){
 var content = document.getElementById("container");
 var row;
 var box;
 var boxcounter = 0;
 var image;
  
   
   //spelplan
   for (var y = 0; y < this.rows; y++){
   row = document.createElement("div");
   row.className = "row";
   
   
    for (var x = 0; x < this.columns; x++)
    {
       
           
            box = document.createElement("a");
            box.setAttribute("href","#"); 
			box.id = boxcounter;
            box.value =0;
            image = document.createElement("img");
            //image.src = "pics/0.png";
            image.setAttribute("src", "pics/0.png");
            box.appendChild(image);
            
			
			box.onclick = function (){
                
                if (Memory.imagesshown < 2)
                {
                    Memory.showPicture(this.id);		//bara två klickbara
                    
                }
                
            };
            
            row.appendChild(box);
            boxcounter++;
           // document.createElement()
            
    }
        content.appendChild(row);
   }    


},  





}
window.onload = function(){
     
    Memory.init();
    Memory.drawPicture();
  
}
