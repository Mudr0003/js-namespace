var MUDR0003 = {
   
    var toggleBool = false;
    
    init: function () {
        console.log("script in MUDR0003 called");
        
        var div = document.createElement("div");
        
        div.className = "box";
        div.textContent = "MUDR0003";
        
        document.getElementById("boxes").appendChild(div);
   
        div.addEventListener("click", doClick);
        div.addEventListener("mouseover", doHighLight);
        div.addEventListener("mouseout", doHighLight);
        
        function doHighLight(ev) {
          this.classList.toggle("highlight");
        }
        
        function doClick(ev) {          
              if (toggleBool == true)
              {
                  toggleBool = false;
                  this.style.backgroundColor = "lightpink";
                  this.style.borderColor = "lightblue";
              } else {
                  toggleBool = true;
                  this.style.backgroundColor = "lightblue";
                  this.style.borderColor = "lightpink"; 
              }
           
        }
        
    }
        
        
}


