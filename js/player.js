import playList from "./playList.js";

const audio = document.querySelector("audio");
const play = document.querySelector(".play");
const playPrev = document.querySelector(".play-prev");
const playNext = document.querySelector(".play-next");
const playListContainer = document.querySelector(".play-list");
const playerTitle = document.querySelector(".player-title");
const volumeIcon = document.querySelector(".volume-icon");
const playListContainerLists = document.getElementsByClassName("play-item");
const playerTime = document.getElementById("player-time");
const playerTimeTotalID = document.getElementById("player-time-total");
const playerControls = document.getElementById("player-controls");
const volumeControls = document.getElementById("volume-controls");


let isPlay = false;
let playNum = 0;
let lastClicked;

let playerTimeTotal = playList[playNum].duration;
playerTimeTotalID.innerHTML = playerTimeTotal;

let playerCurrentTime = 0;
let seconds;
let minutes;

function removeClasses() {
  for (let i = 0; i < playListContainerLists.length; i++) {
    playListContainerLists[i].classList.remove("activeSong");
    playListContainerLists[i].children[0].classList.remove(
      "playlist-buttonOff"
    );
  }
}

function removeClassesButton(position) {
  for (let i = 0; i < playListContainerLists.length; i++) {
    playListContainerLists[i].classList.remove("activeSong");
    playListContainerLists[i].children[0].classList.remove(
      "playlist-buttonOff"
    );
  }
  playListContainer.children[position].classList.add("activeSong");
}

function playerTimeFunction() {
  playerCurrentTime = Math.round(audio.currentTime);
  if (minutes < 10) {
    minutes = `0${Math.floor(playerCurrentTime / 60)}`;
  } else {
    minutes = Math.floor(playerCurrentTime / 60);
  }
  if (playerCurrentTime < 10) {
    seconds = `0${playerCurrentTime}`;
  } else if (10 <= playerCurrentTime && playerCurrentTime < 60) {
    seconds = playerCurrentTime;
  } else if (playerCurrentTime >= 60) {
    seconds = playerCurrentTime - 60 * minutes;
  }
  playerTime.innerHTML = `${minutes}:${seconds}`;

  if (isPlay === false) {
  } else if (isPlay === true) {
    if (isNaN(audio.currentTime / (audio.duration / 100))) {
    } else if (audio.currentTime / (audio.duration / 100) !== NaN) {
      playerControls.value = audio.currentTime / (audio.duration / 100);
    }
    setTimeout(playerTimeFunction, 1000);
  }
}

playerTimeFunction();

playerControls.addEventListener("input", function (e) {
  if (isPlay === false) {
  } else {
    audioPlayPause();
  }
});

playerControls.addEventListener("change", function (e) {
  audio.currentTime = Math.round((audio.duration / 100) * playerControls.value);
  playerTimeFunction();
  audioPlayPause();
});

function changeTotalTime() {
  playerTimeTotal = playList[playNum].duration;
  playerTitle.innerHTML = playList[playNum].title;
  playerTimeTotalID.innerHTML = playerTimeTotal;
}

function audioPlayPause() {
  lastClicked = playNum;
  if (isPlay === false) {
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    playListContainer.children[playNum].classList.add("activeSong");
    playerTimeFunction();
    playListContainerLists[playNum].children[0].classList.add(
      "playlist-buttonOff"
    );
  } else if (isPlay === true) {
    audio.pause();
    isPlay = false;
    play.classList.remove("pause");
    playerTimeFunction();
    playListContainerLists[playNum].children[0].classList.remove(
      "playlist-buttonOff"
    );
  }
}

function audioPlayPrev() {
  if (playNum === 0) {
    removeClassesButton(playNum);
    playNum = 3;
    lastClicked = playNum;
    playListContainer.children[playNum].children[0].classList.add(
      "playlist-buttonOff"
    );
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    playListContainer.children[playNum].classList.add("activeSong");
    playListContainer.children[0].classList.remove("activeSong");
  } else {
    removeClassesButton(playNum);
    playNum--;
    lastClicked = playNum;
    playListContainer.children[playNum].children[0].classList.add(
      "playlist-buttonOff"
    );
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    playListContainer.children[playNum].classList.add("activeSong");
    playListContainer.children[playNum + 1].classList.remove("activeSong");
  }
}

