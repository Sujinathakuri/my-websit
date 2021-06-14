//Selectors

const musicInput = document.querySelector(".music-input");
const musicButton = document.querySelector(".music-button");
const musicList = document.querySelector(".music-list");


//Event Listeners

musicButton.addEventListener('click', addMusic);
musicList.addEventListener('click', deleteCheck);

//Functions

function addMusic(event) {
    event.preventDefault();
    //Music DIV
    const musicDiv = document.createElement("div");
    musicDiv.classList.add("music");
    //Create LI
    const newMusic = document.createElement('li');
    newMusic.innerrText = 'song';
    newMusic.classList.add('music-item');
    musicDiv.appendChild(newMusic);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"></i>'
    completedButton.classList.add("completed-btn");
    musicDiv.appendChild(completedButton);

    //CHECHA TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    musicDiv.appendChild(trashButton);

    //APPEND MUSIC LIST
    musicList.appendChild(musicDiv);

    //CLEAR TODO INPUT VALUE
    musicInput.value = "";

}