//rolled a dice==>  current update==>
var active,currentscore,dice,player1,player2,gameon;
active=0;
currentscore=0;
player1=0;
player2=0;
gameon=true;

var x=document.querySelectorAll('.dice');
x[0].style.visibility='hidden';
x[1].style.visibility='hidden';
//dice=Math.Floor(Math.random()*6)+1;
document.querySelector('#score-0').textContent='0';
document.querySelector('#current-0').textContent='0';

document.querySelector('#score-1').textContent='0';
document.querySelector('#current-1').textContent='0';


document.querySelector('.btn-roll').addEventListener('click',function(){
 if(gameon)
 {
 dice=Math.floor(Math.random()*6)+1;
  x[0].style.visibility='visible';
  x[1].style.visibility='hidden';

  x[0].src='static/css/dice-'+dice+'.png';

 if (dice>1)
 {  currentscore+=dice;
    document.querySelector('#current-'+active).textContent=currentscore;
 }
 else{
   currentscore=0;
    active===0? active=1:  active=0;
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gameon){
  active===0?  player1+=currentscore :  player2+=currentscore;
  active===0? document.querySelector('#score-'+active).textContent=player1:document.querySelector('#score-'+active).textContent=player2;
  currentscore=0;

  if (player1>=20 || player2>=20)
  {
    document.querySelector('#name-'+active).textContent='WINNER!!!';
    x[0].style.visibility='hidden';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-'+active+'-panel').classList.add('winner');

    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';

    gameon=false;
  }
  else {
  active===0? active=1:  active=0;
  document.querySelector('#current-0').textContent='0';
  document.querySelector('#current-1').textContent='0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

}
}

});

document.querySelector('.btn-new').addEventListener('click',function(){
  active=0;
  currentscore=0;
  player1=0;
  player2=0;


  x=document.querySelectorAll('.dice');
  x[0].style.visibility='hidden';
  x[1].style.visibility='hidden';
  //dice=Math.Floor(Math.random()*6)+1;
  document.querySelector('#score-0').textContent='0';
  document.querySelector('#current-0').textContent='0';

  document.querySelector('#score-1').textContent='0';
  document.querySelector('#current-1').textContent='0';

  document.querySelector('#name-0').textContent='PLAYER 1';
  document.querySelector('#name-1').textContent='PLAYER 2';

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  gameon=true;
});
