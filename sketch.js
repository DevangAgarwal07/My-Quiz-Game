var canvas;
var gameState=0;
var contestantCount;
var allContestants;

var database;

var quiz,contestant,question;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    
    clear();
    quiz.play();
  }

  
}
