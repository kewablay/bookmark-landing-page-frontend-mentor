import React from 'react'
import Logo from '../images/logo-bookmark-white.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'


function Footer() {
  return (
    <footer>
      <div className="footer bg--primary">
        <div className="footer__newsletter">
          <div className="newsletter__introText">
            <p>35,000+ already joined</p>
            <h3>Stay up-to-date with what we’re doing</h3>
          </div>
          <form class="row align-center" action="">
            <div className="col-12 col-md-8">
              <input
                type="Email"
                className="form-control "
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="btn__div col-12 col-md-4">
              <button class="btn btn-bgColor" type="submit">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg--black footer__bottomBar">
        <ul className="container footer__nav">
          <div className="brand">
            <img src={Logo} alt="" className="brand__img" />
          </div>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="social-icons">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer