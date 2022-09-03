const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

let randomSliderNum;

function getRandomSliderNum() {
  randomSliderNum =
    Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1)) +
    Math.ceil(0);
}
getRandomSliderNum();

async function getQuotesRu() {
  quotes = "dataRu.json";
  const res = await fetch(quotes);
  const data = await res.json();

  quote.textContent = data[randomSliderNum].text;
  author.textContent = data[randomSliderNum].author;
}

async function getQuotesEn() {
  quotes = "dataEn.json";
  const res = await fetch(quotes);
  const data = await res.json();
  quote.textContent = data[randomSliderNum].text;
  author.textContent = data[randomSliderNum].author;
}


function changeSliderNum() {
  if (randomSliderNum === 2) {
    randomSliderNum = 0;
  } else {
    randomSliderNum++;
  }
  if (state.language === "ru") {
    getQuotesRu();
  } else if (state.language === "en"){
    getQuotesEn();
  }
}

changeQuote.addEventListener("click", changeSliderNum);
