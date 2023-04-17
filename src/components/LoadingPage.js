import React from 'react';
import './componentsStyle/LoadingPage.css';
import gif from '../images/duolingo_login.gif';

const LoadingPage = () => (
  <div className="loading-page">
    <img src={gif} alt="wait please" />
    <h2>Loading...</h2>
  </div>
);

export default LoadingPage;
