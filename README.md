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
    git clone https://github.com/your-username/basketball-card.git
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

2. Open your browser and go to `http://localhost:3000` to see the component in action.

## Development

To create the `BasketballPlayerCard` component, follow these steps:

1. Create the `BasketballPlayerCard.js` file in the `src` directory:

    ```javascript
    import React from 'react';
    import './BasketballPlayerCard.css';

    const BasketballPlayerCard = ({ name, image, position, stats }) => {
      return (
        <div className="player-card">
          <img src={image} alt={`${name}`} className="player-image" />
          <h2 className="player-name">{name}</h2>
          <p className="player-position">{position}</p>
          <div className="player-stats">
            <p>Points per Game: {stats.pointsPerGame}</p>
            <p>Assists per Game: {stats.assistsPerGame}</p>
            <p>Rebounds per Game: {stats.reboundsPerGame}</p>
          </div>
        </div>
      );
    };

    export default BasketballPlayerCard;
    ```

2. Create the `BasketballPlayerCard.css` file in the `src` directory:

    ```css
    .player-card {
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 300px;
      margin: 20px auto;
      overflow: hidden;
      text-align: center;
      transition: transform 0.2s;
    }

    .player-card:hover {
      transform: scale(1.05);
    }

    .player-image {
      width: 100%;
      height: auto;
    }

    .player-name {
      font-size: 1.5em;
      margin: 10px 0;
    }

    .player-position {
      font-size: 1.2em;
      color: #555;
    }

    .player-stats {
      font-size: 1em;
      color: #333;
      margin: 10px 0;
    }

    .player-stats p {
      margin: 5px 0;
    }
    ```

3. Use the component in `App.js`:

    ```javascript
    import React from 'react';
    import BasketballPlayerCard from './BasketballPlayerCard';

    function App() {
      const player = {
        name: "LeBron James",
        image: "https://example.com/lebron.jpg",
        position: "Forward",
        stats: {
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5
        }
      };

      return (
        <div className="App">
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

## Styling

The `BasketballPlayerCard` component is styled using CSS in the `BasketballPlayerCard.css` file. The card is designed to be responsive and visually appealing, with hover effects and proper alignment of elements.
 
