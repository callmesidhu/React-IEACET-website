import React from 'react'
import logo from '../Images/cet-logo.jpg';

function Header() {
  return (
    <div>
      <div class="header col-sm-12 col-md-12 col-lg-12">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand p-3 px-4" href="#"><img class="logo" src={logo}></img><b>IEA-CET</b></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active text-white">
          <a class="nav-link " id="nav-link-text" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.nexeracet.tech/" target="_blank">Fest</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">About</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  <hr class="line"></hr>
    </div>
  )
}

export default Header
