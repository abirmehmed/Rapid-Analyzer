# Project Title: Sentiment Analysis and Google Play Store Data Visualization

This project is a full-stack application that uses React.js for the frontend, Flask and Python for sentiment analysis, and Node.js for data scraping. The application allows users to input a sentence and get a sentiment analysis result. It also allows users to input an App ID from the Google Play Store and get a detailed visualization of the app's ratings.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Flask**: A micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.
- **Python**: A high-level, interpreted, interactive, and object-oriented scripting language.
- **SentimentIntensityAnalyzer from nltk.sentiment.vader**: A tool used for sentiment analysis in Python.
- **Node.js**: An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- **google-play-scraper**: A Node.js scraper module to get data from the Google Play Store.
- **D3.js**: A JavaScript library for producing dynamic, interactive data visualizations in web browsers.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## How to Run the Program

1. **Clone the repository**: Use the command `git clone <repository-url>` to clone the repository to your local machine.

2. **Install dependencies**: Navigate to the project directory and run `npm install` to install all the necessary dependencies.

3. **Start the Vite server**: Navigate to the project directory and run the following commands:

   ```
   cd my-app
   npm run dev
   ```

   This will start the Vite server. You should see a message indicating that the server is running at `http://localhost:5173/`. You can Ctrl+Click this link to open it in your browser.

4. **Start the Node.js server**: Open a new terminal window and navigate to the Node.js server directory within the project. Run the following commands:

   ```
   cd my-app/node
   node app.js
   ```

   This will start the Node.js server.

5. **Start the Flask server**: Open another new terminal window and activate your Python environment. Then, set the Flask app and start the Flask server with the following commands:

   ```
   myenv\Scripts\activate
   set FLASK_APP=app.py
   flask run --port 5373
   ```

   This will start the Flask server.

6. **Open the application**: You should now be able to interact with the application in your web browser at `http://localhost:5173/`.

Please note that you need to have all three servers (Vite, Node.js, and Flask) running simultaneously for the application to work correctly. Each server should be started in a separate terminal window.

## Project Structure

The project is divided into two main parts: the sentiment analysis and the Google Play Store data visualization.

### Sentiment Analysis

The sentiment analysis part of the application allows users to input a sentence and get a sentiment analysis result. The sentiment can be "positive", "negative", or "neutral". The sentiment analysis is done using the SentimentIntensityAnalyzer from nltk.sentiment.vader in Python.

### Google Play Store Data Visualization

The Google Play Store data visualization part of the application allows users to input an App ID from the Google Play Store and get a detailed visualization of the app's ratings. The data is scraped from the Google Play Store using the google-play-scraper module in Node.js. The data visualization is done using D3.js.

## Conclusion

This project demonstrates the use of various technologies to create a full-stack application. It showcases the use of React.js for building the frontend, Flask and Python for sentiment analysis, Node.js for data scraping, and D3.js for data visualization. The application provides a user-friendly interface for users to get sentiment analysis results and visualize Google Play Store data.