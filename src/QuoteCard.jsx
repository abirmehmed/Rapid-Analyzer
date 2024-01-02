import React from "react";
import "./QuoteCard.css";
import steveJobsImage from "./image/stevejobs.jpg";

const QuoteCard = () => {
  return (
    <div className="quote-card">
      <div className="quote-content">
        <div className="quote-text">
          "Get closer than ever to your customers. So close that you tell them
          what they need well before they realize it themselves."
        </div>
        <div className="quote-author">- Steve Jobs</div>
        <div className="quote-occupation">Co-founder of Apple</div>
      </div>
      <div className="quote-image">
        <img src={steveJobsImage} alt="Steve Jobs" />
      </div>
    </div>
  );
};

export default QuoteCard;
