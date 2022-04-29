var pScore = 0
var iaScore = 0
function play(pChoice){
  var iaChoice = Math.floor(Math.random()*3) + 1
  var winner
  if(
    (iaChoice == 1 && pChoice == 3) || 
    (iaChoice == 2 && pChoice == 1) ||
    (iaChoice == 3 && pChoice == 2)
  ){
    winner = "IA"
    iaScore++
  }else if(pChoice == iaChoice){
    winner = "No One"
  }else{
    winner = "Player"
    pScore++
  }
  var res =document.getElementById("resultado")
  res.innerHTML = winner + " Wins!!!"
  var plac=document.getElementById("placar")
  plac.innerHTML = "Player:"+pScore+ " X " +iaScore + ":IA"
}