audio.addEventListener("playing", changeTotalTime);
audio.addEventListener("playing", playerTimeFunction);

function audioPlayNext() {
  if (playNum === 3) {
    removeClassesButton(playNum);
    playNum = 0;
    lastClicked = playNum;
    playListContainer.children[playNum].children[0].classList.add(
      "playlist-buttonOff"
    );
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    playListContainer.children[playNum].classList.add("activeSong");
    playListContainer.children[3].classList.remove("activeSong");
  } else {
    removeClassesButton(playNum);
    playNum++;
    lastClicked = playNum;
    playListContainer.children[playNum].children[0].classList.add(
      "playlist-buttonOff"
    );
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    playListContainer.children[playNum].classList.add("activeSong");
    playListContainer.children[playNum - 1].classList.remove("activeSong");
  }
}

play.addEventListener("click", audioPlayPause);
playPrev.addEventListener("click", audioPlayPrev);
playNext.addEventListener("click", audioPlayNext);

audio.addEventListener("ended", audioPlayNext);

volumeControls.value = audio.volume * 100;

volumeControls.addEventListener("input", function (e) {
  audio.volume = volumeControls.value / 100;
  if (audio.volume === 0) {
    volumeIcon.classList.remove("volume-on");
    volumeIcon.classList.add("volume-off");
  } else if (audio.volume > 0) {
    volumeIcon.classList.add("volume-on");
    volumeIcon.classList.remove("volume-off");
  }
});

volumeControls.addEventListener("change", function (e) {
  audio.volume = volumeControls.value / 100;
  if (audio.volume === 0) {
    volumeIcon.classList.remove("volume-on");
    volumeIcon.classList.add("volume-off");
  } else if (audio.volume > 0) {
    volumeIcon.classList.add("volume-on");
    volumeIcon.classList.remove("volume-off");
  }
});

let lastPosition;

volumeIcon.addEventListener("click", function (e) {
  if (audio.volume === 0) {
    audio.volume = lastPosition;
    volumeIcon.classList.add("volume-on");
    volumeIcon.classList.remove("volume-off");
    volumeControls.value = audio.volume * 100;
  } else if (audio.volume > 0) {
    lastPosition = audio.volume;
    audio.volume = 0;
    volumeIcon.classList.remove("volume-on");
    volumeIcon.classList.add("volume-off");
    volumeControls.value = audio.volume * 100;
  }
});

for (let i = 0; i < playList.length; i++) {
  const li = document.createElement("li");
  const hiddenli = document.createElement("li");
  const button = document.createElement("button");
  li.classList.add("play-item");
  hiddenli.classList.add("hiddenLi");
  hiddenli.textContent = playList[i].title;
  button.classList.add("playlist-button");
  playListContainer.append(li);
  li.append(hiddenli, button, playList[i].title);
  button.append(hiddenli);
}

document.onclick = function (event) {
  if (event.target.classList.contains("play-item")) {
    removeClasses();
    playNum = playList
      .map(function (e) {
        return e.title;
      })
      .indexOf(event.target.firstChild.children[0].innerHTML);
    lastClicked = playNum;
    event.target.classList.add("activeSong");
    event.target.children[0].classList.add("playlist-buttonOff");
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    changeTotalTime();
  }

  if (event.target.classList.contains("playlist-button")) {
    playNum = playList
      .map(function (e) {
        return e.title;
      })
      .indexOf(event.target.firstChild.innerHTML);

    if (playNum === lastClicked) {
      if (isPlay === true) {
        audioPlayPause();
        event.target.classList.remove("playlist-buttonOff");
      } else if (isPlay === false) {
        audioPlayPause();
        event.target.classList.add("playlist-buttonOff");
      }
    } else if (playNum !== lastClicked) {
      audio.src = playList[playNum].src;
      lastClicked = playNum;
      audio.play();
      if (isPlay === true) {
        removeClassesButton(playNum);
        play.classList.add("pause");
        changeTotalTime();
        event.target.classList.add("playlist-buttonOff");
      } else if (isPlay === false) {
        isPlay = true;
        play.classList.add("pause");
        removeClassesButton(playNum);
        changeTotalTime();
        event.target.classList.add("playlist-buttonOff");
      }
    }
  }
};
