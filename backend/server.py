from flask_cors import CORS
from flask import Flask, request, jsonify
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

CORS(app)
@app.route('/upload', methods=['POST'])
def upload():
    # Check if the request contains a file
    if 'file' not in request.files:
        return 'No file provided', 400

    file = request.files['file']

    # Check if the file is a CSV file
    if file.filename.split('.')[-1].lower() != 'csv':
        return 'Invalid file type, must be a CSV file', 400

    try:
        # Read the CSV file
        df = pd.read_csv(file)

        # Scale the data
        scaler = StandardScaler()
        scaled_data = scaler.fit_transform(df)

        # Perform PCA
        pca = PCA(n_components=2)
        pca_data = pca.fit_transform(scaled_data)

        # Prepare the chart data
        chart_data = {
            'datasets': [
                {
                    'label': 'PCA',
                    'data': pca_data.tolist(),
                    'backgroundColor': 'rgba(255, 99, 132, 0.2)',
                    'borderColor': 'rgba(255, 99, 132, 1)',
                    'borderWidth': 1,
                    'pointRadius': 5,
                    'pointBackgroundColor': 'rgba(255, 99, 132, 1)',
                }
            ]
        }

        return jsonify(chart_data)

    except Exception as e:
        return f'Error processing file: {str(e)}', 400


if __name__ == '__main__':
    app.run()