    let playerscore=0;
    let computerscore=0;
    let champ='';
    
    playerSelection='';
    computerSelection='';

buttons=document.querySelectorAll('.button');

let rock=document.querySelector('#rock');
let paper=document.querySelector('#paper');
let scissor=document.querySelector('#scissor');
let comrock=document.querySelector('#c-rock');
let compaper=document.querySelector('#c-paper');
let comscissor=document.querySelector('#c-scissor');
let start=document.querySelector('#start');
start.addEventListener('click',playerselection);

// function player(){
//     console.log(playerSelection);
//     console.log('playerSelection');
// }

function playerselection(){
start.textContent="FIGHT";
rock.addEventListener('click',()=>{
    playerSelection='rock';
    computerselection();
   // player(playerSelection);
        comparison(playerSelection,computerSelection);
})
paper.addEventListener('click',()=>{
    playerSelection='paper';
    computerselection();
   // player(playerSelection);
        comparison(playerSelection,computerSelection);
})
scissor.addEventListener('click',()=>{
    playerSelection='scissor';
    computerselection();
   // player(playerSelection);
        comparison(playerSelection,computerSelection);
})
}

function computerselection(){
options=['rock','paper','scissor'];
computerSelection=options[~~(Math.random()*options.length)];

if (computerSelection=="rock"){
    comrock.style.border = "thick solid white";
        compaper.style.border = "2px solid black";
        comscissor.style.border = "2px solid black";
}
else if (computerSelection=="paper"){
    compaper.style.border = "thick solid white";
        comrock.style.border = "2px solid black";
        comscissor.style.border = "2px solid black";
}
else if (computerSelection=="scissor"){
    comscissor.style.border = "thick solid white";
        comrock.style.border = "2px solid black";
        compaper.style.border = "2px solid black";
}
   // console.log(computerSelection);
   // console.log('Computer Selection');
       return computerSelection;
}

function comparison(playerSelection,computerSelection){
if(computerSelection===playerSelection){
   // console.log('tie');
    document.getElementById('comment').innerText="It's a tie" ;
   
} else if (
    playerSelection == "rock" && computerSelection=="scissor"||
    playerSelection == "scissor" && computerSelection=="paper"||
    playerSelection == "paper" && computerSelection=="rock" 
    ){
    playerscore++;
    document.getElementById('comment').innerText="1 Point for Player" ;
    document.getElementById('playerscr').innerText="Player Score :"+playerscore ;
    winner(playerscore,computerscore);
        return playerscore;
} else if (
    playerSelection=== "scissor"&& computerSelection==="rock"||
    playerSelection=== "paper"&& computerSelection==="scissor"||
    playerSelection=== "rock"&& computerSelection==="paper"
    ){
    computerscore++;
    document.getElementById('comment').innerText="1 Point for Computer" ;
    document.getElementById('computerscr').innerText="Computer Score :"+computerscore;
   // console.log(computerscore);
    winner(playerscore,computerscore);
        return computerscore;
}

}
function clear(){
    playerscore = 0;
    computerscore = 0;
   // console.log(playerscore);
   // console.log(computerscore);

    document.getElementById('comment').innerText="";
    document.getElementById('computerscr').innerText="Computer Score :"+computerscore;
    document.getElementById('playerscr').innerText="Player Score :"+playerscore ;
}
function on(){
    document.getElementById("overlay").style.display="block";
    document.getElementById("overlayCmt").innerText=champ;
}
function off(){
    document.getElementById("overlay").style.display="none";
    clear(computerscore,playerscore);
}
function winner(playerscore,computerscore){
if (playerscore === 5){
   // console.log('player won');
    document.getElementById('comment').innerText="Player got to 5 points so Player Wins";
    champ= "Player Won";
    on(champ);
}
else if (computerscore === 5){
   // console.log('computer won');
    document.getElementById('comment').innerText="Computer got to 5 points so Computer Wins";
    champ= "Computer Won";
    on(champ);
}
}
