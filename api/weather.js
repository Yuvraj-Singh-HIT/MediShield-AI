const axios = require('axios');

module.exports = async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: { q: city, appid: apiKey, units: 'metric' }
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: 'Weather fetch failed.' });
    }
};
