import React from 'react';
import './Drones.css';

interface DroneItem {
  name: string;
  image: string;
}

const drones: DroneItem[] = [
  {
    name: 'Drone 5"',
    image: require('../assets/images/drones/dron5pal 1.png')
  },
  {
    name: 'Drone 3.5"',
    image: require('../assets/images/drones/dron3,5 1.png')
  },
  {
    name: 'Drone 5" Pro',
    image: require('../assets/images/drones/dron5pal 1.png')
  }
];

export default function Drones(): React.ReactElement {
  return (
    <div className="drones-section">
      <h2 className="drones-title">
        {'DRONES'.split('').map((letter, index) => (
          <span
            key={index}
            className="drone-title-letter"
          >
            {letter}
          </span>
        ))}
      </h2>
      <div className="drones-container">
        {drones.map((drone, index) => (
          <div key={index} className="drone-card">
            <img src={drone.image} alt={drone.name} className="drone-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
