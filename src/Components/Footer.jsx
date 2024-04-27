import React from 'react'
import {animateScroll as scroll} from 'react-scroll';


function Fest(){
  window.open("https://www.nexeracet.tech/", "_blank");
}

function Footer({setState}) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
 
  
  
  return (
            <div class="bottom-wave">
            <footer class="footer">
                    <div class="waves">
                      <div class="wave" id="wave1"></div>
                      <div class="wave" id="wave2"></div>
                      <div class="wave" id="wave3"></div>
                      <div class="wave" id="wave4"></div>
                    </div>
                    
                    <ul class="social-icon">
                  
                      <li class="social-icon__item"><a class="social-icon__link" href="#cet">
                          <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="#cet">
                          <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="#cet">
                          <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/iea_cet/" target="_blank">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="#cet">
                          <ion-icon name="logo-github"></ion-icon>
                        </a></li>
                      
                    </ul>
                    
                    <ul class="menu">
                      <li onClick={() => {setState("Home"); scrollToTop();}}  class="menu__item"><a class="menu__link" href="#" >Home</a></li>
                      <li onClick={Fest} class="menu__item"><a class="menu__link" href="#Team">Fest</a></li>
                      <li onClick={()=>{setState("Team"); scrollToTop();}} class="menu__item"><a class="menu__link" href="#Team">Team</a></li>
                      <li onClick={()=>{setState("Contact"); scrollToTop();}} class="menu__item"><a class="menu__link" href="#Contact">Contact</a></li>
                      <li onClick={()=>{setState("About"); scrollToTop();}} class="menu__item"><a class="menu__link" href="#About">About</a></li>
                      
                
                    </ul>
                    <p>&copy; IE Department 2023</p>
                  </footer>
             </div>
  )
}

export default Footer
