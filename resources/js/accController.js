var authStatus = true;
var level = 1;
var pLife = 3;
var monLife = 2;
var monT = 0;
var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
// 46 arrays
var n1 = 0 ;
var n2 = 0 ;
var n3 = 0 ;
var score = 0 ;
var wait ;

function checkAuth() {
    if (!authStatus) {
        window.location.replace('./login.html');
    }
}

function mockMain() {
    window.location.href = '../index.html';
}
function returnMain() {
    window.location.href = './index.html';
}
function mockPrimeGame() {
    window.location.href = './PrimeGame/index.html';
}
function mockQuickGame() {
    window.location.href = './QuickMath/home.html';
}
function mockRunGame() {
    window.location.href = './runMath/game.html';
}
function mockReturnGame() {
    window.location.href = './primeGame.html';
}
function mockPrimenumber() {
    window.location.href = './primeNumberPage.html';
}
function mockPlaygame() {
    window.location.href = './charSelect.html';
}
function char1select(){
    level = 1;
    window.location.href = './playGame1.html';
}
function char2select(){
    level = 1;
    alert("Coming Soon!");
}
function upStage() {
    level = level+1;
    document.getElementById("stage").innerHTML = level;
}

function saveLife() {
    pLife = pLife+1;
    document.getElementById("life").innerHTML = pLife;
}

function randomQuiz() {
    
       
     n1 = Math.floor(Math.random() * 200);
     n2 = Math.floor(Math.random() * 200);
     n3 = Math.floor(Math.random() * 200);
     
     document.getElementById("player1").src = "./resources/Character/Char1/stand.gif"
    if(pLife == 0){
        window.location.href = './endGame.html';
    }
    if(monLife == 0 && monT == 0){
        document.getElementById("monster").src = "./resources/Character/Mons/mon2.png"
        monT = monT+1;
        monLife = monLife+3;
        
    }
    else if(monLife == 0 && monT == 1){
        document.getElementById("monster").src = "./resources/Character/Mons/mon3.png"
        monT = monT+1;
        monLife = monLife+5;
        
    }
    else if(monLife == 0 && monT == 2){
        document.getElementById("monster").src = "./resources/Character/Mons/mon4.png"
        monT = monT+1;
        monLife = monLife+10;
    }
    else if(monLife == 0 && monT == 3){
        window.location.href = './endGame.html';
    }
     document.getElementById('sc').innerHTML = score;
     document.getElementById("life").innerHTML = pLife;
     document.getElementById("mlife").innerHTML = monLife;
    

    if(n1 == 0){
        n1 = n1+1;
    }
    else{
        document.getElementById("q1").innerHTML = n1;
    }
    if(n2 == 0){
        n2 = n2+1;
    }
    else{
        document.getElementById("q2").innerHTML = n2;
    }
    if(n3 == 0){
        n3 = n3+1;
    }
    else{
        document.getElementById("q3").innerHTML = n3;
    }
    
}

function checkAns1(){
    var i = 999;
    console.log(n1);
    i = prime.indexOf(n1);
    console.log(i);
    if(i == -1){
        
        pLife = pLife-1;
        randomQuiz();
    }
    else{
        score = score+1;
        localStorage.setItem('endsc',score);
        document.getElementById("player1").src = "./resources/Character/Char1/attack.gif";
        monLife = monLife-1;
        wait = setTimeout(randomQuiz,800);
        
        
    }
    
}

function checkAns2(){
    var i = 999;
    console.log(n1);
    i = prime.indexOf(n2);
    console.log(i);
    if(i == -1){
        
        pLife = pLife-1;
        randomQuiz();
    }
    else{
        
        score = score+1;
        localStorage.setItem('endsc',score);
        
        document.getElementById("player1").src = "./resources/Character/Char1/attack.gif";
        monLife = monLife-1;
        wait = setTimeout(randomQuiz,800);
    }
}
function checkAns3(){
    var i = 999;
    console.log(n1);
    i = prime.indexOf(n3);
    console.log(i);
    if(i == -1){
        
        pLife = pLife-1;
        randomQuiz();
    }
    else{
        
        score = score+1;
        localStorage.setItem('endsc',score);
        
        document.getElementById("player1").src = "./resources/Character/Char1/attack.gif";
        monLife = monLife-1;
        wait = setTimeout(randomQuiz,800);
    }
}
function checkAnsA(){
    randomQuiz();
}
function endScore() {
    var endsc = localStorage.getItem('endsc'); 
    console.log(endsc);
    document.getElementById('endSc').innerHTML = endsc;

}
