let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];``
}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(!userwin){
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }else{
        userscore++;
        userscorepara.innerText=userscore;
    msg.innerText=`you won your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}
};
const drawgame=()=>
{
    console.log("game was drawn");
    msg.innerText="Game was draw paly again!";
    msg.style.backgroundcolor="black";
}
const playGame=(userchoice)=>{
const compchoice=gencompchoice();
console.log("comp-choice=",compchoice);
if (userchoice==compchoice){
    drawgame();
}
else{
let userwin=true;
if(userchoice=="rock"){
    userwin= compchoice === "paper"? false: true;
}
else if(userchoice=="paper"){
userwin= compchoice==="rock"? true:false;
}
else{
    userwin= compchoice==="rock"?false:true;
}
showWinner(userwin,userchoice,compchoice);
}



}
choices.forEach((choice) => 
    {
        choice.addEventListener("click",() =>{
            const userchoice=choice.getAttribute("id");
            playGame(userchoice);

        })
});