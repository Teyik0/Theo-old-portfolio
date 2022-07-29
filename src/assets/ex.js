/* Exercice 1 */

function epureString(string) {
  let s = "";
  for (i in string) {
    if (i == 0) {
      s += string[i].toUpperCase();
    } else s += string[i].toLowerCase();
  }
  return console.log(s);
}

console.log("Exercice 1 : ");
epureString("je Suis MaLAde");
epureString("je VaIS MANger");
console.log("");

/* Exercice 2 */

function formatDuration(second, format) {
  if (Number.isInteger(second)) {
    let hour;
    let minute;
    const time = convertSecondInTime(second);
    if (format === "hh:mm:ss") {
      return console.log(
        formatNumber(time.hour) +
          ":" +
          formatNumber(time.minute) +
          ":" +
          formatNumber(time.second)
      );
    }
    if (format === "hh:mm") {
      return console.log(
        formatNumber(time.hour) + ":" + formatNumber(time.minute)
      );
    }
    if (format === "mm:ss") {
      return console.log(
        formatNumber(time.minute) + ":" + formatNumber(time.second)
      );
    } else return console.log("Format invalide");
  } else return console.log("Un entier est attendu !");
}

function convertSecondInTime(second) {
  let hour = 0;
  let minute = 0;
  if (second >= 60) {
    minute = parseInt(second / 60).toString();
    second = second % 60;
    if (minute >= 60) {
      hour = parseInt(minute / 60);
      minute = minute % 60;
      return { hour: hour, minute: minute, second: second };
    } else return { hour: "00", minute: minute, second: second };
  } else return { hour: "00", minute: "00", second: second };
}

function formatNumber(number) {
  if (number < 10) return "0" + number.toString();
  else return number.toString();
}

console.log("Exercice 2 : ");
formatDuration("Bfzez", "test");
formatDuration(2.5, "hh:mm");
formatDuration(123, "test"), console.log("");
formatDuration(3823, "hh:mm:ss");
formatDuration(5043, "mm:ss");
formatDuration(123, "mm:ss");
