Weather App 

A weather dashboard that works in real time and is developed using JavaScript. The application retrieves up-to-date meteorological data from a third-party weather API and continuously updates the DOM in order to show the current conditions, the forecasts, and data that is specific to the user's location.

This project, which is included in the curriculum of The Odin Project, places a strong emphasis on asynchronous JavaScript, on working with JSON data, and on organizing the code into modular components.
 Live Preview (Currently working on it)

View Live Demo Here

 Features

    Real-time data provides the current weather conditions (such as temperature, humidity, and wind speed) for any city that has been searched.

    The UI is updated instantly upon receipt of the API data without the page having to be reloaded.

    Unit Toggle: Quickly switch between Celsius and Fahrenheit.

    When dealing with invalid location searches or network errors, it responds in a graceful manner.

    Designed in such a way that it is suitable for viewing on both desktop and mobile devices.

Built With

    HTML5 & CSS3

    JavaScript (ES6 and later) - making heavy use of async / await and Promises.

    Webpack is used for bundling JavaScript modules and assets.

    ESLint and Prettier - keeping the code formatting clean and consistent.

    [Insert API Name, e.g., WeatherAPI / OpenWeatherMap] – It provides the weather data.

 What I Learned

Building this project solidified my understanding of several core web development concepts:

    Managing API calls in asynchronous JavaScript by using fetch, async, and await so that the application stays responsive during the time it is waiting for network requests.

    Integrating with an API involves reading the API documentation, interpreting the JSON responses, and safely extracting the required data points.

    The code is organised in a modular fashion by giving up the approach of having one enormous JavaScript file and instead using Webpack to create separate, importable modules.

    Securing sensitive API keys by using environment variables and not including them in the main source code.

 Local Installation

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

        In the root directory create a .env file.

        Add your API key: API_KEY=your_api_key_here

    Build the project / Start the dev server:
    Bash

    npm run build
    # OR if you have a dev server configured:
    npm run start

 Contributing

We welcome contributions, issues, and feature requests! Please feel free to visit the Issues page.
