from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.sentiment.vader import SentimentIntensityAnalyzer  # Updated import

app = Flask(__name__)
CORS(app)

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    sentence = request.json['sentence']
    sentiment_result = get_sentiment(sentence)
    return jsonify({'sentiment': sentiment_result})

def get_sentiment(sentence):
    sid = SentimentIntensityAnalyzer()
    sentiment_scores = sid.polarity_scores(sentence)

    if sentiment_scores["compound"] >= 0.05:
        return "positive"
    elif sentiment_scores["compound"] <= -0.05:
        return "negative"
    else:
        return "neutral"

if __name__ == '__main__':
    app.run(host='localhost', port=5173)