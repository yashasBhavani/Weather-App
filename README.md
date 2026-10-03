Weather App 🌤️

A dynamic, real-time weather dashboard built with JavaScript. This application fetches live meteorological data from a third-party weather API and dynamically updates the DOM to display current conditions, forecasts, and location-specific data.

Built as part of the curriculum for The Odin Project, this project focuses heavily on asynchronous JavaScript, working with JSON data, and organizing code into modular components.
🚀 Live Preview

View Live Demo Here
✨ Features

    Real-time Data: Fetches current weather conditions (temperature, humidity, wind speed, etc.) for any searched city.

    Dynamic DOM Manipulation: Updates the UI instantly based on the retrieved API data without reloading the page.

    Unit Toggle: Easily switch between Celsius and Fahrenheit.

    Error Handling: Gracefully handles invalid location searches and network errors.

    Responsive Design: Optimized for both desktop and mobile viewing.

🛠️ Built With

    HTML5 & CSS3

    JavaScript (ES6+) - Heavily utilizing async / await and Promises.

    Webpack - For bundling JavaScript modules and assets.

    ESLint & Prettier - Maintaining clean, consistent code formatting.

    [Insert API Name, e.g., WeatherAPI / OpenWeatherMap] - Providing the weather data.

🧠 What I Learned

Building this project solidified my understanding of several core web development concepts:

    Asynchronous JavaScript: Managing API calls using fetch, async, and await to ensure the application remains responsive while waiting for network requests.

    API Integration: Reading API documentation, parsing JSON responses, and extracting specific data points safely.

    Modular Code Structure: Moving away from a single massive JavaScript file and organizing logic into distinct, importable modules using Webpack.

    Environment Variables: Keeping sensitive API keys secure and out of the main source code.

💻 Local Installation

To run this project locally on your machine, follow these steps:

    Clone the repository:
    Bash

    git clone https://github.com/YourUsername/your-repo-name.git

    Navigate to the project directory:
    Bash

    cd your-repo-name

    Install dependencies:
    Bash

    npm install

    Set up your API Key:

        Create a .env file in the root directory.

        Add your API key: API_KEY=your_api_key_here

    Build the project / Start the dev server:
    Bash

    npm run build
    # OR if you have a dev server configured:
    npm run start

🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
