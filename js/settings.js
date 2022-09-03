openSettings.addEventListener("click", function () {
  if (settings.classList.contains("hide")) {
    show(settings);
  } else if (settings.classList.contains("show")) {
    hide(settings);
  }
});

closeSettings.addEventListener("click", function () {
  hide(settings);
});

changeSomeLanguage();

language.addEventListener("change", function () {
  if (language.value === "Ru") {
    document.documentElement.lang = "ru";
    state.language = "ru";

    getWeather();
    changeSomeLanguage();
    getQuotesRu();
  } else if (language.value === "En") {
    document.documentElement.lang = "en";
    state.language = "en";

    getWeather();
    changeSomeLanguage();
    getQuotesEn();
  }
});

photoSource.addEventListener("change", function () {
  if (photoSource.value === "GitHub") {
    state.photoSource = "GitHub";
    localStorage.setItem("photoSourceCheck", state.photoSource);
    setBg();
  } else if (photoSource.value === "Unsplash") {
    state.photoSource = "Unsplash";
    localStorage.setItem("photoSourceCheck", state.photoSource);
    setBg();
  } else if (photoSource.value === "Flickr") {
    state.photoSource = "Flickr";
    localStorage.setItem("photoSourceCheck", state.photoSource);
    setBg();
  }
});

function hide(variable) {
  variable.classList.add("hide");
  variable.classList.remove("show");
  variable.style.zIndex = "-999999";
}

function show(variable) {
  variable.classList.add("show");
  variable.classList.remove("hide");
  variable.style.zIndex = "999999";
}

function showHide() {
  if (state.DisplayTime === "true") {
    DisplayTimeOn.checked = true;
    show(time);
  }
  if (state.DisplayTime === "false") {
    DisplayTimeOff.checked = true;
    hide(time);
  }

  if (state.DisplayDate === "true") {
    DisplayDateOn.checked = true;
    show(date);
  }
  if (state.DisplayDate === "false") {
    DisplayDateOff.checked = true;
    hide(date);
  }

  if (state.Displaygreeting === "true") {
    DisplaygreetingOn.checked = true;
    show(greetingX);
  }
  if (state.Displaygreeting === "false") {
    DisplaygreetingOff.checked = true;
    hide(greetingX);
  }

  if (state.Displayquote === "true") {
    DisplayquoteOn.checked = true;
    show(quoteX);
  }
  if (state.Displayquote === "false") {
    DisplayquoteOff.checked = true;
    hide(quoteX);
  }

  if (state.Displayweather === "true") {
    DisplayweatherOn.checked = true;
    show(weather);
  }
  if (state.Displayweather === "false") {
    DisplayweatherOff.checked = true;
    hide(weather);
  }

  if (state.Displayaudio === "true") {
    DisplayaudioOn.checked = true;
    show(audio);
  }
  if (state.Displayaudio === "false") {
    DisplayaudioOff.checked = true;
    hide(audio);
  }

  if (state.Displaytodolist === "true") {
    DisplaytodolistOn.checked = true;
     show(linksButton);
  }
  if (state.Displaytodolist === "false") {
    DisplaytodolistOff.checked = true;
     hide(linksButton);
  }
}

DisplayTime.addEventListener("change", function () {
  if (DisplayTimeOn.checked) {
    state.DisplayTime = "true";
  } else if (!DisplayTimeOn.checked) {
    state.DisplayTime = "false";
  }
  showHide();
});

DisplayDate.addEventListener("change", function () {
  if (DisplayDateOn.checked) {
    state.DisplayDate = "true";
  } else if (!DisplayDateOn.checked) {
    state.DisplayDate = "false";
  }
  showHide();
});

Displaygreeting.addEventListener("change", function () {
  if (DisplaygreetingOn.checked) {
    state.Displaygreeting = "true";
  }
  if (!DisplaygreetingOn.checked) {
    state.Displaygreeting = "false";
  }
  showHide();
});

Displayquote.addEventListener("change", function () {
  if (DisplayquoteOn.checked) {
    state.Displayquote = "true";
  }
  if (!DisplayquoteOn.checked) {
    state.Displayquote = "false";
  }
  showHide();
});

