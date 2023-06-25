const timeList = $("#timeCard");
const currentDay = $('#currentDay');
const currentHour = dayjs().format("H");

currentDay.text(dayjs().format("MMM D, h [:] mm"));

function setTimeClass(hour, className) {
  const hourElement = timeList.children(`#hour-${hour}`);
  hourElement.addClass(className);
  getLocal(hour);
}

function timeIntervals() {
  const timeSlots = 9;
  for (let i = 9; i < timeSlots + 9; i++) {
    console.log(`currentHour: ${currentHour}\nHour Checked: ${i}`);
    if (currentHour < i) {
      setTimeClass(i, 'future');
    } else if (currentHour == i) {
      setTimeClass(i, 'present');
    } else {
      setTimeClass(i, 'past');
    }
  }
}

function saveLocal(event) {
  event.preventDefault();
  const idHour = this.parentElement.id.split('-')[1];
  const inputStr = `#input-${idHour}`;
  const hourInput = $(inputStr).val();
  console.log(idHour, hourInput);
  localStorage.setItem(idHour, hourInput);
}

function getLocal(hour) {
  const hourValue = localStorage.getItem(hour);
  const inputStr = `#input-${hour}`;
  $(inputStr).append(hourValue);
}

timeIntervals();
$(":button").on("click", saveLocal);
