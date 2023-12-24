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

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
