import '../Container/Content.css';
import React from 'react';

function NotesTeam() {
  return (
    <div>
      <div className=" artboard p-1">
        <div className="team-card">

          <div className="team-card__side team-card__side--back">
            <div className="team-card__cover">
              <h4 className="team-card__heading">
                <span className="team-card__heading-span">Notes Team</span>
              </h4>
            </div>
            <div className="team-card__details">
              <ul>
                <li>&nbsp;</li>
                <li>Muhammed Aslam &nbsp;</li>
                <li>Noel Denny P &nbsp; </li>
                <li>Devanand joshy &nbsp;</li>
                <li>Sherin S Saji&nbsp;</li>
              </ul>
            </div>
          </div>

          <div className="team-card__side team-card__side--front">
            <div className="team-card__theme">
              <div className="team-card__theme-box">
                <p className="team-card__title">Notes Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      
    </div>
  );
}

export default NotesTeam;
