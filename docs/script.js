var c;
var ctx;
// pictures
var map = new Image();
map.src = "5KMap.png"
var arrow = new Image();
arrow.src = "arrow.png"

function init(){
    c  = document.getElementById("_canvas");
    ctx = c.getContext("2d");
    ctx.drawImage(map, 0, 0, 1000, 1000);
    
    

    
}

window.onload = init;

var rolled = false;

function roll(){

    var spots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; 
    var randomspot = spots[Math.floor(Math.random()*spots.length)];

    
    while(rolled === false){
        if (randomspot === 1){
            alert("salty springs");
            drawarrow(565, 609);
            rolled = true;  
        }
        else if (randomspot === 2){
            alert("tilted tower");
            drawarrow(360, 470);
            rolled = true;

        }
        else if (randomspot === 3){
            alert("dusty depot");
            drawarrow(582, 448);
            rolled = true;
        }
        else if (randomspot === 4){
            alert("Fatal fields");
            drawarrow(595, 728);
            rolled = true;
        }
        else if (randomspot === 5){
            alert("Tomato town");
            drawarrow(658, 306);
            rolled = true;
        }
        else if (randomspot === 7){
            alert("Reatail row");
            drawarrow(738, 499);
            rolled = true;
        }
        else if (randomspot === 8){
            alert("Moisty Mire");
            drawarrow(830, 749);
            rolled = true;

        }
        else if (randomspot === 9){
            alert("Lonely lodage");
            drawarrow(887,390);
            rolled = true;
        }
        else if (randomspot === 10){
            alert("Anrchy arces");
            drawarrow(534,182);
            rolled = true;
        }
        else if (randomspot === 11){
            alert("Loot lake");
            drawarrow(434,348);
            rolled = true;
        }
        else if (randomspot === 12){
            alert("shify shafts");
            drawarrow(369,615);
            rolled = true;
        }
        else if (randomspot === 13){
            alert("Greasy grove");
            drawarrow(230,583);
            rolled = true;
        }
        else if (randomspot === 14){
            alert("pleasant park");
            drawarrow(278,275);
            rolled = true;
        }
        else if (randomspot === 15){
            alert("haunted hils");
            drawarrow(150,196);
            rolled = true;
        }
        else if (randomspot === 16){
            alert("snoby shores");
            drawarrow(82,422);
            rolled = true;
        }
        else if (randomspot === 17){
            alert("flush factory");
            drawarrow(350,845);
            rolled = true;
        }
        else if (randomspot === 18){
            alert("lucky landing");
            drawarrow(568,-895);
            rolled = true;
        }
        
        
        
        
    
    }
        
    
}

function drawarrow(x,y){
    ctx.drawImage(arrow, x - 125, y - 50, 100, 100);
}



