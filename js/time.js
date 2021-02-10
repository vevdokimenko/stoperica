getCurrentTime = () => {
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }

  return hour + ":" + minute + ":" + second;
};

setInterval(function () {
  currentTime = getCurrentTime();
  document.querySelector("#digital-clock").innerHTML = currentTime;
}, 1000);
