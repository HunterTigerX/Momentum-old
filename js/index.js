console.log("В качестве дополнительного функционала сделан список ссылок в верхнем левом углу. Если сайт будет подвисать в начале, это потому что гитхаб не резиновый и подгружает плейлист.")

const state = {
  language: "ru",
  photoSource: "GitHub",
  pictureTag: "",
  DisplayTime: "",
  DisplayDate: "",
  Displaygreeting: "",
  Displayquote: "",
  Displayweather: "",
  Displayaudio: "",
  Displaytodolist: ""
};

let settings = document.querySelector(".settings");
let playerX = document.querySelector(".playerX");
let language = document.querySelector(".select_language");
let tagBlock = document.querySelector(".tag_block");
let photoSource = document.querySelector(".select_photo_source");
let openSettings = document.querySelector(".openSettings");
let closeSettings = document.querySelector(".settings_button_close");
let greetingX = document.querySelector(".greetingX");
let quoteX = document.querySelector(".quoteX");
let selectBlockOne = document.querySelector(".select_block_one");
let selectBlockTwo = document.querySelector(".select_block_two");
let time = document.querySelector(".time");
let date = document.querySelector(".date");
let audio = document.querySelector(".audio");
let linksButton = document.querySelector(".links_button");
let linksButtonText = document.querySelector(".link_button--text");
let addNewLink = document.querySelector(".addNewLink");
let blockList = document.querySelector(".block__list");
let editOrDeleteBlock = document.querySelector(".editOrDelete--block");
let editDots = document.querySelector(".editDots");
let editButton = document.querySelector(".edit");
let blockCreateText = document.querySelector(".blockCreateText");
let blockCreateLink = document.querySelector(".blockCreateLink");
let deleteButton = document.querySelector(".delete");
let blockCreate = document.querySelector(".block__create");
let returnToList = document.querySelector(".block__create--button");
let createlinkbutton = document.querySelector(".create__link--button");
let inputOne = document.querySelector(".input__one");
let inputTwo = document.querySelector(".input__two");
let linksBlock = document.querySelector(".links_block");
let DisplayTime = document.querySelector(".DisplayTime");
let DisplayTimeOn = document.getElementById("DisplayTimeOn");
let DisplayTimeOff = document.getElementById("DisplayTimeOff");
let DisplayDate = document.querySelector(".DisplayDate");
let editDeleteButtonsText = document.querySelector(".editDeleteButtonsText");
let DisplayDateOn = document.getElementById("DisplayDateOn");
let DisplayDateOff = document.getElementById("DisplayDateOff");
let Displaygreeting = document.querySelector(".Displaygreeting");
let DisplaygreetingOn = document.getElementById("DisplaygreetingOn");
let DisplaygreetingOff = document.getElementById("DisplaygreetingOff");
let Displayquote = document.querySelector(".Displayquote");
let DisplayquoteOn = document.getElementById("DisplayquoteOn");
let DisplayquoteOff = document.getElementById("DisplayquoteOff");
let Displayweather = document.querySelector(".Displayweather");
let DisplayweatherOn = document.getElementById("DisplayweatherOn");
let DisplayweatherOff = document.getElementById("DisplayweatherOff");
let Displayaudio = document.querySelector(".Displayaudio");
let DisplayaudioOn = document.getElementById("DisplayaudioOn");
let DisplayaudioOff = document.getElementById("DisplayaudioOff");
let Displaytodolist = document.querySelector(".Displaytodolist");
let DisplaytodolistOn = document.getElementById("DisplaytodolistOn");
let DisplaytodolistOff = document.getElementById("DisplaytodolistOff");
const greeting = document.querySelector(".greeting");
const yourName = document.querySelector(".yourName");
const greetingContainer = document.querySelector(".greeting-container");
const labelOff = document.getElementsByClassName("labelOff");
const labelOn = document.getElementsByClassName("labelOn");
const radioBlock = document.getElementsByClassName("radio_block");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
const weatherError = document.querySelector(".weather-error");
const pictureTag = document.querySelector(".pictureTag");
const weather = document.querySelector(".weather");
const timeH = document.querySelector(".time");
const dateH = document.querySelector(".date");
let browserLanguage = document.documentElement.lang;


let windSpeed, weekday, clickedLinkBlock, quotes, timeOfDay, greetings, picsLink, urlUnsplash, urlFlicker, urlFlickerData, urlUnsplashData, CustomPicsLink;
