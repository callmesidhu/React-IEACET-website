import React from 'react'
import Card from 'react-bootstrap/Card';
import WebHead from '../Team/WebHead.jpg'

function Team() {
  return (
    <div class="my-5 py-2">
      
    <div class="row p-3 m-5 justify-content-around team-bg py-5">
    <h1 class='display-3 card-head acada text-center team-text mb-5'><b>Team</b></h1>
      <Card style={{ width: '18rem' }} class="p-1 m-2">
      <Card.Body>
      <Card.Img variant="top" src={WebHead} />
      <h3 class="m-2 text-center team-text"><b>S Sidharth</b></h3>
      <h4 class="text-center team-text">Web Head</h4>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} class="p-1">
      <Card.Body>
      <Card.Img variant="top" src={WebHead} />
      <h3 class="m-2 text-center team-text"><b>S Sidharth</b></h3>
      <h4 class="text-center team-text">Web Head</h4>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} class="p-1">
      <Card.Body>
      <Card.Img variant="top" src={WebHead} />
      <h3 class="m-2 text-center team-text"><b>S Sidharth</b></h3>
      <h4 class="text-center team-text">Web Head</h4>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }} class="p-1">
      <Card.Body>
      <Card.Img variant="top" src={WebHead} />
      <h3 class="m-2 text-center team-text"><b>S Sidharth</b></h3>
      <h4 class="text-center team-text">Web Head</h4>
      </Card.Body>
    </Card>
    </div>
     </div>
  )
}

export default Team
