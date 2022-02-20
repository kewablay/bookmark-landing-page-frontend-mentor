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
          <form action="">
            <input
              type="Email"
              className="form-control"
              placeholder="example@email.com"
              required
            />
            <button class="btn btn-bgColor col-12" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>

      <div className="bg--black footer__bottomBar">
        <ul className="footer__nav">
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