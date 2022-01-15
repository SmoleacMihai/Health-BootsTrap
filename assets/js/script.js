// Variables
let usedRandom = 11
let curentRandom = 0

//Functions
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function unhider(){
    let clear = document.getElementById("content0")
    clear.style.display = "none"
    curentRandom = getRandomNumberBetween(1,10)
    while(curentRandom == usedRandom){
        curentRandom = getRandomNumberBetween(1,10)
    }
    element = document.getElementById("content"+curentRandom)
    element.style.display = "block";
    usedRandom = curentRandom
}

 //main program
for (var i = 0; i < 11; i++) {
    cleaner = document.getElementById("content"+i)
    cleaner.style.display = "none";
 }

 document.getElementById("randomButton").onclick = unhider() 