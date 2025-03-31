/*
Created by B. Flierl
28.03.25
 */


// WebSocket setup
if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('js/pwa_sw.js').then(() => {
      console.log('Service worker registered');
    })
    .catch(err => {
      console.log('Service worker registration failed: ' + err);
    });
}



let remoteIP=location.host;
let ws = new WebSocket('wss://' + remoteIP);

ws.onmessage = event => {
  const data = JSON.parse(event.data);
  if (data.doseRate) {
    document.getElementById('data').textContent = data.doseRate.value.toFixed(2);
  }};



function updateIP(){
  const ip = document.getElementById('ip');
  if (ip) {
    remoteIP = ip.value;
    ws = new WebSocket('wss://' + remoteIP);
  }
}