Displayweather.addEventListener("change", function () {
  if (DisplayweatherOn.checked) {
    state.Displayweather = "true";
  }
  if (!DisplayweatherOn.checked) {
    state.Displayweather = "false";
  }
  showHide();
});

Displayaudio.addEventListener("change", function () {
  if (DisplayaudioOn.checked) {
    state.Displayaudio = "true";
  }
  if (!DisplayaudioOn.checked) {
    state.Displayaudio = "false";
  }
  showHide();
});

Displaytodolist.addEventListener("change", function () {
  if (DisplaytodolistOn.checked) {
    state.Displaytodolist = "true"
  }
  if (!DisplaytodolistOn.checked) {
    state.Displaytodolist = "false"
  }
  showHide();
});

function setLocalSettingsX() {
  localStorage.setItem("languageCheck", state.language);
  localStorage.setItem("photoSourceCheck", state.photoSource);
  localStorage.setItem("pictureTagCheck", pictureTag.value);
  localStorage.setItem("DisplayTimeCheck", DisplayTimeOn.checked);
  localStorage.setItem("DisplayDateCheck", DisplayDateOn.checked);
  localStorage.setItem("DisplaygreetingCheck", DisplaygreetingOn.checked);
  localStorage.setItem("DisplayquoteCheck", DisplayquoteOn.checked);
  localStorage.setItem("DisplayweatherCheck", DisplayweatherOn.checked);
  localStorage.setItem("DisplayaudioCheck", DisplayaudioOn.checked);
  localStorage.setItem("DisplaytodolistCheck", DisplaytodolistOn.checked);
}



function getLocalSettingsX() {
  if (localStorage.getItem("languageCheck") === null) {} else if (localStorage.getItem("languageCheck") !== null) {
    state.language = localStorage.getItem("languageCheck");
  }
  if (localStorage.getItem("photoSourceCheck") === null) {} else if (localStorage.getItem("photoSourceCheck") !== null) {
    state.photoSource = localStorage.getItem("photoSourceCheck");
  }
  if (localStorage.getItem("pictureTagCheck") === null) {} else if (localStorage.getItem("pictureTagCheck") !== null) {
    state.pictureTag = localStorage.getItem("pictureTagCheck");
  }
  if (localStorage.getItem("DisplayTimeCheck") === null) {} else if (localStorage.getItem("DisplayTimeCheck") !== null) {
    state.DisplayTime = localStorage.getItem("DisplayTimeCheck");
  }
  if (localStorage.getItem("DisplayDateCheck") === null) {} else if (localStorage.getItem("DisplayDateCheck") !== null) {
    state.DisplayDate = localStorage.getItem("DisplayDateCheck");
  }
  if (localStorage.getItem("DisplaygreetingCheck") === null) {} else if (localStorage.getItem("DisplaygreetingCheck") !== null) {
    state.Displaygreeting = localStorage.getItem("DisplaygreetingCheck");
  }
  if (localStorage.getItem("DisplayquoteCheck") === null) {} else if (localStorage.getItem("DisplayquoteCheck") !== null) {
    state.Displayquote = localStorage.getItem("DisplayquoteCheck");
  }
  if (localStorage.getItem("DisplayweatherCheck") === null) {} else if (localStorage.getItem("DisplayweatherCheck") !== null) {
    state.Displayweather = localStorage.getItem("DisplayweatherCheck");
  }
  if (localStorage.getItem("DisplayaudioCheck") === null) {} else if (localStorage.getItem("DisplayaudioCheck") !== null) {
    state.Displayaudio = localStorage.getItem("DisplayaudioCheck");
  }
  if (localStorage.getItem("DisplaytodolistCheck") === null) {} else if (localStorage.getItem("DisplaytodolistCheck") !== null) {
    state.Displaytodolist = localStorage.getItem("DisplaytodolistCheck");
  }
  if (localStorage.getItem("pictureTagCheck") === null) {} else if (localStorage.getItem("pictureTagCheck") !== null) {
    pictureTag.value = localStorage.getItem("pictureTagCheck");
  }



}
