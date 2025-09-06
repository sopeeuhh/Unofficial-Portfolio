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

  overlay.appendChild(intermissionGif);
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    intermissionGif.style.opacity = '1';
  }, 600);

  setTimeout(() => {
    window.location.href = 'portfolio.html';
  }, 1500);
}

function goToPortfolio() {

  const overlay = document.createElement('div');
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
  align-items: center;
  `;

  const intermissionGif = document.createElement('img');
  intermissionGif.src = 'intermission.gif';
  intermissionGif.style.cssText = `
  max-width: 150 px;
  max-height: 150px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  `;

  overlay.appendChild(intermissionGif);
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    intermissionGif.style.opacity = '1';
  }, 600);
  setTimeout(() => {
    sessionStorage.setItem('showTransition', 'true');
    window.location.href = 'about.html';},1500);
  }

document.addEventListener('DOMContentLoaded', function(){
  updateCalendar();
  setInterval(updateCalendar, 60000);

  const portfolioLink = document.querySelector('a[href="portfolio.html"]')
if (portfolioLink) {
  portfolioLink.addEventListener('click', function(e) {
    e.preventDefault();
    goToPortfolio();
  });
}
  });

window.addEventListener('popstate', function(event) {
  if (this.window.location.pathname.includes('portfolio.html')) {
    event.preventDefault();
    goBackToLanding();
  }
});

function goBackToLanding() {
  const overlay = document.createElement('div');
  overlay.style.cssText= `
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
  align-items: center;
  `;

  const intermissionGif = document.createElement ('img');
  intermissionGif.src = 'intermission.gif';
  intermissionGif.style.cssText = `
  max-width: 150px;
  max-height: 150px;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  `;
  overlay.appendChild(intermissionGif);
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    intermissionGif.style.opacity = '1';
  }, 600);

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
}

function showPlayer(playerType) {
  const magnoliaPlayer = document.getElementById('magnolia-player');
  const lovergirlPlayer = document.getElementById('lovergirl-player');
  const bonfirePlayer = document.getElementById('bonfire-player');
}

const magnoliaAudio = document.getElementById( 'magnolia-audio');
const lovergirlAudio = document.getElementById('lovergirl-audio');
const bonfireAudio = document.getElementById('bonfire-audio');

const magnoliaRecord = document.querySelector('img[onclick="showPlaywer(\' magnolia\')"]');
const lovergirlRecord = document.querySelector('img[onclick="showPlayer(\'lovergirl\')"]');
const bonfireRecord = document.querySelector('img[onclick="showPlayer(\'bonfire\')"]');

if(magnoliaPlayer) magnoliaPlayer.classList.remove('active');
if (lovergirlPlayer) lovergirlPlayer.classList.remove('active');
if (bonfirePlayer) bonfirePlayer.classList.remove('active');

if (magnoliaRecord) magnoliaRecord.classList.remove('playing');
if (lovergirlRecord) lovergirlRecord.classList.remove('playing');
if (bonfireRecord)bonfireRecord.classList.remove('playing');

if(magnoliaAudio) {
  magnoliaAudio.pause();
  magnoliaAudio.currentTime = 0;
}

if (lovergirlAudio) {
  lovergirlAudio.pause();
  lovergirlAudio.currentTime = 0;
}

if (bonfireAudio) {
  bonfireAudio.pause();
  bonfireAudio.currentTime = 0;
}

switch(playerType) {
  case 'magnolia' :
    if(magnoliaPlayer) magnoliaPlayer.classList.add('active');
    if (magnoliaRecord) magnoliaRecord.classList.add('playing');
    if (magnoliaAudio) {
      magnoliaAudio.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
      magnoliaAudio.onended = () => {
        magnoliaRecord.classList.remove('playing');
      };
    }
    break;
  case 'lovergirl' :
    if (lovergirlPlayer) lovergirlPlayer.classList.add('active');
    if (lovergirlRecord) lovergirlRecord.classList.add('playing');
    if (lovergirlAudio) {
      lovergirlAudio.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
      lovergirlAudio.onended = () => {
        if (lovergirlRecord) lovergirlRecord.classList.remove('playing');
      };
    }
    break;
    case 'bonfire' :
    if (bonfirePlayer) bonfirePlayer.classList.add('active');
    if (bonfireRecord) bonfireRecord.classList.add('playing');
    if (bonfireAudio) {
      bonfireAudio.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
      bonfireAudio.onended = () => {
        if (bonfireRecord) bonfireRecord.classList.remove('playing');
      };
    }
    break;
}
