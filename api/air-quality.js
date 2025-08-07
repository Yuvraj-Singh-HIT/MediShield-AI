const axios = require('axios');
module.exports = async (req, res) => {
    const { lat, lon } = req.query;
    const apiKey = process.env.OPENWEATHER_API_KEY;
   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
   
    if (!lat || !lon) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }
   
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/air_pollution', {
            params: { lat, lon, appid: apiKey },
            timeout: 10000
        });
       
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Air Quality API error:', error.message);
        res.status(500).json({ error: 'Failed to fetch air quality data' });
    }
};