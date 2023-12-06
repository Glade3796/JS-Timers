let go = false;
let lastButton = -1;
let anyBtn = document.querySelectorAll("button");
let stopBtn = document.getElementById("stopBtn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let scriptName = document.getElementById("scriptName");
let somethingBox = document.getElementById("somethingBox");
let plus = document.getElementById("plus");
console.log(!go ? "Swtich set to NO GO" : "Switch set to GO");
// anyBtn.addEventListener("click", () => console.log("anybtn"));

let stopping = function () {
  if (go) {
    go = false;
    lastButto = 0;
    console.log(`go is now ${go}`);
  }
  lastButton = 0;
  console.log(`go is ${go}`);
  console.log(!go ? "Swtich set to NO GO" : "Switch set to GO");
};

let intAni = function () {
  plus.textContent = `${plus} +`;
  counter++;
};
let intervalFun = function () {
  let counter = 0;
  go = true;
  lastButton = 1;
  setInterval(intAni, 150);
};
stopBtn.addEventListener("click", stopping);
btn1.addEventListener("click", intervalFun);
btn2.addEventListener("click", () => console.log("btn2"));
btn3.addEventListener("click", () => console.log("btn3"));

anyBtn.forEach(function (anyBtn) {
  anyBtn.addEventListener("click", function () {
    switch (lastButton) {
      case 0:
        scriptName.textContent = "All stop selected";
        console.log(`last button pressed was ${lastButton}`);
        break;
      case 1:
        scriptName.textContent = "Interval selected";
        console.log(`last button pressed was ${lastButton}`);
        break;
      case 2:
        scriptName.textContent = "Timeout selected";
        console.log(`last button pressed was ${lastButton}`);
        break;
      case 3:
        scriptName.textContent = "Fun settings selected";
        console.log(`last button pressed was ${lastButton}`);
        break;
      default:
        scriptName.textContent = "JS Timers for fun";
    }
  });
});
