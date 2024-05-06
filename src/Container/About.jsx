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
        Industrial Engineering at the College of Engineering Thiruvananthapuram, the pioneering institution in Kerala Technological University, stands as the sole provider of this esteemed course, cementing its status as the first engineering college in Kerala. This program, a sub-branch of mechanical engineering, epitomizes modern industrial operations by integrating engineering principles with management techniques. It empowers students with a holistic grasp of manufacturing processes, supply chain management, operations research, and quality control, fostering analytical, problem-solving, and leadership skills crucial for success in today's competitive industrial landscape. Graduates emerge as sought-after professionals, capable of driving organizational excellence across diverse sectors, from manufacturing to healthcare and technology, positioning them as catalysts for impactful change.        
      </p>
      </div>
      </div>
    </div>
  );
}

export default About;
