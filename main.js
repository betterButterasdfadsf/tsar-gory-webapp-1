let timeEl = document.getElementById('timer');
let leaderEl = document.getElementById('leader');

let counter = 60;
let interval = setInterval(() => {
  counter--;
  let min = String(Math.floor(counter / 60)).padStart(2, "0");
  let sec = String(counter % 60).padStart(2, "0");
  timeEl.textContent = `${min}:${sec}`;

  if (counter <= 0) clearInterval(interval);
}, 1000);

function makeBet() {
  leaderEl.textContent = 'Вы!';
}