# Basketball Player Card

A React component to display information about a basketball player. The component includes the player's name, image, position, and stats (points per game, assists per game, and rebounds per game).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Styling](#styling)
 

## Installation

To run this project locally, you'll need to have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

1. Clone the repository:

    ```bash
    git clone https://github.com/adity672roy/card_template.git
    cd basketball-card
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:5173` to see the component in action.

## Development

To create the `BasketballPlayerCard` component, follow these steps:

1. Create the folder `components` in the `src` directory and create `BasketballPlayerCard.jsx` file:

    ```javascript
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


    ```

2. Create the `BasketballPlayerCard.css` file in the `components` folder:
 
    ```css
    .player_container {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .player_card {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 20px auto;
      background: #002041;
      text-align: center;
      position: relative;
      transition: transform 0.2s;
    }

    .player_info {
      background: #020c16;
      position: absolute;
      bottom: -10%;
      left: 5%;
      width: 90%;
      z-index: 10;
    }

    .player_stats {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      font-size: 1em;
      color: #333;
      margin: 10px 0;
    }

    .player_stat {
      padding: 10px;
      text-align: left;
    }
    .player_stat p:nth-child(1) {
      font-size: 18px;
      color: #a5a5a5;
    }

    .player_stat p:nth-child(2) {
      font-size: 20px;
      color: white;
    }

    .player_card:hover {
      transform: scale(1.01);
    }

    .player_image {
      height: 100%;
      width: 400px;
      position: absolute;
      z-index: 10;
      right: -6%;
      top: -20px;
    }

    .about_player {
      padding: 10px 0;
    }
    .player_name {
      font-size: 1.5em;
      margin: 10px 0;
    }

    .player_position {
      font-size: 1.2em;
      color: #555;
    }

    .image_container {
      position: relative;
      height: 300px;
      width: 300px;
    }

    .img_background {
      height: 300px;
      width: 300px;
      background: rgb(186, 34, 34);
      border-radius: 50%;
    }

    .number_one {
      position: absolute;
      right: 0;
      top: -20px;
      font-weight: 600;
      font-size: 100px;
    }

    .player_name_container {
      display: flex;
      align-items: center;
      padding: 2rem;
      gap: 2rem;
    }

    @media screen and (max-width: 820px) {
      .player_card {
        max-width: 650px;
      }
    }
    @media screen and (max-width: 680px) {
      .player_card {
        max-width: 400px;
      }
      .player_info {
        bottom: -7%;
      }
      .player_name_container {
        flex-direction: column;
      }
      .about_player {
        padding: 0;
      }
      .player_info {
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
    @media screen and (max-width: 400px) {
      .player_card {
        max-width: 350px;
      }
      .player_stat p:nth-child(1) {
        font-size: 16px;
      }

      .player_stat p:nth-child(2) {
        font-size: 18px;
      }
    }
    @media screen and (max-width: 350px) {
      .player_card {
        max-width: 300px;
      }
    }


    ```

3. Use the component in `App.js`:

    ```javascript
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

    ```

4. Add App css in `App.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
.App {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.554);
  color: #fff;
}

.background_image {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

```

## Styling

The `BasketballPlayerCard` component is styled using CSS in the `BasketballPlayerCard.css` file. The card is designed to be responsive and visually appealing, with hover effects and proper alignment of elements.
 
