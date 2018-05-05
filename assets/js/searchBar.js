var document = "index.html";

var searchItems = [
                ["Biochimia", "#banner"],
                ["Biochimia structurala", "#one"],
                ["Biochimia metabolismelor", "#two"],
                ["Importanta", "#three"],
                ["Biomoleculele organismului", "#four"],
                ["Contact", "#five"]];
var searchSize = 6;
autocomplete(document.getElementById("myInput"), searchItems);

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function() {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
      
        this.parentNode.appendChild(a);
      
        for (i = 0; i < searchSize; i++) {
            if (arr[i][0].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("div");
            
                b.innerHTML = "<strong style='color:green;'>" + arr[i][0].substr(0, val.length) + "</strong>"
                b.innerHTML += arr[i][0].substr(val.length);
            
                b.innerHTML += "<input type='hidden' value='" + arr[i][0] + "'>";
                b.innerHTML += "<input type='hidden' value='" + arr[i][1] + "'>"
                //inp.value = arr[i][1];
                b.addEventListener("click", function() {
                    inp.value = "";
                    
                    location.href = this.getElementsByTagName("input")[1].value;
                    closeAllLists();
                });
                
                a.appendChild(b);
            }
        }
      
    });
    
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            }
        
            else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            }
        
            else if (e.keyCode == 13) {

            e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
    });
    
    function addActive(x) {
        if (!x) return false;
    
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
    
        x[currentFocus].classList.add("autocomplete-active");
    }
    
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    
    function searchForItems(){
        var ok = 0;
        for(var i = 0; i < searchSize; i++){
            if(inp.value.toUpperCase() == arr[i][0].toUpperCase()){
                inp.value = "";
                location.href = arr[i][1];
                closeAllLists();
                ok = 1;
                break;
            }
        }
        
        if(ok == 0){
            inp.value = "Not found";
            closeAllLists();
        }
    }
    
    document.getElementById("mySubmit").addEventListener("click", function(){
        searchForItems();
    })
    
    inp.addEventListener("keypress", function(e){
        var key = e.which || e.keyCode;
        if(key == 13){
            searchForItems();
        }
    })

}


