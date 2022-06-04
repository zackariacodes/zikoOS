const dateInput = document.getElementById("date")
const batteryLevel = document.getElementById("battery-level");
const body = document.querySelector("body")

navigator.getBattery().then((battery) => {
  const showBatteryLeve = () => {
    let level = Math.floor(battery.level * 100);
    batteryLevel.innerText = level;
  };

  showBatteryLeve();
  battery.ondischargingtimechange = () => {
    showBatteryLeve();
  };

  battery.onchargingtimechange = () => {
    showBatteryLeve();
  };
});

dateInput.innerText = moment().format("D MMM h:mm A");

setInterval(() => {
  //set date
dateInput.innerText = moment().format("D MMM h:mm A");
}, 1000*60 );

//progress bar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}