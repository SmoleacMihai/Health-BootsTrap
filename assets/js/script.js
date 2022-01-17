function getRandomNumberBetween(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
}

function clicked(control){
   if(control == true){
      $('#content'+usedRandom).removeClass('text-box');
      $('#content'+usedRandom).addClass('text-box noneDisplay');
   }
}

function replace(){

}


let count = 0
// function unhider(){
//     const curentRandom = getRandomNumberBetween(1,10)
//     while(curentRandom == usedRandom){
//         curentRandom = getRandomNumberBetween(1,10)
//     }
//     element = document.getElementById("content"+curentRandom)
//     element.style.display = "block";
//     usedRandom = curentRandom
// }

//  //main program
let i = 0
//  document.getElementById("getAdviceBtn").onclick = unhider() 
let usedRandom = 11
 $('#getAdviceBtn').click(function(){
   for(i = 0; i < 11; i++){
      $('#content'+i).removeClass('text-box');
      $('#content'+i).addClass('text-box noneDisplay');
      console.log(i)
   }
   let d = getRandomNumberBetween(1,10)
   while(d == usedRandom){
           d = getRandomNumberBetween(1,10)
   }
   $('#content'+d).removeClass('text-box noneDisplay');
   $('#content'+d).addClass('text-box');
   usedRandom = d
});