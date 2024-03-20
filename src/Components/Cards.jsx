import React from 'react'
import assignments from '../Images/assignments.jpg';
import projects from '../Images/projects.jpg';
import notes from '../Images/notes.jpg';


function Cards() {
  return (
    <div>
      <h2 class="display-3 card-head acada"><b>Academics</b></h2>

<div class="card-section row justify-content-center mx-0 px-0">
  <div class="card col-lg-3 col-sm-10 col-md-7 col-xs-10 p-3 m-4 text-center">
    <img class="card-img-top" src={projects}  alt="Loading..."></img>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <button class="btn btn-primary">Get projects</button>
    </div>
  </div>
  <div class="card col-lg-3 col-sm-10 col-md-7 p-3 m-4 text-center">
    <img class="card-img-top" src={notes}  alt="Loading..."></img>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <br></br>
      <button class="btn btn-primary onclick={showPopup}" >Get notes</button>
    </div>
  </div>
  <div class="card col-lg-3 col-sm-10 col-md-7 p-3 m-4 text-center">
    <img class="card-img-top" src={assignments} alt="Loading..."></img>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <button class="btn btn-primary">Get assignments</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
