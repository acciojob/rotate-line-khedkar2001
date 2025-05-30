const line = document.getElementById('line');
let angle = 0;

// Rotate by 2 degrees every 20ms
setInterval(() => {
  angle += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
