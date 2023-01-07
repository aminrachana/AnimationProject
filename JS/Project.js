console.log("Welcome to Tic-Tac-Toe");
var aud_turn = new Audio("Audio/good-6081.mp3");
var aud_game = new Audio("Audio/children-logo-116101.mp3");
var turn = "X";
var isgameover = false;

var changeTurn = ()=>{
  return turn === "X" ? "0" : "X";
}

var checkWin = ()=>{
   var text = document.getElementsByClassName("text");
   var winner = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
   ]
   winner.forEach(e =>{
    if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "")){
      document.querySelector('.info').innerText = text[e[0]].innerText + " Won"
      isgameover = true
      document.querySelector('.img-gif').getElementsByTagName('img')[0].style.width = "200px";
      document.querySelector('.line').style.width = "20vw";
      document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      aud_game.play();

    }
   })
}

var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  var text = element.querySelector('.text');
  element.addEventListener('click', () =>{
    if(text.innerText === ''){
      text.innerText = turn;
      turn = changeTurn();
      aud_turn.play();
      checkWin();
      if (!isgameover){

        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
      
    }

  })
})

reset.addEventListener('click', ()=>{
  var texts = document.querySelectorAll('.text');
  Array.from(texts).forEach(element =>{
     element.innerText = ""
  });
  turn = "X"
  isgameover = false;
  document.querySelector('.line').style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.img-gif').getElementsByTagName('img')[0].style.width = "0px"
  
})
