    let playerscore=0;
    let computerscore=0;
    let champ='';
    
    playerSelection='';
    computerSelection='';

buttons=document.querySelectorAll('.button');

let rock=document.querySelector('#rock');
let paper=document.querySelector('#paper');
let scissor=document.querySelector('#scissor');
let start=document.querySelector('#start');
start.addEventListener('click',playerselection);

function playerselection(){
start.textContent="FIGHT";
rock.addEventListener('click',()=>{
    playerSelection='rock';
    computerselection();
        console.log(playerSelection);
        console.log('playerSelection');
        comparison(playerSelection,computerSelection);
})
paper.addEventListener('click',()=>{
    playerSelection='paper';
    computerselection();
        console.log(playerSelection);
        console.log('playerSelection');
        comparison(playerSelection,computerSelection);
})
scissor.addEventListener('click',()=>{
    playerSelection='scissor';
    computerselection();
        console.log(playerSelection);
        console.log('playerSelection');
        comparison(playerSelection,computerSelection);
        winner(playerscore,computerscore);
})

}


function computerselection(){
options=['rock','paper','scissor'];
computerSelection=options[~~(Math.random()*options.length)];
    console.log(computerSelection);
    console.log('Computer Selection');
       return computerSelection;
}



function comparison(playerSelection,computerSelection){
if(computerSelection===playerSelection){
    console.log('tie');
    document.getElementById('comment').innerText="It's a tie" ;
} else if (
    playerSelection == "rock" && computerSelection=="scissor"||
    playerSelection == "scissor" && computerSelection=="paper"||
    playerSelection == "paper" && computerSelection=="rock" 
    ){
    console.log('WoN');
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
    console.log('lost');
    computerscore++;
    document.getElementById('comment').innerText="1 Point for Computer" ;
    document.getElementById('computerscr').innerText="Computer Score :"+computerscore;
    console.log(computerscore);
    winner(playerscore,computerscore);
        return computerscore;
}

}
function clear(){
    playerscore = 0;
    computerscore = 0;
    console.log(playerscore);
    console.log(computerscore);

    document.getElementById('comment').innerText="";
    document.getElementById('computerscr').innerText="Computer Score :"+computerscore;
    document.getElementById('playerscr').innerText="Player Score :"+playerscore ;
}
function on(){
    document.getElementById("overlay").style.display="block";
    document.getElementById("overlayCmt").innerText=champ;
}
function off(){
    console.log('yo');
    document.getElementById("overlay").style.display="none";
    clear(computerscore,playerscore);
}
function winner(playerscore,computerscore){
if (playerscore === 5){
    console.log('player won');
    document.getElementById('comment').innerText="Player got to 5 points so Player Wins";
    champ= "Player Won";
    on(champ);
}
else if (computerscore === 5){
    console.log('computer won');
    document.getElementById('comment').innerText="Computer got to 5 points so Computer Wins";
    champ= "Computer Won";
    on(champ);
}
}
