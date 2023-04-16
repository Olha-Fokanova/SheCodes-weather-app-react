function addZero(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

export default function FormatDate(timestamp) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let now;
  if (typeof timestamp == "undefined") {
    now = new Date();
  } else {
    now = new Date(timestamp);
  }
  let day = days[now.getDay()];

  let month = months[now.getMonth()];
  let date = now.getDate();
  let hour = addZero(now.getHours());
  let minute = addZero(now.getMinutes());
  return `${day}, ${month} ${date}, ${hour}:${minute}`;
}
