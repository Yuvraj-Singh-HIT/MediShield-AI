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

- **API Integration**:  
  - OpenWeatherMap API (current weather + historical data)

- **Deployment**:  
  - Vercel (serverless functions to hide API key)

---

## 📁 File Structure

```bash
climabot/
├── public/
│   └── index.html              # Main frontend HTML + JS
├── api/
│   └── weather.js              # Serverless function for weather fetch
├── .env                        # API key (not pushed to GitHub)
├── package.json                # Project metadata and dependencies
├── README.md                   # Project documentation
```


---

## 🧑‍💻 Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Arijit166/climabot.git
   cd climabot
   
## 📦 Install Dependencies

```bash
npm install
```

## 🔐 Add Environment Variable

Create a `.env` file in the root directory:

```ini
OPENWEATHER_API_KEY=your_api_key_here
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
