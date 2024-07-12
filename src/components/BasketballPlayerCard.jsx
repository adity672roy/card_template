import React from "react";
import "./BasketballPlayerCard.css";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player_container">
      <div className="player_card">
        <div className="player_name_container">
          <div>
            <h2 className="player_name">{name}</h2>
            <p className="player_position">{position} Player</p>
            <p className="about_player">LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association.</p>
          </div>
          <div className="image_container">
            <div className="img_background">
              <p className="number_one">#1</p>
            </div>
            <img src={image} alt={`${name}`} className="player_image" />
          </div>
        </div>
        <div className="player_info">
          <div className="player_stats">
            <div className="player_stat">
              <p>Points</p>
              <p>{stats.pointsPerGame}</p>
            </div>
            <div className="player_stat">
              <p>Assists</p>
              <p>{stats.assistsPerGame}</p>
            </div>
            <div className="player_stat">
              <p>Rebounds</p>
              <p>{stats.reboundsPerGame}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
