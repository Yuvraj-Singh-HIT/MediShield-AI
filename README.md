# 🌦️ ClimaBot

**ClimaBot** is an interactive, responsive weather web application that provides:

- 🌍 Real-time weather updates for any location  
- 💬 A smart chatbot that suggests the best places to go based on current weather  
- 📈 Past 7 days’ weather trends with clean and visualized graphs

Built using **HTML**, **Tailwind CSS**, and **JavaScript**, and deployed seamlessly via **Vercel**.

---

## 🔥 Features

- 🔎 **Search Weather** by city or district name
- ☀️ **Detailed Info** including temperature, humidity, UV index, sunrise/sunset, and more
- 🤖 **Weather-Based Chatbot** for activity and travel suggestions
- 📊 **Last 7 Days Weather** data visualization with charts and analysis
- 🌐 **Responsive UI** for mobile and desktop
- ⚡ **Fast & Lightweight** deployment on Vercel

---

## 🖼️ Demo

> Live Demo: [https://climabot.vercel.app](https://clima-bot-pi.vercel.app/)  
---

## 🛠️ Tech Stack

- **Frontend**:  
  - HTML  
  - Tailwind CSS  
  - JavaScript  

### 🌐 API Integration

#### 🌦️ OpenWeatherMap API
- Provides **current weather**, **next 7-day forecast**, **24-hour trends**, **sunrise/sunset**, and **air quality index**.
- Includes **geocoding** to convert user-entered locations to coordinates.
- Enables **real-time weather context** for the AI chatbot.

#### 🤖 AI Chatbot (Gemini / GPT / Claude Integrated)
- The chatbot receives **live weather data as context**.
- Users can ask follow-up questions about the current weather (e.g., *“Is it safe to go out now?”* or *“What does the air quality mean?”*).
- **Personalized responses** are generated using the provided weather data.


### 🚀 Deployment

#### 📦 Vercel
- Deployed using **Vercel** for fast, global delivery.

---

## 📁 File Structure

```bash
climabot/
├── public/
│   ├── index.html              # Home page
│   ├── chatbot.html            # Chatbot UI page
│   ├── about.html              # About page
│   ├── contact.html            # Contact page
│   └── weather.html            # Weather trends and air quality page
│
├── api/
│   ├── weather.js              # Serverless function for weather fetch
│   ├── air-quality.js          # NEW: Serverless function for air quality index
│   └── chat.js                 # Serverless function for chatbot backend
│
├── .env                        # API keys (OpenWeather & Chatbot)
├── package.json                # Project metadata and dependencies
├── README.md                   # Project documentation
```


---

## 🧑‍💻 Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Arijit166/climabot.git
   cd Climabot
   
## 📦 Install Dependencies

```bash
npm install
```

## 🔐 Add Environment Variable

Create a `.env` file in the root directory:

```ini
OPENWEATHER_API_KEY=your_api_key_here
GEMINI_API_KEY=your_api_key_here
```

## 🧪 Run Locally with Vercel

```bash
vercel dev
```

## 🚀 Deployment

Just run:

```bash
vercel --prod
```

## 📄 License

This project is open source and available under the **MIT License**.

## 🤝 Contributing

Feel free to fork the project, open issues, or submit PRs. Any feedback or improvements are welcome!
