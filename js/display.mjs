/*
Created by B. Flierl
28.03.25
 */


// WebSocket setup
if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('js/pwa_sw.js');
}
let remoteIP=location.host;
let ws = new WebSocket('wss://' + remoteIP);

ws.onmessage = event => {
  const data = JSON.parse(event.data);
  if (data.doseRate) {
    document.getElementById('data').textContent = data.doseRate.value.toFixed(2);
  }};

// Service worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/pwa_sw.js');
}


function updateIP(){
  const ip = document.getElementById('ip');
  if (ip) {
    remoteIP = ip.value;
    ws = new WebSocket('wss://' + remoteIP);
  }
}

