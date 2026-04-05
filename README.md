# 🌤️ SkyCast: AI-Enhanced Weather Intelligence
SkyCast is a professional weather dashboard built to provide high-precision atmospheric data with a modern, glassmorphic UI. It leverages **Redux-Thunk** for complex asynchronous state management and **Tailwind CSS** for a premium aesthetic.
---

## 📸 Interface Preview
<img width="1366" height="1012" alt="WeatherAppUI" src="https://github.com/user-attachments/assets/f78d32c0-d595-4a05-95e2-9f6a8f04ba1d" />

---

## 🚀 Key Engineering Features

* **⚡ Async Data Architecture:** Utilizes `Redux-Thunk` and `Axios` to manage multi-endpoint API calls (Current & 5-Day Forecast) with centralized error handling.
* **💎 Premium Glassmorphism:** A custom UI built with Tailwind CSS, featuring backdrop blurs, radial gradients, and fluid typography.
* **📡 Optimized Data Mapping:** Implements logic to filter 40+ API data points into a clean, readable 5-day mid-day forecast grid.
* **⏳ Perceived Performance:** Integrated Skeleton Loaders to ensure a smooth user experience during high-latency network requests.
* **📱 Universal Responsiveness:** Fully adaptive layouts designed for seamless transitions between mobile, tablet, and ultra-wide displays.

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Library** | React 18 (Functional Components) |
| **State** | Redux (Legacy Store with Thunk Middleware) |
| **Styling** | Tailwind CSS + DaisyUI |
| **API** | OpenWeatherMap (Current & 5-Day) |
| **HTTP Client** | Axios |

---

## ⚙️ Installation & Setup

1. **Clone the Project**
   ```bash
   git clone [https://github.com/your-username/skycast-weather.git](https://github.com/your-username/skycast-weather.git)
   cd skycast-weather
   ---
   Install Dependencies

Bash
npm install
Configure Environment
Create a .env file in the root:

Code snippet
VITE_WEATHER_API=your_api_key_from_openweathermap
Start Development Server

Bash
npm run dev
📝 Performance Logic Note
Unlike standard weather apps, SkyCast intelligently parses the 3-hour interval data from OpenWeatherMap to present a daily summary, reducing cognitive load for the user while maintaining high data accuracy.
