/* .js files add interaction to your website */

// CALENDAR
function updateCalendar() {
  const now = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const month = months[now.getMonth()];
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes.toString().padStart(2, '0');

  const monthElement = document.getElementById('month');
  const dayElement = document.getElementById('day');
  const timeElement = document.getElementById('time');

  if (monthElement) monthElement.textContent = month;
  if(dayElement) dayElement.textContent = day;
  if (timeElement) timeElement.textContent = `${displayHours}:${displayMinutes}${ampm}`;
}

// NAVIGATION
function goToMainPage() {
  const overlay = document.createElement ('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
      height: 100vh;
      background: white;
      z-index: 9999;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center
      `;

}