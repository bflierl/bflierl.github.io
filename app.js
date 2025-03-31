// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('✅ Service Worker registered'));
}

// WebSocket connection
const status = document.getElementById('status');
const ws = new WebSocket('wss://echo.websocket.events'); // Simple public echo server

ws.onopen = () => {
  status.textContent = 'Connected!';
  ws.send('Hello from PWA 👋');
};

ws.onmessage = (msg) => {
  console.log('Message from server:', msg.data);
};

ws.onclose = () => {
  status.textContent = 'Disconnected';
};

ws.onerror = () => {
  status.textContent = 'Error';
};
