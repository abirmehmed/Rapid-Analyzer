import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import QuoteCard from "./QuoteCard.jsx";
import About from './About.jsx';
import Footer from './Footer.jsx';
import SentimentAnalysis from './SentimentAnalysis.jsx';
import AppDetails from './appdetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/> 
    <QuoteCard/>
    <About/>
    <SentimentAnalysis/>
    <AppDetails/>
    <Footer/>
  </React.StrictMode>,
)
