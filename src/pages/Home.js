import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/nature1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Nature Web </h1>
        <p> The green revolution is crucial</p>
        <Link to="/menu">
          <button> EXPLORE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
