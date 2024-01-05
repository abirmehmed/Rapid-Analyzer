import React, { useState } from "react";
import axios from "axios";
import "./SentimentAnalysis.css";
import HappyFace from "./Sentiment/HappyFace";
import SadFace from "./Sentiment/SadFace";
import NeutralFace from "./Sentiment/NeutralFace";

const SentimentAnalysis = () => {
  const [sentence, setSentence] = useState("");
  const [sentiment, setSentiment] = useState("");

  const analyzeSentiment = () => {
    axios
      .post("http://127.0.0.1:5373/analyze_sentiment", { sentence })
      .then((response) => {
        setSentiment(response.data.sentiment);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section id="chart">
      <div>
        <input
          type="text"
          placeholder="Write a sentence..."
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <button onClick={analyzeSentiment}>Analyze</button>
        <p>{sentiment}</p>
        {sentiment === "positive" && <HappyFace />}
        {sentiment === "negative" && <SadFace />}
        {sentiment === "neutral" && <NeutralFace />}
      </div>
    </section>
  );
};

export default SentimentAnalysis;
