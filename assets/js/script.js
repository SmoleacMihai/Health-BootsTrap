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

//  document.getElementById("getAdviceBtn").onclick = unhider() 

 $('#getAdviceBtn').click(function(){
   $('#content0').removeClass('text-box');
   $('#content0').addClass('text-box noneDisplay');
   let i = getRandomNumberBetween(1,10)
   let usedRandom = i
   let delLater = i
   while(i == usedRandom){
           i = getRandomNumberBetween(1,10)
   }
   $('#content'+i).removeClass('text-box noneDisplay');
   $('#content'+i).addClass('text-box');
   ++count
   console.log(count)
   i = getRandomNumberBetween(1,10)
   usedRandom = i
   let delMoreLater = i
   if(count >= 2){
      $('#content'+delLater).removeClass('text-box');
      $('#content'+delLater).addClass('text-box noneDisplay');
      $('#content'+delMoreLater).removeClass('text-box');
      $('#content'+delMoreLater).addClass('text-box noneDisplay');
   }
});