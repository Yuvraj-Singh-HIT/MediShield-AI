const axios = require('axios');

module.exports = async (req, res) => {
    // Get city from query parameter 'q' to match frontend
    const city = req.query.q || req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (!city) {
        return res.status(400).json({ error: 'City parameter (q) is required' });
    }
    
    if (!apiKey) {
        return res.status(500).json({ error: 'OpenWeather API key not configured' });
    }
    
    try {
        console.log(`Fetching weather for: ${city}`);
        
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: { 
                q: city, 
                appid: apiKey, 
                units: 'metric' 
            },
            timeout: 10000 // 10 second timeout
        });
        
        console.log('Weather data fetched successfully');
        res.status(200).json(response.data);
        
    } catch (error) {
        console.error('Weather API error:', error.message);
        
        if (error.response) {
            // API responded with error status
            const status = error.response.status;
            const message = error.response.data?.message || 'Weather fetch failed';
            
            if (status === 404) {
                return res.status(404).json({ 
                    error: `City "${city}" not found. Please check spelling and try again.` 
                });
            } else if (status === 401) {
                return res.status(401).json({ 
                    error: 'Invalid API key. Please check your OpenWeatherMap API key.' 
                });
            } else if (status === 429) {
                return res.status(429).json({ 
                    error: 'API rate limit exceeded. Please wait and try again.' 
                });
            } else {
                return res.status(status).json({ 
                    error: `Weather API error: ${message}` 
                });
            }
        } else if (error.code === 'ECONNABORTED') {
            return res.status(408).json({ 
                error: 'Request timeout. Please try again.' 
            });
        } else {
            return res.status(500).json({ 
                error: 'Network error. Please check your connection and try again.' 
            });
        }
    }
};