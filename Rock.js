var you;
var yourscore=0;
var opponent;
var opponentscore=0;

var choices=["images/rock","images/paper","images/scissors"];


window.onload=function(){
    for(let i=0; i<3;i++){
        //<img id="images/rock" src="image/rock.jpg">
        let choice=document.createElement("img");
       choice.id=choices[i];
        choice.src=choices[i]+".jpg";
      choice.addEventListener("click",selectchoice);
        document.getElementById("choices").append(choice);
    }
}
function selectchoice(){
    you=this.id;
    document.getElementById("your-choice").src= you + ".jpg";

    //random for opponent
    opponent=choices[Math.floor(Math.random()*3)];
    document.getElementById("opponent-choice").src=opponent+".jpg";

    //select winner
    if(you==opponent){
        yourscore+=1;
        opponentscore+=1;
    }
    else{
        if(you=="images/rock"){
            if(opponent=="images/scissors"){
                yourscore+=1;
            }
            else if(opponent=="images/paper"){
                opponentscore+=1;
            }
        }
        else if(you=="images/scissors"){
            if(opponent=="images/paper"){
                yourscore+=1;
            }
            else if(opponent=="images/rock"){
                opponentscore+=1;
            }
        }
        else if(you=="images/paper"){
            if(opponent=="images/rock"){
                yourscore+=1;
            }
            else if(opponent=="images/scissors"){
                opponentscore+=1;
            }
        }
    }
    document.getElementById("your-score").innerText=yourscore;
    document.getElementById("opponent-score").innerText=opponentscore;
}