function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Moscow",
  };
  const currentDate = date.toLocaleDateString(document.documentElement.lang, options);
  
  if (state.language === "ru") {
    weekday = ["Воскресенье", "Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
  } else if (state.language === "en") {
    weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  }
  timeH.textContent = currentTime;
  dateH.textContent = `${weekday[date.getDay()]}, ${currentDate}`;

  setTimeout(showTime, 1000);
}
showTime();

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
