/**fizzbuzz
Author: Derek SCarlett
LIC: GPLv3
*/
var imgOne = ["slotPhotos/Cherry.png", "slotPhotos/Lemon.png", "slotPhotos/Lucky_Seven.png"]
var imgTwo = ["slotPhotos/Cherry.png", "slotPhotos/Lemon.png", "slotPhotos/Lucky_Seven.png"]
var imgThree = ["slotPhotos/Cherry.png", "slotPhotos/Lemon.png", "slotPhotos/Lucky_Seven.png"]
var total = 200;
var newTotal = 0;
var current = 0;
var slotA, slotB, slotC;
function slots(){
   slotA = Math.round(Math.random()* imgOne.length -1 )
  $("#first").attr("src", imgOne[slotA]);
   slotB = Math.round(Math.random()* imgTwo.length -1 )
  $("#second").attr("src", imgTwo[slotB]);
   slotC = Math.round(Math.random()* imgThree.length -1 )
  $("#third").attr("src", imgThree[slotC]);
}

$(document).ready(function(){
  $("#min").on("click",function(){
    total -= 1;
    newTotal = total;
    $("#total").text("Earnings: "+newTotal+" !");
    $("#start").on("click",function(){
      slots();
      if( slotA === slotB && slotA === slotC && slotB === slotC){
        $("#win-lose").text("You win!");
        newTotal += 2;
        $("#total").text("Earnings: "+newTotal+" !");
      }
       else if(slotA != slotB || slotA != slotC || slotB != slotC){
        $("#win-lose").text("Ha! Loser...");
        newTotal -= 2;
        $("#total").text("Earnings: "+newTotal+" !");
      }
       if(newTotal <= 0 || total <=0){
       alert("Out of money....Refresh the page to play again");
   }
    });
  });
  $("#max").on("click",function(){
    total -= 5;
    newTotal = total;
    current = newTotal;
    $("#total").text("Earnings: "+newTotal+" !");
    $("#start").on("click",function(){
      slots();
      if( slotA === slotB && slotA === slotC){
        $("#win-lose").text("You win!");
        newTotal += 10;
        $("#total").text("Earnings: "+newTotal+" !");
      }
       else if(slotA != slotB || slotA != slotC || slotB != slotC){
        $("#win-lose").text("Ha! Loser...");
        newTotal -= 5;
        $("#total").text("Earnings: "+newTotal+" !");
      }
       if(newTotal <= 0 || total <=0){
      alert("Out of money....Refresh the page to play again");
    }
    });

  });

})
