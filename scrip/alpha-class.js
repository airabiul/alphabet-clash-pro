
// function play(){
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");
//     // console.log(homeScreen.classList);

//     const playGroundSection = document.getElementById("play-ground");
//     playGroundSection.classList.remove("hidden");
//     // console.log(playGroundSection.classList);
// }


function continueGame(){
    const alfabet = getArandomAlfabet();
    console.log("Your Random Alfabet" , alfabet);

    const currentAlfabetElement = document.getElementById("current-alfabet");
    currentAlfabetElement.innerText = alfabet;

    setBackgrounColorById(alfabet);
    
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}