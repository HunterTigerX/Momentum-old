const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
const selectPhotoSource = document.querySelector(".select_photo_source");

let randomNum, randomNumForExternalUse;

function getRandomNum() {
  randomNum =
    Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1) + 1)) +
    Math.ceil(1);
    randomNumForExternalUse = randomNum;
  if (randomNum < 10) {
    randomNumForExternalUse = `${randomNum}`;
    randomNum = `0${randomNum}`;
  }
}
getRandomNum();


CustomPicsLink = picsLink;

pictureTag.addEventListener("change", function () {
  state.pictureTag = pictureTag.value;
  if (state.photoSource === "Unsplash") {
    getLinkToImageUnsplash();
  } else if (state.photoSource === "Flickr") {
    getLinkToImageFlicker();
  }
});

async function getLinkToImageFlicker() {
   if (state.pictureTag.length > 0) {
    urlFlicker = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c48507caabd2faf162b82620ffe211cb&tags=${pictureTag.value}&extras=url_l&format=json&nojsoncallback=1`;
   }
  else if (state.pictureTag.length === 0) {
    urlFlicker = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c48507caabd2faf162b82620ffe211cb&tags=${CustomPicsLink}&extras=url_l&format=json&nojsoncallback=1`;
  }
 
  const res = await fetch(urlFlicker);
  const data = await res.json();
  urlFlickerData = data.photos;
}
getLinkToImageFlicker();

async function getLinkToImageUnsplash() {
  if (state.pictureTag.length > 0) {
    urlUnsplash = `https://api.unsplash.com/photos/random?query=${pictureTag.value}&client_id=0dNm8xrRFPC6zTV855afDxvCWGMRqIRyWIDeHLvKps4`;
  } else if (state.pictureTag.length === 0) {
    urlUnsplash = `https://api.unsplash.com/photos/random?query=${CustomPicsLink}&client_id=0dNm8xrRFPC6zTV855afDxvCWGMRqIRyWIDeHLvKps4`;
  }
  const res = await fetch(urlUnsplash);
  const data = await res.json();
  urlUnsplashData = data.urls.regular;
}
getLinkToImageUnsplash();

function getSlidePrev() {

  if (randomNum > 1) {
    randomNum--;
    randomNumForExternalUse = randomNum;
    if (randomNum < 10) {
      randomNum = `0${randomNum}`;
    }
  } else {
    randomNum = 20;
    randomNumForExternalUse = randomNum;
  }
  setBg();
}

function getSlideNext() {
  if (randomNum < 20) {
    randomNum++;
    randomNumForExternalUse = randomNum;
    if (randomNum < 10) {
      randomNum = `0${randomNum}`;
    }
  } else {
    randomNum = "01";
    randomNumForExternalUse = "1";
  }
  setBg();
}

slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);

const img = new Image();

function setBg() {
  if (state.photoSource === "GitHub") {

    img.src = `https://raw.githubusercontent.com/HunterTigerX/stage1-tasks/assets/images/${picsLink}/${randomNum}.jpg`;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${img.src})`;
    };
  } else if (state.photoSource === "Unsplash") {
    selectPhotoSource.options.selectedIndex = 1;
    getLinkToImageUnsplash();
    document.body.style.backgroundImage = `url(${urlUnsplashData})`;
  } else if (state.photoSource === "Flickr") {
    selectPhotoSource.options.selectedIndex = 2;
    document.body.style.backgroundImage = `url(${urlFlickerData.photo[randomNumForExternalUse].url_l})`;
  }
}

setBg();
