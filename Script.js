const statusEl = document.getElementById('status');
const messageEl = document.getElementById('message');
const historyEl = document.getElementById('history');
const sendBtn = document.getElementById('sendBtn');

// Replace with your real values (use .env or Vercel env vars in production)
const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';     // e.g. 123456789:ABCDEF...
const CHAT_ID = 'YOUR_CHAT_ID_HERE';         // your personal Telegram ID

async function sendToTelegram(text) {
  statusEl.textContent = 'Sending to Nia...';
  statusEl.style.color = '#ffd700';

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    if (res.ok) {
      statusEl.textContent = 'Message delivered to Nia';
      statusEl.style.color = '#00ff88';

      const entry = document.createElement('p');
      entry.textContent = `→ ${text}`;
      historyEl.prepend(entry);
    } else {
      throw new Error('Telegram API error');
    }
  } catch (err) {
    statusEl.textContent = 'Failed to reach Nia';
    statusEl.style.color = '#ff4444';
    console.error(err);
  }
}

sendBtn.addEventListener('click', () => {
  const text = messageEl.value.trim();
  if (!text) {
    statusEl.textContent = 'Please write something...';
    statusEl.style.color = '#ffcc00';
    return;
  }

  sendToTelegram(text);
  messageEl.value = '';
});

// Optional: Clear status after a few seconds
setInterval(() => {
  if (statusEl.textContent.includes('delivered') || statusEl.textContent.includes('Failed')) {
    setTimeout(() => {
      statusEl.textContent = 'Ready to speak with Nia…';
      statusEl.style.color = '#d4af37';
    }, 4000);
  }
}, 1000);
