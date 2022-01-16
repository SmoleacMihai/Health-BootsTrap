function getRandomNumberBetween(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
}

function clicked(control){
   if(control == true){
      $('#content'+usedRandom).removeClass('text-box');
      $('#content'+usedRandom).addClass('text-box noneDisplay');
   }
}

function firstClick(firstTime){
   
}



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

 $('#getAdviceBtn').click(function() {
   let controler = false
   let i = getRandomNumberBetween(1,10)
   let usedRandom = i
   while(i == usedRandom){
           i = getRandomNumberBetween(1,10)
   }
   $('#content'+i).removeClass('text-box noneDisplay');
   $('#content'+i).addClass('text-box');
});