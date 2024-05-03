import React, { useState } from 'react';
import logo from '../Images/cet-logo.jpg';

function Header({ setState }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href='https://www.cet.ac.in/' target='_blank' rel="noreferrer" style={{textDecoration:'none'}}><span className="navbar-brand p-3 px-4"><img className="logo" src={logo} alt="IEA-CET Logo" /><b>IEA-CET</b></span></a>
          <button className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`} type="button" onClick={toggleNav} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item active text-white" onClick={() => setState("Home")}>
                <a className="nav-link" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.nexeracet.tech/" target="_blank" rel="noopener noreferrer">Fest</a>
              </li>
              <li className="nav-item" onClick={() => setState("Team")}>
                <a className="nav-link" href="#Team">Team</a>
              </li>
              <li className="nav-item" onClick={() => setState("Contact")}>
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
              <li className="nav-item" onClick={() => setState("About")}>
                <a className="nav-link" href="#About">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="line"></hr>
    </div>
  );
}

export default Header;
