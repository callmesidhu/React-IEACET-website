import React from 'react'
import Card from 'react-bootstrap/Card';
import WebHead from '../Team/WebHead.jpg'
import WebTeam1 from '../Team/WebTeam1.jpg'
import WebTeam2 from '../Team/WebTeam2.jpg'
import PYQTeam from './PYQTeam';
import NotesTeam from './NotesTeam';

function Team() {
  
  const teamImage={
    width: '17rem',
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '50px'
  }
  
  return (
    <div class="my-5 py-2">
      <div class="row justify-content-around team-bg py-5 rounded-sm-md-lg" style={{ margin: '5%' }}>
        <h1 class='display-3 card-head acada text-center team-text mb-5'><b>Team</b></h1>
        
        <Card style={teamImage} class="p-1 ">
          <Card.Body>
            <Card.Img variant="top" src={WebHead} />
            <h3 class="m-2 text-center team-text"><b>S Sidharth</b></h3>
            <h4 class="text-center team-text">Web Team - Head</h4>
          </Card.Body>
        </Card>

        <Card style={teamImage} class="p-1">
          <Card.Body>
            <Card.Img variant="top" src={WebTeam1} />
            <h3 class="m-2 text-center team-text"><b>Nooh A Vajid</b></h3>
            <h4 class="text-center team-text">Web Team</h4>
          </Card.Body>
        </Card>

        <Card style={teamImage} class="p-1">
          <Card.Body>
            <Card.Img variant="top" src={WebTeam2} />
            <h3 class="m-2 text-center team-text"><b>Nived C</b></h3>
            <h4 class="text-center team-text">Web Team</h4>
          </Card.Body>
        </Card>

        <div className='row justify-content-around'>
        <div className='col-lg-6 mt-3'>
          <PYQTeam />
        </div>
        <div className='col-lg-6 mt-3'>
          <NotesTeam />
        </div>
      </div>
      </div>

     
    </div>
  )
}

export default Team;
