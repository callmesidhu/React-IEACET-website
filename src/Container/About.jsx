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
    backgroundColor: '#03a9f4',
    borderRadius: '20px',

  };

  return (
    <div style={divStyle} className="row m-0 justify-content-around about-bg px-5">
      <div className='justify-content-around div-blur px-4' style={blur}>
      <div class='div-content'>
      <h1 className="display-3 text-center text-light">
        <b>About</b>
      </h1>
      <p className='text-light text-center'>
        Action is superior to inaction - the blazing light that lit the path of
        College of Engineering in its exuberant growth to the zenith of
        technical education in Kerala, the motto that joined hands with
        technology in building a great legacy of innovative engineers and
        vibrant entrepreneurs.
        <br />
        College of Engineering Trivandrum still remains true to its motto,
        producing highly skilled professionals for the country. Needless to
        say, the vast diversity of the alumni community speaks volumes of the
        marvel the college is.
      </p>
      </div>
      </div>
    </div>
  );
}

export default About;
