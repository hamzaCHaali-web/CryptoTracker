
---

# 💹 Crypto Price Tracker

A real-time cryptocurrency price tracker web app built with HTML, CSS, and JavaScript. It displays current prices for USDT pairs from your API, with visual indicators for price changes — green for price increases, red for decreases.

## 📌 Features

- 🔄 Auto-refresh prices every second
- 📈 Highlights price changes (green ↑ / red ↓)
- 🌐 Multi-language support (EN, AR, FR, ES, etc.)
- 💱 Currency conversion (USD, MAD, EUR, OMR)
- ⭐ Prioritizes top coins: `BTC`, `ETH`, `SOL`, `TON`, `USDT`, `BNB`
- 🔒 Secured API access with token authorization

## 🧰 Tech Stack

- HTML, CSS, Vanilla JavaScript
- Backend (API) expected to serve `/api/prices` endpoint
- Hosted locally or in Electron if desired

## 🖥️ Local Setup

1. Clone the repo:

```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
```

2. Set your API token:

In the HTML `<script>` tag, replace:

```js
const token = 'your-token-here';
```

with your actual bearer token.

3. Serve the project using any local server:

For example, with Python:

```bash
python3 -m http.server
```

Or using Live Server extension in VSCode.

4. Visit:  
`http://localhost:8000` or the port your server is running on.

## 🛠️ API Requirements

Your backend should return data in the following format at `/api/prices`:

```json
[
  { "symbol": "BTC/USDT", "price": "71234.45" },
  { "symbol": "ETH/USDT", "price": "3675.89" }
]
```

Add more fields if needed for internal logic, but `symbol` and `price` are required.

## 📄 License

MIT License — free to use, modify, and share.

---

Let me know if you want a version of the app bundled into Electron, or deployed online.
