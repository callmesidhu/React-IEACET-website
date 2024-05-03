import React from 'react';
import BG from '../Images/AboutBG.jpg';
import './About.css'

function About() {
  const divStyle = {
    backgroundImage: `url(${BG})`,
    height: 'auto',
    paddingTop: '250px',
    paddingBottom: '250px'
    
  };
  const blur={
    padding: '100px',
    borderRadius: '20px',

  };

  return (
    <div style={divStyle} className="row m-0 justify-content-around about-bg px-5 ">
      <div className='justify-content-around div-blur px-4' style={blur}>
      <div class='div-content'>
      <h1 className="display-3 text-center text-light">
        <b>About</b>
      </h1>
      <p className='text-light text-center'>
      Industrial Engineering is a program focused on optimizing systems and processes in various industries. It covers areas such as process optimization, systems integration, quality management, supply chain management, workforce management, operations research, and sustainability. Students learn to apply mathematical, scientific, and engineering principles to design, analyze, and manage complex systems involving people, materials, equipment, energy, and information. Graduates typically pursue careers as process engineers, production managers, supply chain analysts, or quality assurance engineers in industries like manufacturing, healthcare, transportation, and logistics.
        
      </p>
      </div>
      </div>
    </div>
  );
}

export default About;
