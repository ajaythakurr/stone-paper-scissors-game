let userscore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userSb=document.querySelector(".userScore");
const compSb=document.querySelector(".compScore");
const msg1=document.querySelector("#first");
const msg2=document.querySelector("#second");

const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const changeScoreboard = (userS,compS)=>{
    userSb.innerText = `${userS}`;
    compSb.innerText = `${compS}`;
}

const changeMsg=(str)=>{
    if(str==="YOU"){
        msg1.innerText="Congrats, YOU Win the game";
        msg1.classList.remove("hide");
    }
    else {
        msg1.innerText="Sorry, Comp Win the game";
        msg1.classList.remove("hide");
    }
    msg2.innerText="play another game";
    msg2.addEventListener("click", ()=>{
        window.history.go(0);
    });
}

const playGame = (userChoice)=>{
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice){
        console.log("draw");
    }
    else if(userChoice==="rock"){
        if(compChoice==="paper") compScore+=1;
        else userscore+=1;
    }
    else if(userChoice==="paper"){
        if(compChoice==="scissors") compScore+=1;
        else userscore+=1;
    }
    else {
        if(compChoice==="rock") compScore+=1;
        else userscore+=1;
    }

    changeScoreboard(userscore,compScore);

    if(userscore===5){
        changeMsg("YOU");
    }
    else if(compScore===5){
        changeMsg("COMP");
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log(choiceId);
        console.log("choice was clicked");
        playGame(choiceId);
    });
});

