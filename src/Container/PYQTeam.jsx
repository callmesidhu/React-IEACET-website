import '../Container/Content.css';
import React from 'react';

function PYQTeam() {

  return (
    <div>
      <div className="artboard p-1">
        <div className="team-card">

          <div className="team-card__side team-card__side--back">
            <div className="team-card__cover">
              <h4 className="team-card__heading">
                <span className="team-card__heading-span">PYQ Team</span>
              </h4>
            </div>
            <div className="team-card__details">
              <ul style={{overflowY: 'scroll', maxHeight: '260px'}}>
                <li>Jesmi Shabu &nbsp;</li>
                <li>Aiswarya R B &nbsp;</li>
                <li>Jayalakshmi S &nbsp; </li>
                <li>Huda P &nbsp;</li>
                <li>Layana Lajudheen &nbsp; </li>
                <li>Anantha Lakshmi S&nbsp;</li>
                <li>Jeffrin Mathew V&nbsp; </li>
                <li>Noel Denny P &nbsp; </li>
              </ul>
            </div>
          </div>

          <div className="team-card__side team-card__side--front">
            <div className="team-card__theme">
              <div className="team-card__theme-box">
                <p className="team-card__title">PYQ Team</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default PYQTeam;
