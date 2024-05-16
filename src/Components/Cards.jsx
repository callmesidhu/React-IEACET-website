import React from 'react'
import pyqs from '../Images/pyqs.jpg';
import projects from '../Images/projects.jpg';
import notes from '../Images/notes.jpg';


function Cards() {
const popUp=()=>{
   alert("This feature is under maintenance. Please checkout after sometimes......!")
}
  return (
    <div class='mx-2 mb-5'>
      <h2 class="display-3 card-head acada"><b>Academics</b></h2>

<div class="card-section row justify-content-center mx-0 px-0">
  <div class="card col-lg-3 col-sm-10 col-md-7 col-xs-10 p-3 m-4 text-center">
    <img class="card-img-top" src={projects}  alt="Loading..."></img>
    <div class="card-body">
      <a href="https://drive.google.com/drive/folders/1ikEYNprtCWpKzLw4ZUAmOsIvpjsO3bEC" target="_blank" rel="noreferrer">
      <button class="btn btn-primary" >Get Projects</button>
  </a>
    </div>
  </div>
  <div class="card col-lg-3 col-sm-10 col-md-7 p-3 m-4 text-center">
    <img class="card-img-top" src={notes}  alt="Loading..."></img>
    <div class="card-body">
      <br></br>
<a href="https://drive.google.com/drive/folders/1CjcX6E-c_eJ80jOKP4WRqnEJVl_N74uI" target="_blank" rel="noreferrer">
      <button class="btn btn-primary" >Get notes</button>
</a>
    </div>
  </div>
  <div class="card col-lg-3 col-sm-10 col-md-7 p-3 m-4 text-center">
    <img class="card-img-top" src={pyqs} alt="Loading..."></img>
    <div class="card-body">
   <a href="https://drive.google.com/drive/folders/1buvAXpNqwQLE1GcB-Fgqq_nfQgHMr8jc" target="_blank" rel="noreferrer">
      <button onClick={popUp} class="btn btn-primary">Get PYQs</button>
   </a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
