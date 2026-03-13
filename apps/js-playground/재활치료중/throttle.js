function throttle(callback, delay) {
  let waiting = false;

  return function(...args) {
    if (waiting) {
      console.log("조건문 진입(blocked): throttled, waiting for", delay, "ms");
      return;
    }

    waiting = true;
    callback(...args);

    setTimeout(() => {
      waiting = false
      console.log("setTimeout 진입(unblocked): waiting for", delay, "ms is over")
    }, delay);
  }
}

function consoleLog(msg) {
  console.log(msg);
}

const throttleLog = throttle((msg) => consoleLog(msg), 1000);

const throttleLog1 = throttle(consoleLog, 5000);

throttleLog("실행(throttleLog): delay 1000 message");
throttleLog1("실행(throttleLog1): delay 5000 message");

console.log("\n==================================\n")

const throttleData = throttle((value) => {
  console.log("throttleData 실행됨:", value, "at", new Date().toLocaleTimeString());
}, 1000);

const throttleLog2 = throttle(consoleLog, 1000);
for (let i = 0; i < 10; i++) {
  throttleData(`message ${i}`);
}

for (let i = 0; i < 5; i++) {
  throttleLog2(i + 1);
}