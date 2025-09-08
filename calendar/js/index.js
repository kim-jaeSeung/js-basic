const calendarContainer = document.getElementById("calendarContainer");
const calendarTitle = document.getElementById("calendarTitle");
const todayButton = document.getElementById("todayButton");
const prevMonthButton = document.getElementById("prevMonthButton");
const nextMonthButton = document.getElementById("nextMonthButton");
const prevYearButton = document.getElementById("prevYearButton");
const nextYearButton = document.getElementById("nextYearButton");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

function renderCalendar(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDate = lastDayOfMonth.getDate();
  calendarTitle.textContent = `${year}년 ${month + 1}월`;

  let html = `<div class="calendar-grid">`;
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  daysOfWeek.forEach((day) => {
    html += `<div class="day-header">${day}</div>`;
  });

  for (let i = 0; i < firstDayOfWeek; i++) {
    html += `<div class="date-cell otherMonth"></div>`;
  }

  for (let date = 1; date <= lastDate; date++) {
    const today = new Date();
    const isToday =
      date === today.getDate() &&
      year === today.getFullYear() &&
      month === today.getMonth();
    html += `<div class="date-cell ${isToday ? "today" : ""}">${date}</div>`;
  }

  html += `</div>`;
  calendarContainer.innerHTML = html;
}

prevYearButton.addEventListener("click", () => {
  currnetYear--;
  renderCalendar(currentYear, currentMonth);
});
nextYearButton.addEventListener("click", () => {
  currentYear++;
  renderCalendar(currentYear, currentMonth);
});

prevMonthButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
});

nextMonthButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentYear, currentMonth);
});

todayButton.addEventListener("click", () => {
  const today = new Date();
  currentYear = today.getFullYear();
  currentMonth = today.getMonth();
  renderCalendar(currentYear, currentMonth);
});

renderCalendar(currentYear, currentMonth);
