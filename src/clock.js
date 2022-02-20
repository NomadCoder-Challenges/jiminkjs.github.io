const clockTitle = document.querySelector("#clock-title");

function getNowTime() {
  const date = new Date();
  let nowHour = String(date.getHours()).padStart(2, "0");
  const nowMin = String(date.getMinutes()).padStart(2, "0");
  const nowSec = String(date.getSeconds()).padStart(2, "0");
  let isAmPm = "";

  if (nowHour >= 12) {
    isAmPm = "PM";
  } else {
      isAmPm = "AM";
  }

  clockTitle.innerText = `${isAmPm} 
                          ${nowHour}:${nowMin}:${nowSec}`;

}

getNowTime();
setInterval(getNowTime, 1000);