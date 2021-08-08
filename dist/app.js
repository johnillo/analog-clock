var second, minute, hour, dow, day;
var DAY_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getRotation60Deg(value) {
  return (value * 6) % 360 - (90);
}

function getRotation12Deg(value) {
  return (value * 30) % 360 - (90);
}

function setDayNightScheme(date) {
  if (date.getHours() >= 18 || date.getHours() < 6) {
    return document.body.classList.add('night');
  }
  document.body.classList.remove('night');
}

function render() {
  var date = new Date();
  setDayNightScheme(date);
  var seconds = date.getSeconds() + (date.getMilliseconds() / 1000);
  var minutes = date.getMinutes() + (date.getSeconds() / 60);
  var hours = date.getHours() + (date.getMinutes() / 60);
  second.style.transform = 'rotate(' + getRotation60Deg(seconds) + 'deg)';
  minute.style.transform = 'rotate(' + getRotation60Deg(minutes) + 'deg)';
  hour.style.transform = 'rotate(' + getRotation12Deg(hours) + 'deg)';
  dow.innerHTML = DAY_OF_WEEK[date.getDay()];
  day.innerHTML = ('00' + date.getDate()).slice(-2);
}

window.onload = function () {
  second = document.getElementById('second');
  minute = document.getElementById('minute');
  hour = document.getElementById('hour');
  dow = document.getElementById('dow');
  day = document.getElementById('day');
  render();
  setInterval(render, 16);
  setTimeout(function () {
    document.body.classList.add('transition');
  }, 1000);
}