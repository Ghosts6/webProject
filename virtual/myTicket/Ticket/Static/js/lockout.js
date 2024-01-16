function updateClock() {
  const clockElement = document.getElementById('clock');
  const iranTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Tehran',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
  clockElement.textContent = `Iran Time: ${iranTime}`;
}


setInterval(updateClock, 1000);


updateClock();
