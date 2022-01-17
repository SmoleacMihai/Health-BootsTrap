function getRandomNumberBetween(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
}

let i = 0
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