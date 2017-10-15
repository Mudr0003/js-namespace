var MUDR0003 = {
   
    
    init: function () {
        console.log("script in MUDR0003 called");
        
        var div = document.createElement("div");
        
        div.className = "box";
        div.textContent = "MUDR0003";
        
        document.getElementById("boxes").appendChild(div);
   
        div.addEventListener("click", doClick);
        div.addEventListener("mouseover", doHighlight);
        div.addEventListener("mouseout", doHighLight);
        
        function doHighLight(ev) {
          this.classList.toggle("highlight");
        }
        
        function doClick(ev) {          
            
              this.style.backgroundColor = "lightpink";
              this.style.borderColor = "lightblue";
           
        }
        
    }
        
        
}


