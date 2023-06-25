const timeList = $("#timeCard");
const currentDay = $('#currentDay');
const currentHour = dayjs().format("H");

currentDay.text(dayjs().format("MMM D, h [:] mm"));

function setTimeClass(hour, className) {
  const hourElement = timeList.children(`#hour-${hour}`);
  hourElement.addClass(className);
  getLocal(hour);
}

