function changeSomeLanguage() {
    if (state.language === "ru") {
      language.options.selectedIndex = 0;
      yourName.placeholder = "[Введите имя]";
      selectBlockOne.firstElementChild.innerHTML = "Выберите язык";
      tagBlock.firstElementChild.innerHTML = "Введите тег для смены тематики";
      language[0].innerHTML = "Русский";
      language[1].innerHTML = "Английский";
      selectBlockTwo.firstElementChild.innerHTML = "Выберите источник фотографий";
      for (let i = 0; i < labelOff.length; i++) {
        labelOff[i].innerHTML = "Выкл";
        labelOn[i].innerHTML = "Вкл";
      }
      radioBlock[0].firstElementChild.innerHTML = "Показать время";
      radioBlock[1].firstElementChild.innerHTML = "Показать дату";
      radioBlock[2].firstElementChild.innerHTML = "Показать приветствие";
      radioBlock[3].firstElementChild.innerHTML = "Показать цитату";
      radioBlock[4].firstElementChild.innerHTML = "Показать погоду";
      radioBlock[5].firstElementChild.innerHTML = "Показать аудио";
      radioBlock[6].firstElementChild.innerHTML = "Показать список закладок";

      linksButton.innerHTML = "Закладки";
      linksButtonText.innerHTML = "Закладки";
      blockCreateText.innerHTML = "НАЗВАНИЕ";
      blockCreateLink.innerHTML = "ССЫЛКА";
      createlinkbutton.innerHTML = "Создать";
      inputOne.placeholder = "название закладки";

      windSpeed = "Скорость ветра";
      humidityLabel = "Влажность";
      windSpeedText = "м/с";

      getQuotesRu();


    } else if (state.language === "en") {
      language.options.selectedIndex = 1;
      yourName.placeholder = "[Enter your name]";
      selectBlockOne.firstElementChild.innerHTML = "Choose language";
      tagBlock.firstElementChild.innerHTML = "Enter a tag to change the theme";
      language[0].innerHTML = "Russian";
      language[1].innerHTML = "English";
      selectBlockTwo.firstElementChild.innerHTML = "Select photo source";
      for (let i = 0; i < labelOff.length; i++) {
        labelOff[i].innerHTML = "Off";
        labelOn[i].innerHTML = "On";
      }
      radioBlock[0].firstElementChild.innerHTML = "Display time";
      radioBlock[1].firstElementChild.innerHTML = "Display date";
      radioBlock[2].firstElementChild.innerHTML = "Display greeting";
      radioBlock[3].firstElementChild.innerHTML = "Display quote";
      radioBlock[4].firstElementChild.innerHTML = "Display weather";
      radioBlock[5].firstElementChild.innerHTML = "Display audio";
      radioBlock[6].firstElementChild.innerHTML = "Display Links";

      linksButton.innerHTML = "Links";
      linksButtonText.innerHTML = "New Link";
      editButton.innerHTML = "Edit";
      deleteButton.innerHTML = "Delete";
      blockCreateText.innerHTML = "NAME";
      blockCreateLink.innerHTML = "LINKS";
      createlinkbutton.innerHTML = "Create";
      inputOne.placeholder = "name of the bookmark";

      windSpeedText = "m/s";
      getQuotesEn();
      
    }
  }
  
 