import React from 'react';
import './AboutMe.css';

const PlayerCard = ({ name, description, imageUrl }) => {
  return (
    <div className="player-card">
      <img src='imageUrl' alt={`${name}'s photo`} className="player-image" />
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-description">{description}</p>
      </div>
    </div>
  );
};


const AboutMe = () => {
    const player = {
      name: 'Irving Arturo Rodríguez Gracía',
      description: 'Soy un profesional apasionado de la ciencia y tecnología, recientemente participe en el programa Generation, donde pude desarrollar habilidades como programador junior Java Full Stack, mi pasión por el desarrollo de nuevos proyectos innovadores y mi formación académica como ingeniero petrolero, me han llevado a participar en grandes proyectos de la industria Oil and Gas que han sido clave en el desarrollo del país, como lo fue la construcción de la Refineria Olmeca de dos bocas, Tabasco.',
      imageUrl: './assets/foto.png', // imagen
    };
  
    return (
      <div className="AboutMe">
        <PlayerCard name={player.name} description={player.description} imageUrl={player.imageUrl} />
      </div>
    );
  };

  export default AboutMe;
  
