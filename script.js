// timerr function----------
function runtimer() {
  let time = 60;
  let timeint = setInterval(() => {
    if (time > 0) {
      time--;
      document.getElementById("timer").innerText = time;
    } else {
      document.querySelector("#pbotton").innerHTML = `<h1>Game Over</h1>
      <button id="newgamebtn">New Game</button>`;
      newgame();
      clearInterval(timeint);
    }
  }, 1000);
}
runtimer();

// Make bubble function ----
function makebubble() {
  let clutter = "";
  for (let i = 1; i <= 30; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div onclick="bubbleHited(${rn})" class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbotton").innerHTML = clutter;
}
makebubble();


// Get new hit function

function GetNewHit(){
    let rnhit = Math.floor(Math.random()*10);
    document.querySelector('#hitval').innerText = rnhit;
    return rnhit;
}
let gethitNum = GetNewHit();

let score = 0;
const bubbleHited = (bubNum)=>{
    if(bubNum == gethitNum){
      score =score + 10;
      document.querySelector('#scorebar').innerText = score;
      
    }else{}
    gethitNum = GetNewHit();
      makebubble();
}


function newgame(){
  document.querySelector('#newgamebtn')
  .addEventListener('click', ()=>{
    score = 0;
    document.querySelector('#scorebar').innerText = score;
    runtimer();
    makebubble();
    gethitNum = GetNewHit();
  })
}