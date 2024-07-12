import React from "react";
import BasketballPlayerCard from "./components/BasketballPlayerCard";
import Player from "./assets/player.png";
import "./App.css";
import Background from "./assets/background.jpg";

function App() {
  const player = {
    name: "LeBron James",
    image: Player,
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
  };

  return (
    <div className="App">
      <img src={Background} alt="background"  className="background_image"/>
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
