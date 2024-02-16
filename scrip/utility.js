
function hideElementById(elementId){
 const element = document.getElementById(elementId)
 element.classList.add("hidden");
}


function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove("hidden");
}

function setBackgrounColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getArandomAlfabet(){
    const alfabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alfabets = alfabetString.split("");
    console.log(alfabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alfabet = alfabets[index];
    // console.log(index, alfabet);
    return alfabet;
}