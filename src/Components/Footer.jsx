import React from 'react'

function Footer() {
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
                      <li class="social-icon__item"><a class="social-icon__link" href="#">
                          <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="#">
                          <ion-icon name="logo-twitter"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="#">
                          <ion-icon name="logo-linkedin"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/iea_cet/">
                          <ion-icon name="logo-instagram"></ion-icon>
                        </a></li>
                      <li class="social-icon__item"><a class="social-icon__link" href="">
                          <ion-icon name="logo-github"></ion-icon>
                        </a></li>
                    </ul>
                    <ul class="menu">
                      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
                      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>
                
                    </ul>
                    <p>&copy; IE Department 2023</p>
                  </footer>
             </div>
  )
}

export default Footer
