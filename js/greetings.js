function getTimeOfDay() {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 12) {
    picsLink = "morning";
    if (state.language === "ru") {
      timeOfDay = "утро";
      greetings = "Доброe";
    } else if (state.language === "en"){
      timeOfDay = "morning";
    }
  } else if (hours >= 12 && hours < 18) {
    picsLink = "day";
    if (state.language === "ru") {
      greetings = "Добрый";
      timeOfDay = "день";
    } else  if (state.language === "en"){
      timeOfDay = "day";
    }
  } else if (hours >= 18 && hours < 24) {
    picsLink = "evening";
    if (state.language === "ru") {
      greetings = "Добрый";
      timeOfDay = "вечер";
    } else if (state.language === "en") {
      timeOfDay = "evening";
    }
  } else if (hours >= 0 && hours < 6) {
    picsLink = "night";
    if (state.language === "ru") {
      timeOfDay = "ночи";
      greetings = "Доброй";
    } else if (state.language === "en") {
      timeOfDay = "night";
    }
  }
  if (state.language === "en") {
    greetings = "Good";
  }

  const greetingText = `${greetings} ${timeOfDay}, `;
  greeting.textContent = greetingText;

  setTimeout(function () {
    getTimeOfDay(`${browserLanguage}`);
  }, 1000);
}

getTimeOfDay();

function setLocalStorage() {
  localStorage.setItem("yourName", yourName.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("yourName")) {
    yourName.value = localStorage.getItem("yourName");
  }
}
window.addEventListener("load", getLocalStorage);
