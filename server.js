// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');

// // Load environment variables from .env
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json()); // for parsing JSON request bodies
// app.use(express.static(path.join(__dirname, 'public'))); // serve static files

// // Import API handlers
// const weather = require('./api/weather');
// const chat = require('./api/chat');
// const airQuality = require('./api/air-quality');

// // API routes
// app.get('/api/weather', async (req, res) => {
//   try {
//     await weather(req, res);
//   } catch (err) {
//     console.error('Weather API error:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.get('/api/chat', async (req, res) => {
//   try {
//     await chat(req, res);
//   } catch (err) {
//     console.error('Chat API error:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.get('/api/air-quality', async (req, res) => {
//   try {
//     await airQuality(req, res);
//   } catch (err) {
//     console.error('Air Quality API error:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ ClimaBot running at http://localhost:${PORT}`);
// });
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Debug: log API key (only first 5 chars for safety)
console.log("🔑 OpenWeather API Key loaded:", process.env.OPENWEATHER_API_KEY ? process.env.OPENWEATHER_API_KEY.slice(0, 5) + "..." : "NOT FOUND");

// Middleware
app.use(express.json()); // for parsing JSON request bodies
app.use(express.static(path.join(__dirname, 'public'))); // serve static files

// Import API handlers
const weather = require('./api/weather');
const chat = require('./api/chat');
const airQuality = require('./api/air-quality');

// API routes
app.get('/api/weather', async (req, res) => {
  try {
    await weather(req, res);
  } catch (err) {
    console.error('❌ Weather API error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/chat', async (req, res) => {
  try {
    await chat(req, res);
  } catch (err) {
    console.error('❌ Chat API error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/air-quality', async (req, res) => {
  try {
    await airQuality(req, res);
  } catch (err) {
    console.error('❌ Air Quality API error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ ClimaBot running at http://localhost:${PORT}`);
});
