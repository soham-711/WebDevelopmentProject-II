let userPoint = 0;
let compPoint = 0;
let play_items = ["rock","paper","scissors"];

let choises = document.querySelectorAll(".choise");
let your_score = document.querySelector(".your_score");
let comp_score = document.querySelector(".comp_score");
let massage_box = document.querySelector(".msg_box");
let massage = document.querySelector(".massage");
let reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    userPoint = 0;
    compPoint = 0;
    updateScore(userPoint,compPoint);
    massage.innerHTML = "Pick Your Move";
    massage.style.backgroundColor = "#379237";
});

choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        console.log("img was clicked");
        let userChoise = choise.getAttribute("id");
        console.log(userChoise);
        playGame(userChoise);
    });
});

let playGame = (userChoise)=>{
    let randomInx = Math.floor(Math.random()*3);
    let compChoise = play_items[randomInx];
    console.log(play_items[randomInx]);
    if(compChoise === userChoise){
        console.log("Match Draw!!");
        massage.innerHTML = "It was Draw.";
        massage.style.backgroundColor = "#379237";
    }
    else{
        if(compChoise === "rock" && userChoise === "paper"){
            console.log("you win");
            userPoint += 1;
            massage.innerHTML = "You win! Your paper beats rock";
            massage.style.backgroundColor = "#1679AB";
        }
        else if(compChoise === "rock" && userChoise === "scissors"){
            console.log("you loss");
            compPoint += 1;
            massage.innerHTML = "You lost. Rock beats your scissors";
            massage.style.backgroundColor = "#FF0000";
        }
        else if(compChoise === "paper" && userChoise === "rock"){
            console.log("you loss");
            compPoint += 1;
            massage.innerHTML = "You lost. Paper beats your rock";
            massage.style.backgroundColor = "#FF0000";
        }
        else if(compChoise === "paper" && userChoise === "scissors"){
            console.log("you win");
            userPoint += 1;
            massage.innerHTML = "You win! Your scissors beats paper";
            massage.style.backgroundColor = "#1679AB";
        }
        else if(compChoise === "scissors" && userChoise === "rock"){
            console.log("you win");
            userPoint += 1;
            massage.innerHTML = "You win! Your rock beats scissors";
            massage.style.backgroundColor = "#1679AB";
        }
        else if(compChoise === "scissors" && userChoise === "paper"){
            console.log("you loss");
            compPoint += 1;
            massage.innerHTML = "You lost. Scissors beats your paper";
            massage.style.backgroundColor = "#FF0000";
        }
    }
    console.log(`your score: ${userPoint} and comp score: ${compPoint}`);
    updateScore(userPoint,compPoint);
};

let updateScore = (userPoint,compPoint)=>{
    your_score.innerHTML = `${userPoint}`;
    comp_score.innerHTML = `${compPoint}`
};