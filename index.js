//Selectors

const musicInput = document.querySelector(".music-input");
const musicButton = document.querySelector(".music-button");
const musicList = document.querySelector(".music-list");
const filterOption = document.querySelector(".filter.music")


//Event Listeners

musicButton.addEventListener('click', addMusic);
musicList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addMusic(event) {
    event.preventDefault();
    //Music DIV
    const musicDiv = document.createElement("div");
    musicDiv.classList.add("music");
    //Create LI
    const newMusic = document.createElement('li');
    newMusic.innerText = musicInput.value;
    newMusic.classList.add('music-item');
    musicDiv.appendChild(newMusic);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"></i>'
    completedButton.classList.add("completed-btn");
    musicDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    musicDiv.appendChild(trashButton);

    //APPEND MUSIC LIST
    musicList.appendChild(musicDiv);

    //CLEAR MUSIC INPUT VALUE
    musicInput.value = "";


}


function deleteCheck(e) {
    const item = e.target;

    //DELETE MUSIC
    if (item.classList[0] === "trash-btn") {
        const music = item.parentElement;
        music.classList.add('fall');
        music.remove();
    }

    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const music = item.parentElement;
        music.classList.toggle("completed");
    }
}

function filtermusic(e) {
    const music = musicList.childNodes;
    music.forEach(function(music) {
        switch (e.target.value) {
            case "all":
                music.style.display = "flex";
                break;
            case "jazz":
                if (music.classList.contains('jazz')) {
                    music.style.display = 'flex';
                } else {
                    music.style.display = "none";
                }
                break;
            case "rock":
                if (!music.classList.contains("rock")) {
                    music.style.display = 'flex';
                } else {
                    music.style.display = "none";
                }
                break;
        }
    });
}