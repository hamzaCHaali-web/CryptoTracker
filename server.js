const express = require('express');

const axios = require('axios');

const path = require('path');

const app = express();



const PORT = 3000;



let prices = [];



const fetchPrices = async () => {

  try {

    const response = await axios.get('https://api.binance.com/api/v3/ticker/price');

    const data = response.data;



    // Only filter pairs that include USDT (i.e., prices in USD)

    prices = data.filter(pair => pair.symbol.endsWith('USDT')).map(pair => ({

      symbol: pair.symbol.replace('USDT', '/USDT'),

      price: parseFloat(pair.price).toFixed(2),

    }));



    // Sort the prices in the same order as Binance market display

    prices.sort((a, b) => a.symbol.localeCompare(b.symbol));



  } catch (error) {

    console.error('Error fetching data:', error);

  }

};



// Serve static files (HTML, CSS, JS)

app.use(express.static(path.join(__dirname, 'public')));



// API endpoint to fetch prices

app.get('/api/prices', (req, res) => {

  res.json(prices);

});



// Fetch prices every 15 seconds

setInterval(fetchPrices, 800);

fetchPrices(); // initial fetch



// Start the server

app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`);

});