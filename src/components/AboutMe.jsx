import React from 'react';
import './AboutMe.css';

const PlayerCard = ({ name, description, photo}) => {
  const DownloadCV = () => {
    window.location.href = '../src/assets/CV_Irving_Arturo_Rodríguez_García.pdf';
  };
  return (
    <div className="player-card">
      <img src='../src/assets/foto.png' alt={`${name}'s photo`} className="player-image"/>
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-description">{description}</p>
        <button onClick={DownloadCV}>Descargar CV</button>

      </div>
    </div>
  );
};


const AboutMe = () => {
    const Profesional = {
      name: 'Irving Arturo Rodríguez Gracía',
      description: 'Soy un profesional apasionado de la ciencia y tecnología, recientemente participe en el programa Generation, donde pude desarrollar habilidades como programador junior Java Full Stack, mi pasión por el desarrollo de nuevos proyectos innovadores y mi formación académica como ingeniero petrolero, me han llevado a participar en grandes proyectos de la industria Oil and Gas que han sido clave en el desarrollo del país, como lo fue la construcción de la Refineria Olmeca de dos bocas, Tabasco.',
      photo: '../src/assets/foto.png'
      
    };
  
    return (
      <div className="AboutMe">
        <PlayerCard name={Profesional.name} description={Profesional.description} photo={Profesional.photo} />
      </div>
    );

    
  };



  export default AboutMe;
  
