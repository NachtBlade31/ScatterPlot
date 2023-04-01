# ScatterPlot
#### **Simple Flak and React Application to Upload a CSV and display the Scattershot diagram**

To run a Flask server on port 5000 and a React app on port 3000, follow these steps:

1. Clone or download the project files to your local machine.
2. Install the necessary dependencies for the Flask server by running `pip install -r requirements.txt` in your terminal.
3 .Install the necessary dependencies for the React app by navigating to the **frontend/wellsfargo/** directory and running `npm install` in your terminal.
4. Open two terminal windows, one for the Flask server and one for the React app.
5. In the first terminal window, navigate to the backend directory and run `python server.py` to start the Flask Server.
6. In the second terminal window, navigate to the client directory and run `npm start` to start the React app on port 3000.
7. Open your web browser and go to `http://localhost:3000` to access the React app. The app should communicate with the Flask server running on `http://localhost:5000` to upload the data and display the scatter plot.
