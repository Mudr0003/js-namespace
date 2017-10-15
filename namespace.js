var MUDR0003 = {
   
    
   
    
    init: function () {
        console.log("script in MUDR0003 called");
        
        var div = document.createElement("div");
        
        div.className = "box";
        div.textContent = "MUDR00003";
        
        document.getElementById("boxes").appendChild(div);
   
        div.addEventListener("click", doClick);
        div.addEventListener("mouseover", doHighlight);
        div.addEventListener("mouseout", doHighLight);
        
        function doHighLight(ev) {
          this.classList.toggle("highlight");
            this.style.backgroundColor = "none";
            this.style.borderColor = "none";
        }
        
        function doClick(ev) {          
            this.style.backgroundColor = "purple";
            this.style.borderColor = "pink";
        }
        
    }
        
        
}


